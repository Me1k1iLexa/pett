import { Router } from 'express'
import  {getUsers}  from '../controllers/admin.controller'

const router = Router()

router.get('/users', getUsers)

export default router