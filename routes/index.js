import { reqLimit } from '../middlewares/rate-limits';


const path = require('path');
const router = require('express').Router();

router.use(reqLimit);
