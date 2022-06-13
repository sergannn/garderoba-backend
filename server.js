import express from "express"
import cors from "cors"
import { connect } from "./libs/database.js"
import uploadRouter from './routes/Upload.js'
import loginRouter from './routes/Login.js'
import signupRouter from './routes/Signup.js'
import galleryRouter from './routes/Gallery.js'


await connect()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
// app.set('trust proxy', true)



// Routes

app.use("/login", loginRouter)
app.use("/signup", signupRouter)
app.use("/gallery", galleryRouter)
app.use("/upload", uploadRouter)


// listening
const port = process.env.PORT || 3099
app.listen(port, () => {
  console.log(`Let the adventures in Backend begin at port:${port}!!🙈`)
})
