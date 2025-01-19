import { React } from 'react';
import { OfferForm, TeamFan } from './components';

export const Offer = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full border">
			<div className="w-full h-1/3 p-5">
				<TeamFan />
			</div>
			<div className="w-full h-3/4">
				<OfferForm />
			</div>
		</div>
	);
};
