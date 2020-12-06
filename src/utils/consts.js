// ЗДЕСЬ СОХРАНЯЕМ ВСЕ КОНСТАНТЫ ЧТОБЫ НЕ БЫЛО ХАОСА

const REGISTRATION_ROUTE = '/auth/registration'
const LOGIN_ROUTE = '/auth/login'
const MAIN_ROUTE = '/'

const CREATED = "created"
const PAID = "paid"
const DELIVERING = "delivering"
const DELIVERED = "delivered"

export const routes = {
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE
}

export const statuses = {
    CREATED,
    PAID,
    DELIVERING,
    DELIVERED
}
