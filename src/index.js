// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express'

import './helpers/dotenv'

// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan'

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()
app.use(morgan(process.env.MORGAN_LOG))

app.get('/', (req, res) => {
  const title = process.env.TITLE || 'Server'
  res.send({ msg: title })
})

app.listen(port)
