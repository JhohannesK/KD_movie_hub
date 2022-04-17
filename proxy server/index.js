import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './routers/index_api.js'


const PORT = process.env.PORT || 5000

const app = express()

// set static folder
app.use(express.static('public'))

// Enable CORS
app.use(cors())

//Routes
app.use('/api', router)

app.listen(PORT, () => {
      console.log(`Console running on port ${PORT}`);
})