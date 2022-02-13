class LoginSessionError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'LoginSessionError';
        this.statusCode = statusCode;
    }
}

module.exports = LoginSessionError;