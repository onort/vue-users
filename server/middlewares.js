import bodyParser from 'body-parser'

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

export default (app) => {
  app.use(allowCrossDomain)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
}
