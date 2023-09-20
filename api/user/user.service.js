const User = require('./user.model');

async function createUser(user) {
  try {
    const newUser = await User.create(user);

    return newUser;
  } catch (error) {
    throw error;
  }
}
async function ValidateUserEmail(email) {
  try {
    const isMatch = await User.findOne({ email });
    if (isMatch) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}

async function getUserByName(name) {
  try {
    const user = await User.findOne({ name });
    return user;
  } catch (error) {
    throw error;
  }
}

async function findOneUser(query) {
  const user = await User.findOne(query);
  return user;
}

async function updateUser(id, user) {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    //console.log('up ', updateUser);
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  ValidateUserEmail,
  findOneUser,
  getUserByName,
  updateUser,
};
