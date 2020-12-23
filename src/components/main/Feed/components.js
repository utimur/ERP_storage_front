import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Check, Close } from '@material-ui/icons'
import { Box } from '@material-ui/core'
import { FrontCardWrapper } from './Cards/CardWrappers'
import { employeeCardFactory } from './employeeCardFactory'
import FeedStore from './store'
import { observer } from 'mobx-react-lite'
import { Alert, AlertTitle } from '@material-ui/lab'
import DependenciesContext from '../../DependenciesContext'
import { toJS } from 'mobx'

const FeedCards = observer(({ className, employee, feed }) => {
  const CardCls = employeeCardFactory(employee)

  return (
    <div className={className}>
      <FrontCardWrapper>
        <CardCls
          order={feed.FrontCard}
        />
      </FrontCardWrapper>
    </div>
  )
})

const CircleButton = styled(({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
})`
    background: white;
    border-radius: 100%;
    border: none;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3em;
    outline: none;

    &:active {
        transform: scale(0.9);
    }
`

const StyledFeedCards = styled(FeedCards)`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonBar = observer(({ className, feed }) => {
  return (
    <div className={className}>
      <CircleButton
        onClick={feed.declineCard}
      >
        <Box color='error.main'>
          <Close />
        </Box>
      </CircleButton>
      <CircleButton
        onClick={feed.acceptCard}
      >
        <Box color='success.main'>
          <Check />
        </Box>
      </CircleButton>
    </div>
  )
})

const StyledButtonBar = styled(ButtonBar)`
    position: absolute;
    display: flex;
    margin-top: 90vh;
`

const Feed = styled(observer(({ className, employee, feed }) => {
  return (
    <div className={className}>
      <StyledFeedCards employee={employee} feed={feed} />
      <StyledButtonBar feed={feed} />
    </div>
  )
}))`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FeedContainer = observer(({ employee }) => {
  const { userStore, orderStore } = useContext(DependenciesContext)
  const feedRef = useRef(new FeedStore(userStore, orderStore))
  useEffect(() => { feedRef.current.init() }, [feedRef])

  const feed = feedRef.current

  if (!feed.IsReady) {
    return null
  }

  return !feed.IsEmpty ? (
    <Feed employee={employee} feed={feed} />
  ) : (
    <Alert severity='info' style={{ height: 'fit-content', width: '100%' }}>
      <AlertTitle>Нет заказов</AlertTitle>
      В данный момент заказов нет. <strong>Проверьте позже!</strong>
    </Alert>
  )
})

export default FeedContainer
