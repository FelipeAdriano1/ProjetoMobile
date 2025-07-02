const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let db = null;
const client = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
  if (!db) {
    try {
      await client.connect();
      db = client.db();
      console.log("Conexão realizada com sucesso!");
    } catch (error) {
      console.log("Erro ao conectar ao banco de dados.");
      console.log(error);
      throw error;
    }
  }
  return db
}

module.exports = connectDB