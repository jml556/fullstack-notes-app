const { MONGODB_URI } = require('../config/envVariables');
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('connection success');
  } catch (e) {
    console.error(e);
  }
}

console.log(typeof connect)
module.exports = connect;
