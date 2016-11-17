'use strict';

const knex = require('knex');

const execute = config => {
    const db = knex({
        client: 'pg',
        connection: config
    });

    return db
        .select('customers.country')
        .count('customers.country')
        .from('orders')
        .leftOuterJoin('customers', 'orders.customerid', 'customers.customerid')
        .groupBy('country')
    .then(result => {
        console.log(result);
        console.log('done');
    })
    .catch(console.log);
};

module.exports = execute;
