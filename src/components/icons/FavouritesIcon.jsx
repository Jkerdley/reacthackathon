import React from 'react';
import Favourites from '../../assets/icons/Heart.svg';

export const FavouritesIcon = ({ size }) => {
	return (
		<>
			<img className={`flex ${size}`} src={Favourites} alt="favourites" />
		</>
	);
};
