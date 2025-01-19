import PropTypes from 'prop-types';
import { React } from 'react';
import { isValidEmail, isValidPhone } from '../../utils';

export const OfferSended = ({ contact = '' }) => {
	let contact_type = '';
	if (isValidEmail(contact)) {
		contact_type = "e-mail'у";
	} else if (isValidPhone(contact)) {
		contact_type = 'телефону';
	} else {
		contact_type = 'контакту';
	}

	console.log('OfferSended', contact);

	return (
		<div className="flex-col gap-5 text-center pt-3 m-5">
			<span className="font-bold text-green-600">Заявка отправлена!</span>
			<p>{`Мы с Вами свяжемся по указанному ${contact_type} ${contact}`}</p>
		</div>
	);
};

OfferSended.propTypes = {
	contact: PropTypes.string,
};
