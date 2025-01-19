import { React, useState } from 'react';
import { Input } from '../../../input';
import { Button } from '../../../button';
import { BUTTON_CORNER_TYPE } from '../../../button/constants';
import PropTypes from 'prop-types';
import { isValidEmail, isValidPhone } from '../../utils';

export const OfferForm = ({ onSubmit }) => {
	const [value, setValue] = useState(null);
	const [error, setError] = useState('');

	const onInputChange = ({ target }) => {
		setError('');
		setValue(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!isValidEmail(value) && !isValidPhone(value)) {
			setError('Введите правильно email или номер телефона');
		} else {
			onSubmit(value);
		}
	};
	return (
		<>
			<form className="flex flex-col gap-5 text-center pt-3 m-5" onSubmit={handleSubmit}>
				<h1 className="text-5xl font-bold">
					Frontend-team
					<br /> к Вашим услугам!
				</h1>
				<div>
					<Input
						className="text-lg"
						height="48px"
						placeholder="e-mail/Телефон"
						onChange={onInputChange}
					/>
					<span className="block text-base text-red-600">{error ? error : '\u00A0'}</span>
				</div>
				<div>
					<Button
						title="ЗАКАЗАТЬ САЙТ"
						color="#FFFFFF"
						height="48px"
						backgroundColor="#D03982"
						cornerType={BUTTON_CORNER_TYPE.ROUNDED}
						disabled={!value}
					/>
				</div>

				<a className="block text-gray-500" href="#">
					Публичная оферта
				</a>
			</form>
		</>
	);
};

OfferForm.propTypes = {
	onSubmit: PropTypes.func,
};
