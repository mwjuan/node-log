const Logger = require('./Logger');
const logger = new Logger();

// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'logs/combined.log' })
//   ]
// });

// logger.info({
//   message: 'hello world',
//   body: { a: 1 }
// });

logger.log('info', {
  message: 'hello world',
  body: {
    user: 'nonocast',
    pass: '123456'
  }
});

logger.log("info", "hello world");
logger.log("info", "hello world, %s", "hui");

logger.warn("hello warn");

let child = logger.child({ requestId: 'xxxxx-xxxzz' });
child.log('info', {
  message: 'hello child'
});

child.info({
  message: 'hello child info'
});

child.warn({
  message: 'hello child warn'
});