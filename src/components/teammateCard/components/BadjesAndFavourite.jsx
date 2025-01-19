import React from 'react';
import { FavouritesIcon } from '../../icons/FavouritesIcon';
import { Badge } from '../../badge/badge';
import { getUserById } from '../../../utils/userUtils';
import PropTypes from 'prop-types';

export const BadjesAndFavourite = ({ teammate }) => {
	const user = getUserById(teammate);

	if (!user) {
		return <div>Пользователь не найден</div>;
	}
	return (
		<div
			name="badje and like container"
			className="flex h-6 items-center justify-between overflow-hidden"
		>
			<div className="flex justify-start gap-4">
				{user.badge.map((badge) => {
					return (
						<Badge key={badge.id} content={badge.title} color={badge.color} type={badge.type} />
					);
				})}
			</div>
			<FavouritesIcon size={'size-6'} />
		</div>
	);
};

BadjesAndFavourite.propTypes = {
	teammate: PropTypes.string,
};
