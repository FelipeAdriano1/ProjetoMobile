import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config();

let client: MongoClient
let db: Db

async function connectDB() {
    if (!client) {
        console.log("[DATABASE] - Cliente não conectado.")
        let uri = process.env.MONGO_URI || 'mongodb+srv://felipeAdrinano:CiA898ADF@cluster0.uwiclh1.mongodb.net/finance-auth?retryWrites=true&w=majority&appName=Cluster0'
        let dbName = process.env.DB_NAME || 'finance-auth'
        try {
            client = new MongoClient(uri, {
                timeoutMS: 5000
            })

            await client.connect()
            db = client.db(dbName)

            console.log("[DATABASE] - Cliente conectado com sucesso ao banco de dados!")
            console.log('[DATABASE] - Você está conectado a ', uri, '\nBanco: ', dbName)
        }
        catch (error) {
            console.log("[DATABASE] - Erro ao conectar ao banco de dados.")
            console.log("[DATABASE] - Erro: ", error)
        }
    }

    return db
}