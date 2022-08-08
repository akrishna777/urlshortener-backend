import express from 'express'

const router = express.Router()

import {
  register,
  login,
  forgotPassword,
  resetPassword,
} from '../Controllers/Auth.js'

router.post('/register', register)
router.post('/login', login)
router.post('/forgotPassword', forgotPassword)
router.put('/resetPassword/:resetToken', resetPassword)

export default router
