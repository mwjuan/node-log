const Logger = require('./Logger');
const logger = new Logger();

/*
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
*/

logger.info({
  message: 'hello world',
  body: {
    t1: 't111',
    t2: 'zzz222'
  }
});