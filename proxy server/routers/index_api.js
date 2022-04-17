import express from "express"
const router = express.Router()
import axios from 'axios'

const API_KEY = process.env.API_KEY
const API_BASE_URL = process.env.API_BASE_URL
const API_KEYNAME = process.env.API_KEYNAME

router.get('/', async (req, res) => {
      const params = new URLSearchParams([
            [API_KEYNAME, API_KEY]
      ])
      await axios.get(
            `${API_BASE_URL}`, { params }
      ).then(response => {
            console.log(`status code: ${response.status}`)
            res.send(response.data)
      }).catch(error => {
            console.error(error)
      })
})




export default router