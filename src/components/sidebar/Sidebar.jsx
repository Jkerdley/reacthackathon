import React from 'react';
import { TeamMateIcon } from './TeamMateIcon';

export const Sidebar = () => {
	return (
		<div className="flex flex-col flex-[1] h-full items-center justify-start pt-4 gap-8">
			<TeamMateIcon teammate="1" />
			<TeamMateIcon teammate="2" />
			<TeamMateIcon teammate="3" />
		</div>
	);
};
