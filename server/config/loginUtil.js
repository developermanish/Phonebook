const userHelper = require("../src/helpers/user-helper");

async function isLoggedIn(req, res, next) {
  const token = req.cookies;
  let filters = {};
  filters.query = {
    token: token
  }
  const user = await userHelper.findOne(filters);
  if(!user) {
    return res.status(401)
      .send({ message: "Unauthorized user"})
  }
  
  next();
}

module.exports = {
  isLoggedIn
};
