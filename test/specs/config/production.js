'use strict';

module.exports = {
  env: 'production',
  db: process.env.dbDatabase,
  port: process.env.PORT || 4000,
};
