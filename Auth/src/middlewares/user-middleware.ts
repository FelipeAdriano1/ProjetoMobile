import validator from 'validator'
import { NextFunction, Request, Response } from 'express'
import { userData } from '../../interfaces/userData'
import { RequestError } from '../../errors/req-error'

function validateUser(obj: any): string | null {
    if(typeof obj !== 'object' && obj === null) return "Objeto inválido."
    if(typeof obj.username !== 'string' && obj.username.length < 6) return "Username não segue o padrão esperado (mínimo 6 caracteres.)"
    if(typeof obj.email !== 'string' && !validator.isEmail(obj.email)) return "Email não segue formato esperado."

    return null
}

async function userMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('[GET USER MIDDLEWARE] - validando objeto recebido.')
    if (!validateUser(req.body)) {
        console.log("[GET USER MIDDLEWARE] - Objeto válido!")
        return next()
    }

    throw new RequestError("Objeto mal formatado.", 400)
}

export { userMiddleware }