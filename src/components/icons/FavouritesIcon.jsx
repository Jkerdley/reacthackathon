import React, { useState } from 'react';
import Favourites from '../../assets/icons/Heart.svg';
import PropTypes from 'prop-types';

export const FavouritesIcon = ({ teammate }) => {
	const [isFavourite, setIsFavourite] = useState(false);

	const handleClick = () => {
		setIsFavourite(!isFavourite);
	};
	const favouriteColor = isFavourite ? 'bg-transparent' : 'bg-rose-500/90';

	return (
		<button
			className={`flex size-7 justify-center items-center ${favouriteColor} rounded-xl hover:bg-sky-600 transition-all duration-200 ease-in-out  active:bg-sky-900`}
			onClick={() => {
				handleClick();
			}}
		>
			<img className={`flex size-4`} src={Favourites} alt="favourites" />
		</button>
	);
};

FavouritesIcon.propTypes = {
	teammate: PropTypes.string,
};
