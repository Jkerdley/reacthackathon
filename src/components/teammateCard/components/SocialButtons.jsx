import React from 'react';
import { Button } from '../../button';
import { BUTTON_CORNER_TYPE } from '../../button/constants';
import { getUserById } from '../../../utils/userUtils.js';

export const SocialButtons = ({ teammate }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}

	return (
		<div
			name="social-buttons-container"
			className="flex gap-2 items-center justify-start w-auto h-auto overflow-hidden"
		>
			{user.socialLinks.map((link) => (
				<Button
					key={link.socialName}
					title={link.socialName}
					cornerType={BUTTON_CORNER_TYPE.ROUNDED}
					backgroundColor={link.color}
					color="white"
					onClick={() => window.open(link.url, '_blank')}
				/>
			))}
		</div>
	);
};
