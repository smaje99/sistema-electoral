const mysql = require('mysql2');

const { ConnectionOptions } = require('../utils/config');

/** Connection to the database. */
const connection = mysql.createConnection(ConnectionOptions);

/**
 * Manage secure connection and disconnection to the database,
 * wrapping the function it contains that makes the request to the database.
 * @param callback - A function that makes the request to the database.
 * @returns The connection object.
 */
function connectionManager(callback) {
    try {
        connection.connect();
        return callback(connection);
    } catch (error) {
        throw new Error(error.message);
    } finally {
        connection.end();
    }
}

function query(queryString, callback) {
    return connectionManager(conn => conn.query(queryString, callback));
}

function execute(executeString, callback) {
    return connectionManager(conn => conn.execute(executeString, callback));
}

module.exports = { query, execute }