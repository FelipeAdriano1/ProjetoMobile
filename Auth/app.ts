import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { usersRoute } from './src/routes/usersRoute';
dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())
app.use(usersRoute)

export { app }