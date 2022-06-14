import express from "express"
import cors from "cors"
import { connect } from "./libs/database.js"
import uploadRouter from './routes/uploadRouter.js'
import loginRouter from './routes/loginRouter.js'
import signupRouter from './routes/signupRouter.js'
import clothesRouter from './routes/clothesRouter.js'


await connect()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
// app.set('trust proxy', true)



// Routes

app.use("/login", loginRouter)
app.use("/signup", signupRouter)
app.use("/clothes", clothesRouter)
app.use("/upload", uploadRouter)


// listening
const port = process.env.PORT || 3099
app.listen(port, () => {
  console.log(`Let the adventures in Backend begin at port:${port}!!🙈`)
})
