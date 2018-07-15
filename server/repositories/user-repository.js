'use strict';
import PocError        from '../exception/exception';

exports.create = async (data, User) => {
  try {
    const user = new User(data);
    await user.save();
  } catch (error) {
    throw new PocError(error);
  }
};

exports.getByEmail = async (email, User) => {
  try {
    return await User.findOne({ email: email }).exec();
  } catch (error) {
    throw new PocError(error);
  }
};

exports.authenticate = async (data, User) => {
  try {
    return await User.findOne({ email: data.email, password: data.password }).exec();
  } catch (error) {
    throw new PocError(error);
  }
};

exports.getById = async (id, User) => {
  try {
    return await User.findById(id);
  } catch (error) {
    throw new PocError(error);
  }
};
