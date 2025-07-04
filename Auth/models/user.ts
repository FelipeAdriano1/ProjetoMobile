import returnDB from '../config/database'
import { userData } from '../interfaces/userData';

async function createUser(user: userData) {
    const db = await returnDB()
    if (db) {
        console.log("[MODEL USER] - Criando usuário...")
        const createDate = new Date()

        const userTime = {
            ...user,
            createdAt: createDate,
            updateAt: createDate
        }

        await findUserByEmail(user.email)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log("Erro")
            })

        const insert = await db.collection('finance-auth').insertOne(userTime)
        return insert
    }
}

async function findUserByEmail(email: string) {
    console.log('[MODEL USER] - Verificando se o usuário já existe...')
    const db = await returnDB()
    return await db.collection<userData>('users').findOne({ email })
}

export { createUser, findUserByEmail }