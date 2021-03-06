const yup = require('yup');

const email = yup
    .string()
    .email('No es un correo electrónico')

const phone = yup
    .string()
    .max(15, 'El número telefónico es muy largo')

const string = yup.string();

const createAccountSchema = yup.object().shape({
    nit: string.required('Debe ingresar un NIT de la institución'),
    name: string.required('Debe de ingresar un nombre de la institución'),
    address: string.required('Debe de ingresar una dirección de la institución'),
    email: email.required('Debe de ingresar un correo electrónico de la institución'),
    phone: phone.required('Debe de ingresar un teléfono de la institución')
})

module.exports = { createAccountSchema }