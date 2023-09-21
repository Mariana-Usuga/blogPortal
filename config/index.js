require('dotenv').config();

const config = {
  URI: process.env.DB_URI,
  PORT: process.env.PORT || 8080,
  secrets: {
    session: 'S0p0rt31',
  },
  expiresIn: '90d',
  userRoles: ['user', 'admin'],
};

module.exports = {
  config,
};
