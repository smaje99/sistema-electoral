import { forwardRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
    FaEnvelope,
    FaEye,
    FaEyeSlash,
    FaIdCard,
    FaPhoneAlt,
    FaUser,
    FaUserLock
} from 'react-icons/fa';

import { personalResolver } from '@Resolvers/signup.resolver';

import config from '@Utils/config';

const PersonalSignup = forwardRef(({ institute }, ref) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: personalResolver });
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(currShow => !currShow);
    }

    const onSubmit = async (formData) => {
        try {
            reset();
            next();
        } catch (error) {
            toast.error(error.message, config.toast);
        }
    }

    useEffect(() => {
        Object
            .values(errors)
            .forEach(({ message }) => toast.warning(message, config.toast))
    }, [errors])

    return (
        <form onSubmit={handleSubmit(onSubmit)} ref={ref} className="form hidden">
            <label htmlFor="personal-dni" className="form__content">
                <span className="form__brand">
                    DNI
                </span>
                <div className="form__field">
                    <FaIdCard />
                    <input
                        type="text"
                        id="personal-dni"
                        className="form__field--input"
                        {...register('dni')}
                    />
                </div>
            </label>
            <label htmlFor="personal-name" className="form__content">
                <span className="form__brand">
                    Nombre completo
                </span>
                <div className="form__field">
                    <FaUser />
                    <input
                        type="text"
                        id="personal-name"
                        className="form__field--input"
                        {...register('name')}
                    />
                </div>
            </label>
            <label htmlFor="personal-email" className="form__content">
                <span className="form__brand">
                    Correo electrónico
                </span>
                <div className="form__field">
                    <FaEnvelope />
                    <input
                        type="email"
                        id="personal-email"
                        className="form__field--input"
                        {...register('email')}
                    />
                </div>
            </label>
            <label htmlFor="personal-password" className="form__content">
                <span className="form__brand">
                    Contraseña
                </span>
                <div className="form__field">
                    <FaUserLock />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="personal-password"
                        className="form__field--input"
                        {...register('password')}
                    />
                    <button
                        className="form__field--btn"
                        onClick={handleShowPassword}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
            </label>
            <fieldset className="form__content--set">
                <legend className="form__brand--legend">
                    Genero
                </legend>
                <label
                    htmlFor="personal-gender-male"
                    className="form__field--container"
                >
                    <input
                        type="radio"
                        id="personal-gender-male"
                        className="form__field--input--radio"
                        value="1"
                        {...register('gender', { setValueAs: v => parseInt(v) })}
                    />
                    <span className="form__brand">
                        Masculino
                    </span>
                </label>
                <label
                    htmlFor="personal-gender-female"
                    className="form__field--container"
                >
                    <input
                        type="radio"
                        id="personal-gender-female"
                        className="form__field--input--radio"
                        value="0"
                        {...register('gender', { setValueAs: v => parseInt(v) })}
                    />
                    <span className="form__brand">
                        Femenino
                    </span>
                </label>
            </fieldset>
            <label htmlFor="personal-phone" className="form__content">
                <span className="form__brand">
                    Teléfono
                </span>
                <div className="form__field">
                    <FaPhoneAlt />
                    <input
                        type="tel"
                        id="personal-phone"
                        className="form__field--input"
                        {...register('phone')}
                    />
                </div>
            </label>
            <input
				type="submit"
				className="form__btn form__btn--primary"
				value="Registrar cuenta"
			/>
        </form>
    )
})

export default PersonalSignup;