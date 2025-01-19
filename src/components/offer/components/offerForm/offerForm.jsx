import { React, useState } from 'react';
import { Input } from '../../../input';
import { Button } from '../../../button';
import { BUTTON_CORNER_TYPE } from '../../../button/constants';
import PropTypes from 'prop-types';

export const OfferForm = ({ onSubmit }) => {
	const [value, setValue] = useState(null);

	const onInputChange = ({ target }) => {
		setValue(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(value);
	};
	return (
		<>
			<form className="flex flex-col gap-5 text-center pt-3 m-5" onSubmit={handleSubmit}>
				<h1 className="text-5xl font-bold">
					Frontend-team
					<br /> к Вашим услугам!
				</h1>
				<Input
					className="text-lg"
					height="48px"
					placeholder="e-mail/Телефон"
					onChange={onInputChange}
				/>
				<div>
					<Button
						title="ЗАКАЗАТЬ САЙТ"
						color="#FFFFFF"
						height="48px"
						backgroundColor="#D03982"
						cornerType={BUTTON_CORNER_TYPE.ROUNDED}
					/>
				</div>

				<a className="block" href="#">
					Публичная оферта
				</a>
			</form>
		</>
	);
};

OfferForm.propTypes = {
	onSubmit: PropTypes.func,
};
