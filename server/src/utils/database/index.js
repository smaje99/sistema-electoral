const mysql = require('mysql2/promise');

const { ConnectionOptions } = require('../config');

/**
 * Manage secure connection and disconnection to the database,
 * wrapping the function it contains that makes the request to the database.
 * @param callback - A function that makes the request to the database.
 * @returns The connection object.
 */
async function connectionManager(callback) {
    const connection = await mysql.createConnection(ConnectionOptions);
    try {
        return await callback(connection);
    } catch (error) {
        throw new Error(error.message);
    } finally {
        connection.end();
    }
}

async function query(queryString) {
    return connectionManager(conn => conn.query(queryString));
}

async function execute(executeString) {
    return connectionManager(conn => conn.execute(executeString));
}

module.exports = { query, execute }