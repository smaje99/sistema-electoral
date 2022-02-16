const yup = require('yup');

const email = yup
    .string()
    .email('No es un correo electrónico')

const gender = yup
    .mixed()
    .oneOf([0, 1], 'No es un genero')

const string = yup.string();

const createSchema = yup.object().shape({
    emailUser: email.required('Debe ingresar un correo electrónico'),
    password: string.required('Debe ingresar una contraseña'),
    dni: string.required('Debe ingresar un DNI del usuario'),
    nameUser: string.required('Debe ingresar un nombre del usuario'),
    gender: gender.required('Debe ingresar un genero del usuario'),
    phoneUser: string.required('Debe ingresar un teléfono del usuario'),
    nit: string.required('Debe ingresar un NIT de la institución'),
    nameInstitute: string.required('Debe de ingresar un nombre de la institución'),
    address: string.required('Debe de ingresar una dirección de la institución'),
    emailInstitute: email.required('Debe de ingresar un correo electrónico de la institución'),
    phoneInstitute: string.required('Debe de ingresar un teléfono de la institución')
})

module.exports = { createSchema };