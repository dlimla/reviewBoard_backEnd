const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const atozAuthRouter = require('../auth/auth-router.js');
const logger = require('morgan')


const logMiddleware = logger('dev')

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(logMiddleware)

};
