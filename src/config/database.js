const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexion con la Base de datos
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '159password',
    database: 'personDb',
    port:'5432'
});

pool.on('connect', () => {
    console.log('Connect to postgres!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
