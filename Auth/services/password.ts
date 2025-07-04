import bcrypt from 'bcrypt'
const saltRounds = 12

export class Password{
    static async hash(password: string){
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(password, salt)
        return hash
    }

    static async compare(storedPassword: string, suppliedPassword: string){
        const isMatch = await bcrypt.compare(suppliedPassword, storedPassword)
        return isMatch
    }
}