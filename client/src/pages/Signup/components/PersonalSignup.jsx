import { forwardRef, useState } from 'react';
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

const PersonalSignup = forwardRef((props, ref) => {
    const { register } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(currShow => !currShow);
    }

    return (
        <form ref={ref} className="form hidden">
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
                        {...register('personal.dni')}
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
                        {...register('personal.name')}
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
                        {...register('personal.email')}
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
                        {...register('personal.password')}
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
                        {...register('personal.gender', { setValueAs: v => parseInt(v) })}
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
                        {...register('personal.gender', { setValueAs: v => parseInt(v) })}
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
                        {...register('personal.phone')}
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