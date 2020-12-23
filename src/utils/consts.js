// ЗДЕСЬ СОХРАНЯЕМ ВСЕ КОНСТАНТЫ ЧТОБЫ НЕ БЫЛО ХАОСА

export const routes = {
  REGISTRATION_ROUTE: '/auth/registration',
  LOGIN_ROUTE: '/auth/login',
  MAIN_ROUTE: '/'
}

export const statuses = {
  CREATED: 'created',
  FORMALIZING: 'formalizing',
  COLLECTING: 'collecting',
  DELIVERING: 'delivering',
  DONE: 'done'
}

export const employees = {
  WAREHOUSE: 'warehouse',
  DELIVERY: 'delivery',
  LAWYER: 'lawyer'
}

export const roles = {
  ...employees,
  ADMIN: 'admin',
  CLIENT: 'client'
}

export const statusToLabel = {
  [statuses.CREATED]: 'Создан',
  [statuses.FORMALIZING]: 'Оформление',
  [statuses.COLLECTING]: 'Сборка',
  [statuses.DELIVERING]: 'Доставка',
  [statuses.DONE]: 'Выполнен'
}

export const serverAddress = process.env.REACT_APP_API_PREFIX
