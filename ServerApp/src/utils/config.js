require('dotenv').config();

/* This is the configuration for the Node.js server. */
module.exports = {
    Port: process.env.PORT || 8080,
    Dev: process.env.NODE_ENV !== 'production',
}