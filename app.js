import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import hbs from 'hbs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.engine('html', hbs.__express)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
const port = 3000

app.get('/', (req, res) => {
  res.send({greet: 'Hello World!'})
})

app.get('/about', (req, res) => {
  res.send({greet: 'About Page'})
})

app.get('/posts', (req, res) => {
  const posts = [
    { title: 'First Post' },
    { title: 'Second Post' }
  ]
  res.render('posts', { posts })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})