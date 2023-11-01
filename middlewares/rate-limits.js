import { rateLimit } from 'express-rate-limit'

export const reqLimit = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5,
    standardHeaders: true,
	legacyHeaders: false
});