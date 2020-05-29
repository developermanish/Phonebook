/** @module logger */

const winston = require("winston");

const LOG_LEVEL = process.env.LOG_LEVEL || "debug";

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.simple(),
  transports: [new winston.transports.Console()]
});

module.exports = logger;
