import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaUser, FaUserLock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import useAuth from '@Auth/useAuth';
import { login as service } from '@Services/userSession.service';

import config from '@Utils/config';
import routes from '@Helpers/routes';
import resolver from '@Utils/resolvers/login.resolver';

import './style.css';

const Login = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver });

    const location = useLocation();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogin = async (formData) => {
        try {
            const credentials = await service(formData);
            login(
                credentials,
                location.state ? location.state.from : routes.dashboard()
            );
            reset();
        } catch (error) {
            toast.error(error.message, config.toast);
        }
    }

    useEffect(reset, []);

    useEffect(() => {
        Object.values(errors)
            .forEach(({ message }) => toast.warning(message, config.toast))
    }, [errors])

    return (
        <>
        <Helmet>
            <title>Iniciar Sesión | Sistema Electoral</title>
        </Helmet>

        <div className="login">
            <div className="form--shadow">
                <form className="form" onSubmit={handleSubmit(handleLogin)}>
                    <label className="form__content">
                        <span className="form__brand">
                            Correo electrónico
                        </span>
                        <div className="form__field">
                            <FaUser />
                            <input
                                type="email"
                                id="email"
                                className="form__field--input"
                                {...register('email')}
                            />
                        </div>
                    </label>
                    <label className="form__content">
                        <span className="form__brand">
                            Contraseña
                        </span>
                        <div className="form__field">
                            <FaUserLock />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
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
                    <input
                        type="submit"
                        id="submit"
                        className="form__btn form__btn--primary"
                        value="Iniciar sesión"
                    />
                </form>
            </div>
            <section className="login__account">
                <span className="login__account--brand">
                    Crea una cuenta para tu Institución Educativa
                </span>
                <Link to={routes.signup()} className="login__account--link">
                    Regístrate
                </Link>
            </section>
        </div>
        </>
    )
}

export default Login;