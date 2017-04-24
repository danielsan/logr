'use strict';

function getBunyan(level) {
  const bunyan = require('bunyan');

  return bunyan.createLogger({
    name: 'BUNY',
    level,
    serializers: {
      req: bunyan.stdSerializers.req,
      res: bunyan.stdSerializers.res
    },
    src: ( ['debug','trace'].indexOf(level) !== -1 ),
  })
}

function getPino(level) {
  return require('pino')({name: 'PINO', level});
}

const level  = !process.env.LOG_LEVEL ? 'debug' :
  (process.env.LOG_LEVEL === 'test' ? 'fatal' : process.env.LOG_LEVEL);

const logr = ['debug', 'trace'].includes(level) ? getBunyan(level) : getPino(level);

logr.raw = (_) => process.stdout.write(_ + '\n');

module.exports = logr;
