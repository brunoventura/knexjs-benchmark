'use strict';

const jdbc = require('node_jdbc');
const jdbc_driver_postgresql = require('jdbc_driver_postgresql');

const execute = config => {
    jdbc.configureJDBC(jinst => {
        if (!jinst.isJvmCreated()) {
            jinst.addOption('-Xrs');
            jinst.setupClasspath([jdbc_driver_postgresql]);
        }
    });

    const db = new jdbc.DB({
        url: `jdbc:${config.host}:${config.database}`,
        user:  config.user,
        password: config.password,
        properties: {}
    });

    db.connect()
        .then(conn => conn.getAll('Select * from orders'))
        .then(res => console.log('done'));
};

module.exports = execute;
