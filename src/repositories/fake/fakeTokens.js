// adminToken is a token with the payload {id: 1, username: 'testuser', role: 'admin'}
const adminToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6InRlc3R1c2VyIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsInJvbGUiOiJhZG1pbiJ9.6b2wuX-7tRyupxCRI0TwPT10fnunVCqLWyuzGTy6FrE'

// warehouserToken is a token with the payload {id: 1, username: 'testwarehouser', role: 'warehouse'}
const warehouserToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0d2FyZWhvdXNlciIsInJvbGUiOiJ3YXJlaG91c2UifQ.riT4SYBvXn7XSQ_b9PY5sV_h18smK3oqFbFi7Ry4dYY'

const tokens = [
  adminToken,
  warehouserToken
]

export default tokens
