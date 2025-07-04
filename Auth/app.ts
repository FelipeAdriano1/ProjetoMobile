import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { getUser } from './src/routes/get-user';
dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())
app.use(getUser)

export { app }