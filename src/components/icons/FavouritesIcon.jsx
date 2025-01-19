import React, { useEffect, useState } from 'react';
import Favourites from '../../assets/icons/Heart.svg';
import PropTypes from 'prop-types';

export const FavouritesIcon = ({ teammate }) => {
	const [isFavourite, setIsFavourite] = useState(false);

	useEffect(() => {
		const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
		setIsFavourite(favourites.includes(teammate));
	}, [teammate]);

	const handleClick = () => {
		const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
		if (isFavourite) {
			const updatedFavourites = favourites.filter((id) => id !== teammate);
			localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
		} else {
			favourites.push(teammate);
			localStorage.setItem('favourites', JSON.stringify(favourites));
		}
		setIsFavourite(!isFavourite);
	};

	const favouriteColor = !isFavourite ? 'bg-transparent' : 'bg-rose-500/90';

	return (
		<>
			<div className="flex justify-center truncate items-center gap-1">
				{!isFavourite ? (
					<p className="flex text-sm truncate justify-center items-center">В избранное</p>
				) : (
					<p className="flex text-sm truncate justify-center items-center">Удалить</p>
				)}
				<button
					className={`flex size-7 justify-center items-center ${favouriteColor} rounded-xl hover:bg-sky-600 transition-all duration-200 ease-in-out active:bg-sky-900`}
					onClick={handleClick}
				>
					<img className={`flex size-4`} src={Favourites} alt="favourites" />
				</button>
			</div>
		</>
	);
};

FavouritesIcon.propTypes = {
	teammate: PropTypes.string.isRequired,
};
