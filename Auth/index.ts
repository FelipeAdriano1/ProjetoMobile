import connectDB from "./config/database"
import { app } from './app'
import dotenv from 'dotenv'
dotenv.config()

async function start() {
  console.log('[INDEX] - Iniciando conexão com banco de dados.')

  connectDB()
    .then(() => {
      console.log("[INDEX] - Sucesso ao conectar ao banco de dados.")

      app.listen(process.env.PORT, () => {
        console.log("[INDEX] - Servidor express online!")
      })
    })
    .catch((error) => {
      console.log("[INDEX] - Erro ao conectar ao banco de dados.")
      console.log("ERRO: ", error)
    })
}

start()