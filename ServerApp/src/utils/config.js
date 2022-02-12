require('dotenv').config();

/* This is the configuration for the Node.js server. */
module.exports = {
    Port: process.env.PORT || 8080,
    Dev: process.env.NODE_ENV !== 'production',
    ConnectionOptions: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_UID,
        password: process.env.DB_PWD,
        database: process.env.DB_DB
    }
}