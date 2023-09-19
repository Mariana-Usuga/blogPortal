require('dotenv').config();

const config = {
  URI: 'mongodb+srv://mariana:admin@marktcluster.ikcnf.mongodb.net/blogPortal?retryWrites=true&w=majorit',
  PORT: process.env.PORT || 8080,
  secrets: {
    session: process.env.SECRET_KEY || 'S0p0rt31',
  },
  expiresIn: '3h',
  userRoles: ['user', 'admin'],
};

module.exports = {
  config,
};
