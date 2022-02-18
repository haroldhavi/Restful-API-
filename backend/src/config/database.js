const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexion con la Base de datos
const pool = new Pool({
    connectionString: 'postgres://root:123456@localhost:5432/persondb',
});

pool.on('connect', () => {
    console.log('Connect to postgres!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
