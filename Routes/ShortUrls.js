import express from 'express'
import { createShortUrls, getShortUrls } from '../Controllers/ShortUrls.js'
import { protect } from '../Middlewares/auth.js'

const router = express.Router()

router.get('/', protect, getShortUrls)
router.post('/', protect, createShortUrls)

export default router
