const connectDB = require("./config/database.js");
const app = require("./app.js");

start = async () => {
  await connectDB()
  .then((res) => {
    console.log("Sucesso na chamada de conexão de banco de dados.")
    console.log("Sucesso: ", res)
    return res
  })
  .catch((error) => {
    console.log("Erro na chamada de conexão de banco de dados.")
    console.log("Erro:", error)
  })
};

start()
