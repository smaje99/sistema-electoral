import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const email = yup.string().email('No es un correo electrónico');
const gender = yup.number().oneOf([0, 1], 'Debe seleccionar algún genero');
const phone = yup.string().max(15, 'El número telefónico no puede ser tan largo');
const string = yup.string();

export const instituteResolver = yupResolver(yup.object().shape({
    name: string.required('Debe ingresar un nombre'),
    nit: string.required('Debe ingresar un NIT'),
    email: email.required('Debe ingresar un correo electrónico'),
    address: string.required('Debe ingresar una dirección'),
    phone: phone.required('Debe ingresar un teléfono'),
}))

export const personalResolver = yupResolver(yup.object().shape({
    dni: string.required('Debe ingresar un DNI'),
    name: string.required('Debe ingresar un nombre'),
    email: email.required('Debe ingresar un correo electrónico'),
    password: string.required('Debe ingresar una contraseña'),
    gender: gender.required('Debe ingresar un genero'),
    phone: phone.required('Debe ingresar un número de teléfono')
}))