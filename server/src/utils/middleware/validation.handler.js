const boom = require('@hapi/boom');

/**
 * It validates the data against the schema.
 * @param data - The data to be validated.
 * @param schema - The schema to validate the data against.
 * @returns The validation error message.
 */
const validate = async (data, schema) => {
    try {
        await schema?.validate(data);
    } catch (error) {
        return error.errors?.join('\n');
    }
}

/**
 * It takes a schema and a check, and returns a middleware function that validates
 * the request body against the schema
 * @param schema - The schema to validate the request against.
 * @param [check=body] - The part of the request to validate. Defaults to 'body'.
 */
const validationHandler = (schema, check = 'body') => (
    async (req, res, next) => {
        const error = await validate(req[check], schema);

        error ? next(boom.badRequest(error)) : next();
    }
)

module.exports = validationHandler;