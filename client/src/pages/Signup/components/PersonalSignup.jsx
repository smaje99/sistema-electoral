import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    FaEnvelope,
    FaEye,
    FaEyeSlash,
    FaIdCard,
    FaPhoneAlt,
    FaUser,
    FaUserLock
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import { useWizard } from '@Components/Wizard';

import config from '@Utils/config';
import { personalResolver } from '@Resolvers/signup.resolver';
import routes from '@Helpers/routes';

const PersonalSignup = ({ data, handleData }) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: personalResolver });

    const { next } = useWizard();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const onSubmit = (formData) => {
        handleData({ ...formData, reset });
        next(routes.signup.institute);
    }

    useEffect(() => {
        Object.values(errors)
            .forEach(({ message }) => toast.warning(message, config.toast))
    }, [errors])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
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
                        value={data?.dni}
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
                        value={data?.name}
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
                        value={data?.email}
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
                        type="password"
                        id="personal-password"
                        className="form__field--input"
                        value={data?.password}
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
                        selected={data?.gender === 1}
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
                        selected={data?.gender === 0}
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
                        value={data?.phone}
                        {...register('phone')}
                    />
                </div>
            </label>
            <input
                type="submit"
                className="form__btn form__btn--primary"
                value="Siguiente"
            />
        </form>
    )
}

export default PersonalSignup;