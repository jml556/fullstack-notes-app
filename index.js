const app = require('./app')
const { PORT } = require('./config/envVariables');

app.listen(PORT, () => {
  console.log('app listening on ' + PORT)
})