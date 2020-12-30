import { makeAutoObservable } from 'mobx'
import { employees, statuses } from '../../../utils/consts'

const employeeToStatus = {
  [employees.LAWYER]: statuses.FORMALIZING,
  [employees.WAREHOUSE]: statuses.COLLECTING,
  [employees.DELIVERY]: statuses.DELIVERING
}

// statusesLRMapping is a mapping of left and right boards for a given board
const statusesLRMapping = {
  [statuses.FORMALIZING]: [statuses.CREATED, statuses.COLLECTING],
  [statuses.COLLECTING]: [statuses.FORMALIZING, statuses.DELIVERING],
  [statuses.DELIVERING]: [statuses.COLLECTING, statuses.DONE]
}

// FeedStore is an adaptor for OrderStore to handle feed processing
class FeedStore {
  constructor (userStore, orderStore) {
    makeAutoObservable(this)
    this._userStore = userStore
    this._orderStore = orderStore
  }

  async init () {
    // TODO: add pagination
    await this._orderStore.init({
      status: employeeToStatus[this._userStore.Role],
      per_page: 1
    })
  }

  get IsReady () {
    return this._orderStore.Orders !== null
  }

  get IsEmpty () {
    return this._orderStore.Orders.length === 0
  }

  get FrontCard () {
    return Object.values(this._orderStore.Orders)[0]
  }

  async acceptCard () {
    const [, status] = statusesLRMapping[employeeToStatus[this._userStore.Role]]
    await this._updateFrontCardStatus(status)
  }

  async declineCard () {
    const [status] = statusesLRMapping[employeeToStatus[this._userStore.Role]]
    await this._updateFrontCardStatus(status)
  }

  async _updateFrontCardStatus (status) {
    await this._orderStore.updateStatus(this.FrontCard.id, status)
    await this._orderStore.init({
      status: employeeToStatus[this._userStore.Role],
      per_page: 1
    })
  }
}

export default FeedStore
