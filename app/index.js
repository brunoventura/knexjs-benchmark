'use strict';

const knex = require('./knexjs');
// const jdbc = require('./jdbc');

const config = {
    host: '172.17.0.2',
    user: 'postgres',
    password: '',
    database: 'postgres'
};

knex(config);
// jdbc(config);
