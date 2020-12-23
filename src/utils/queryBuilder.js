export const buildQueryString = query => Object.keys(query).map(key => (
    `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
)).join('&')
