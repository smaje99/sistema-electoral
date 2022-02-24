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

/**
 * It executes a SQL query against the database and returns the results.
 * @param sql - The SQL query to execute.
 * @param [values] - An array of values to be bound to the query.
 * @returns A promise.
 */
async function query(sql, values) {
    return connectionManager(conn => conn.query(sql, values));
}

/**
 * It executes a SQL query against the database and returns the results.
 * @param sql - The SQL query to execute.
 * @param [values] - An array of values to be passed to the query.
 * @returns A promise.
 */
async function execute(sql, values) {
    return connectionManager(conn => conn.execute(sql, values));
}

module.exports = { query, execute }