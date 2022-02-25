const boom = require('@hapi/boom');

const { Dev } = require('../config');

/**
 * If the environment is development it returns the error
 * with its stack, otherwise it only returns the error
 * @param error - The error object to be logged.
 * @param stack - The stack trace of the error.
 * @returns The original error object, with the stack property added.
 */
function withErrorStack(error, stack) {
    return Dev ? { ...error, stack } : error;
}

/** A middleware function that logs errors to the console. */
function logErrors(err, req, res, next) {
    console.error(err);
    next(err);
}

/**
 * If the error is a Boom error, then use the error as is.
 * Otherwise, wrap the error in a Boom error
 */
function wrapErrors(err, req, res, next) {
    next(err.isBoom ? err : boom.badImplementation(err));
}

/** A middleware function that handles errors. */
function errorHandler(err, req, res, next) {
    let {
        output: { statusCode, payload },
        headers,
        stack
    } = err;

    if (statusCode == 500 && err.data)
        payload = { ...payload, message: err.data };

    res.status(statusCode)
        .json(withErrorStack({ ...payload, headers }, stack))
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
}