import { reqLimit } from '../middlewares/rate-limits';


const path = require('path');
const router = require('express').Router(reqLimit);

router.use(reqLimit)
