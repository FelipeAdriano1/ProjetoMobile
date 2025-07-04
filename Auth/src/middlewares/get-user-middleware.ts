import validator from 'validator'
import { NextFunction, Request, Response } from 'express'
import * as zod from 'zod/v4'

interface userData {
    username: string
    email: zod.ZodEmail
}

async function getUserMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('[GET USER MIDDLEWARE] - validando objeto recebido.')
    typeof req.body === 'object' ?
        () => {
            
        }
        :
        () => {

        }
}