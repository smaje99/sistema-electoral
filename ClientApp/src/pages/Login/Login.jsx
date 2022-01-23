import { useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaUserLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import routes from '@Helpers/routes';

import './style.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        navigate(routes.dashboard);
    }

    return (
        <div className="login">
            <div className="login--shadow">
                <form className="login--content" onSubmit={handleLogin}>
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
                                ref={emailRef}
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
                                ref={passwordRef}
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
            <section className="login__forget">
                <Link to={routes.passwordReset} className="login__forget--link">
                    ¿Olvidaste tu contraseña?
                </Link>
            </section>
            <section className="login__account">
                <span className="login__account--brand">
                    Crea una cuenta para tu Institución Educativa
                </span>
                <Link to={routes.account} className="login__account--link">
                    Regístrate
                </Link>
            </section>
        </div>
    )
}

export default Login;