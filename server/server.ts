import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
server.use(express.json())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
server.get('/', (req, res) => {
  const file = Path.join(__dirname, 'index.html')
  res.sendFile(file)
})

export default server
