const boom = require('@hapi/boom');

/* If a request is made to a route that doesn't exist, return a 404 error.
*/
module.exports = function notFoundHandler(req, res) {
    const {
        output: { statusCode, payload }
    } = boom.notFound();

    res.status(statusCode).json(payload);
}