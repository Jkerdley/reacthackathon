import { React } from 'react';
import { Input } from '../../../input';
import { Button } from '../../../button';

export const OfferForm = () => {
	return (
		<>
			<form className="text-center pt-3 m-5">
				<h1 className="text-5xl font-bold">
					Frontend-team
					<br /> к Вашим услугам!
				</h1>{' '}
				<Input className="mt-10 text-lg" height="48px" placeholder="e-mail/Телефон" />
				<Button
					className="mt-10"
					title="ЗАКАЗАТЬ САЙТ"
					color="#FFFFFF"
					height="48px"
					backgroundColor="#D03982"
					cornerType="rounded"
				/>
				<a className="mt-5 block" href="#">
					Публичная оферта
				</a>
			</form>
		</>
	);
};
