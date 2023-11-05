import { rateLimit } from 'express-rate-limit'

export const reqLimit = rateLimit({

    windowMs: 15 * 60 * 1000, // 24 hrs in milliseconds
    max: 1,
    message: 'You have exceeded the 100 requests in 24 hrs limit!',
    standardHeaders: true,
    legacyHeaders: false

});