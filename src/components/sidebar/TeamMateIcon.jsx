import React from 'react';
import AvatarJo from '../../assets/images/avatarjo.jpg';

export const TeamMateIcon = ({ size = 'size-16', rounded = 'rounded-full' }) => {
	return (
		<div className={`relative ${size} justify-center items-center ${rounded} overflow-hidden`}>
			<img className="w-full h-full object-cover" src={AvatarJo} alt="avatar" />
		</div>
	);
};
