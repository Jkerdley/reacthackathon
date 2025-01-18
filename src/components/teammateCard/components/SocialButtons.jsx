import React from 'react';
import { Button } from '../../button';
import { BUTTON_CORNER_TYPE } from '../../button/constants';

export const SocialButtons = ({ teammate }) => {
	const firstTeammateSocialLinks = ['Twitter', 'Telegram', 'Instagram', 'LinkedIn'];
	const secondTeammateSocialLinks = ['Twitter', 'Telegram', 'Instagram', 'LinkedIn', 'VK', 'GitHub'];
	const thirdTeammateSocialLinks = ['Twitter', 'Instagram', 'GitHub'];

	const socialLinksBase = [
		{ socialName: 'Twitter', url: 'ulr', color: '#52b7ee' },
		{ socialName: 'Telegram', url: 'ulr', color: '#399AD0' },
		{ socialName: 'Instagram', url: 'ulr', color: '#95305A' },
		{ socialName: 'LinkedIn', url: 'ulr', color: '#399AD0' },
		{ socialName: 'VK', url: 'ulr', color: '#3076B6' },
		{ socialName: 'GitHub', url: 'ulr', color: '#314645' },
	];

	const teammateId =
		teammate === '1'
			? firstTeammateSocialLinks
			: teammate === '2'
				? secondTeammateSocialLinks
				: thirdTeammateSocialLinks;

	return (
		<div
			name="social-buttons-container"
			className="flex gap-2 items-center justify-start w-auto h-auto overflow-hidden"
		>
			{teammateId.map((item) => {
				const linkData = socialLinksBase.find((linksItem) => linksItem.socialName === item);
				if (linkData) {
					return (
						<Button
							key={item}
							title={linkData.socialName}
							cornerType={BUTTON_CORNER_TYPE.ROUNDED}
							backgroundColor={linkData.color}
							color="white"
							onClick={() => onClick(linkData.url)}
						/>
					);
				}
				return null;
			})}
		</div>
	);
};
