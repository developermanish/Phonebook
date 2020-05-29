const dotenv = require("dotenv");

const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
    // load dotenv configs if not production
    dotenv.config();
}

module.exports = {
  MongoURI: `mongodb+srv://${process.env.MONGO_UID}:${process.env.MONGO_PASSWORD}@test-cluster-g2hj4.mongodb.net/test?retryWrites=true&w=majority`
};
