import express from 'express'
const router = express.Router()
import { Request, Response } from 'express'
import { userMiddleware } from '../middlewares/user-middleware'
import { createUser, findUserByEmail } from '../../models/user'

router.post('/api/user/get', userMiddleware, async (req: Request, res: Response) => {
    const user = { username: req.body.username, email: req.body.email }
    createUser(user)
    res.status(200).send("Requisição chegou na rota.")
})

export { router as usersRoute }