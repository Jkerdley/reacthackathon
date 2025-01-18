import React from 'react';
import { NameAndYears } from './NameAndYears';
import { TeamMateIcon } from '../../sidebar';

export const InfoAndAvatar = () => {
	return (
		<div className="flex overflow-hidden whitespace-nowrap bg-slate-500 justify-between">
			<NameAndYears />
			<div name="avatar-in-card" className="overflow-hidden">
				<TeamMateIcon size="size-64" rounded="rounded-2xl" />
			</div>
		</div>
	);
};
