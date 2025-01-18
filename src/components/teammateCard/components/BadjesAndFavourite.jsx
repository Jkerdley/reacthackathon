import React from 'react';
import { FavouritesIcon } from '../../icons/FavouritesIcon';

export const BadjesAndFavourite = () => {
	return (
		<div
			name="badje and like container"
			className="flex rounded-xl h-10 items-center justify-between overflow-hidden"
		>
			BADJES <FavouritesIcon size={'size-6'} />
		</div>
	);
};
