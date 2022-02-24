const yup = require('yup');

const email = yup
    .string()
    .email('No es un correo electrónico')

const gender = yup
    .mixed()
    .oneOf([0, 1], 'No es un genero')

const phone = yup
    .string()
    .max(15, 'El número telefónico es muy largo')

const string = yup.string();

const createAdminAccountSchema = yup.object().shape({
    email: email.required('Debe ingresar un correo electrónico'),
    password: string.required('Debe ingresar una contraseña'),
    dni: string.required('Debe ingresar un DNI del usuario'),
    name: string.required('Debe ingresar un nombre del usuario'),
    gender: gender.required('Debe ingresar un genero del usuario'),
    phone: phone.required('Debe ingresar un teléfono del usuario')
})

module.exports = { createAdminAccountSchema };