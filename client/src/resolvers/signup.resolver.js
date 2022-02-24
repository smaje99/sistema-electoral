import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const dni = yup.string();
const name = yup.string();
const email = yup.string().email('No es un correo electrónico');
const password = yup.string();
const gender = yup.number().oneOf([0, 1], 'Debe seleccionar algún genero');
const phone = yup.string();
const address = yup.string();

const personalSchema = yup.object().shape({
    dni: dni.required('Debe ingresar un DNI'),
    name: name.required('Debe ingresar un nombre'),
    email: email.required('Debe ingresar un correo electrónico'),
    password: password.required('Debe ingresar una contraseña'),
    gender: gender.required('Debe ingresar un genero'),
    phone: phone.required('Debe ingresar un número de teléfono')
})

const instituteSchema = yup.object().shape({
    name: name.required('Debe ingresar un nombre'),
    nit: dni.required('Debe ingresar un NIT'),
    email: email.required('Debe ingresar un correo electrónico'),
    address: address.required('Debe ingresar una dirección'),
    phone: phone.required('Debe ingresar un teléfono'),
})

const signupResolver = yupResolver(yup.object().shape({
    personal: personalSchema.required('Debe de ingresar los datos personales'),
    institute: instituteSchema.required('Debe de ingresar los datos institucionales')
}))

export default signupResolver;