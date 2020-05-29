import { getRandomInt } from "./common";

const getUserProps = user => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    isAdmin: user.isAdmin,
    isPublisher: user.isPublisher
  };
};

const customError = errorInputs => {
  const err = new Error();
  err.message = errorInputs.message || "Error Occured.";
  err.statusCode = errorInputs.statusCode || 500;
  return err;
};

const generateId = () => {
  const now = Date.now();
  return now - getRandomInt(1, 1000);
};

module.exports = {
  getUserProps,
  customError,
  generateId
};
