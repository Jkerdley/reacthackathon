import { React } from 'react';
import { OfferForm, TeamFan } from './components';

export const Offer = () => {
	return (
		<div className="flex flex-col gap-24 justify-center items-center w-full h-full">
			<div className="w-full h-1/3 p-6">
				<TeamFan />
			</div>
			<div className="w-full h-3/4">
				<OfferForm />
			</div>
		</div>
	);
};
