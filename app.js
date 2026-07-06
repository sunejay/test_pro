import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import hbs from 'hbs'
import { getHome, getAbout, getPosts } from './controllers/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.engine('html', hbs.__express)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000

app.get('/', getHome)
app.get('/about', getAbout)
app.get('/posts', getPosts)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})