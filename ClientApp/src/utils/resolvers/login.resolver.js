const yup = require('yup');

const emailSchema = yup
    .string()
    .email('No es un correo electrónico')

const passwordSchema = yup.string()

const resolver = yup.object().shape({
    email: emailSchema.required('Debe de ingresar un correo electrónico'),
    password: passwordSchema.required('Debe de ingresar una contraseña')
})

export default resolver;