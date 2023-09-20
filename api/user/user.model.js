const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    index: true,
    uppercase: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  salt: String,
  md5: String,
  sha1: String,
  sha256: String,
  dob: {
    date: Date,
    age: Number,
  },
  registered: {
    date: Date,
    age: Number,
  },
  phone: String,
  cell: String,
  picture: {
    type: String,
  },
  articles: [
    {
      type: String,
      ref: 'Article',
      required: true,
    },
  ],
});

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    return await bcrypt.compare(candidatePassword, user.password);
  } catch (error) {
    throw error;
  }
};

UserSchema.virtual('profile').get(function () {
  console.log('entra en virtual profile');
  const { role, email, name, _id } = this;
  return { role, email, name, _id };
});

module.exports = mongoose.model('User', UserSchema);
