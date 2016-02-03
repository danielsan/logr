'use strict';

const bunyan = require('bunyan');

const level  = process.env.LOG_LEVEL || 'debug';

const logr = bunyan.createLogger({
    name: 'LOGR',
    level,
    serializers: {
      req: bunyan.stdSerializers.req,
      res: bunyan.stdSerializers.res
    },
    src: ( ['debug','trace'].indexOf(level) !== -1 ),
});

module.exports = logr;
