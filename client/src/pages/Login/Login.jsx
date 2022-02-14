import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaUser, FaUserLock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import useAuth from '@Auth/useAuth';
import { login as service } from '@Services/userSession.service';

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

    const handleInvalidUser = (msg) => toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast'
    });

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
            handleInvalidUser(error.message);
        }
    }

    useEffect(reset, []);

    useEffect(() => {
        if (errors.email) handleInvalidUser(errors.email.message);
        if (errors.password) handleInvalidUser(errors.password.message);
    }, [errors])

    return (
        <>
        <Helmet>
            <title>Iniciar Sesión | Sistema Electoral</title>
        </Helmet>

        <div className="login">
            <div className="login--shadow">
                <form className="login--content" onSubmit={handleSubmit(handleLogin)}>
                    <label className="login--content__content">
                        <span className="login--content__brand">
                            Correo electrónico
                        </span>
                        <div className="login--content__field">
                            <FaUser />
                            <input
                                type="email"
                                id="email"
                                className="login--content__field--input"
                                {...register('email')}
                            />
                        </div>
                    </label>
                    <label className="login--content__content">
                        <span className="login--content__brand">
                            Contraseña
                        </span>
                        <div className="login--content__field">
                            <FaUserLock />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="login--content__field--input"
                                {...register('password')}
                            />
                            <button
                                className="login--content__field--btn"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </label>
                    <input
                        type="submit"
                        id="submit"
                        className="login--content__submit"
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

        <ToastContainer />
        </>
    )
}

export default Login;