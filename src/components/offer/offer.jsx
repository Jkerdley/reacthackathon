import { React, useState } from 'react';
import { OfferForm, OfferSended, TeamFan } from './components';

export const Offer = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [contact, setContact] = useState(null);

	const onSubmit = (value) => {
		setContact(value);
		setIsSubmitted(true);
	};

	return (
		<div className="flex flex-col gap-24 justify-center items-center w-full h-full pt-20">
			<div className="w-full h-1/3 p-10">
				<TeamFan />
			</div>
			<div className="w-full h-3/4">
				{!isSubmitted ? <OfferForm onSubmit={onSubmit} /> : <OfferSended contact={contact} />}
			</div>
		</div>
	);
};
