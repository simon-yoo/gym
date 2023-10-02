import server from './server.ts'

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('API server listening on port', PORT)
})
