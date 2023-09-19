const mongoose = require('mongoose');
const { config } = require('./index');

//const URI = process.env.DB_URI;
const URI =
  'mongodb+srv://mariana:admin@marktcluster.ikcnf.mongodb.net/blogPortal?retryWrites=true&w=majority';
async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
