import express from 'express'
const router = express.Router()
import { Request, Response } from 'express'

router.post('/api/user/get', (req: Request, res: Response) => {
    console.log(req.body)

    res.status(200).send("Requisição chegou na rota.")
})

export { router as getUser }