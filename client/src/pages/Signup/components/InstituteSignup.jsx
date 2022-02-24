import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import {
	FaCity,
    FaEnvelope,
	FaGraduationCap,
    FaIdCard,
    FaPhoneAlt
} from 'react-icons/fa';

import { useWizard } from '@Components/Wizard';

const InstituteSignup = forwardRef((props, ref) => {
	const { register } = useForm();
	const { next } = useWizard();

	return (
		<form ref={ref} className="form">
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
                        {...register('institute.name')}
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
                        {...register('institute.nit')}
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
                        {...register('institute.email')}
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
                        {...register('institute.address')}
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
                        {...register('institute.phone')}
                    />
                </div>
            </label>
			<input
				type="submit"
				className="form__btn form__btn--primary"
				value="Registrar institución"
			/>
        </form>
	)
})

export default InstituteSignup;