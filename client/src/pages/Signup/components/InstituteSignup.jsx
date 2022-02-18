import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
	FaCity,
    FaEnvelope,
	FaGraduationCap,
    FaIdCard,
    FaPhoneAlt
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import { useWizard } from '@Components/Wizard';

import config from '@Utils/config';
import { instituteResolver } from '@Utils/resolvers/signup.resolver';
import routes from '@Helpers/routes';

const InstituteSignup = ({ data, handleData, onSubmitToService }) => {
	const {
        reset,
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm({ resolver: instituteResolver });

	const { back } = useWizard();

	const handleToBack = () => {
        handleData(getValues());
        back(routes.signup.personal);
    }

	const onSubmit = (formData) => {
        handleData({ ...formData, reset });
        onSubmitToService();
    }

	useEffect(() => {
        Object.values(errors)
            .forEach(({ message }) => toast.warning(message, config.toast))
    }, [errors])

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="institute-name" className="form__content">
                <span className="form__brand">
                    Nombre de la institución
                </span>
                <div className="form__field">
                    <FaGraduationCap />
                    <input
                        type="text"
                        id="institute-name"
                        className="form__field--input"
                        {...register('name')}
                    />
                </div>
            </label>
			<label htmlFor="institute-nit" className="form__content">
                <span className="form__brand">
                    NIT
                </span>
                <div className="form__field">
                    <FaIdCard />
                    <input
                        type="text"
                        id="institute-nit"
                        className="form__field--input"
                        {...register('nit')}
                    />
                </div>
            </label>
			<label htmlFor="institute-email" className="form__content">
                <span className="form__brand">
                    Correo electrónico
                </span>
                <div className="form__field">
                    <FaEnvelope />
                    <input
                        type="email"
                        id="institute-email"
                        className="form__field--input"
                        {...register('email')}
                    />
                </div>
            </label>
			<label htmlFor="institute-address" className="form__content">
                <span className="form__brand">
                    Dirección
                </span>
                <div className="form__field">
                    <FaCity />
                    <input
                        type="text"
                        id="institute-address"
                        className="form__field--input"
                        {...register('address')}
                    />
                </div>
            </label>
			<label htmlFor="institute-phone" className="form__content">
                <span className="form__brand">
                    Teléfono
                </span>
                <div className="form__field">
                    <FaPhoneAlt />
                    <input
                        type="tel"
                        id="institute-phone"
                        className="form__field--input"
                        {...register('phone')}
                    />
                </div>
            </label>
			<input
				type="submit"
				className="form__btn form__btn--primary"
				value="Registrar cuentas"
			/>
            <button
				className="form__btn form__btn--primary"
				onClick={handleToBack}
			>
				Anterior
			</button>
        </form>
	)
}

export default InstituteSignup;