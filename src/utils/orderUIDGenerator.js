export const generateOrderUID = (userId, orderId) => (
    `${String(userId).padStart(4, '0')}-${String(orderId).padStart(6, '0')}`
)
