import React from 'react';
import { BigCard, SmallCard } from './components';
import PropTypes from 'prop-types';

export const TeammateCard = ({ flex, teammateId, isBigCard }) => {
	const isBigCardOpened = isBigCard ? (
		<BigCard teammateId={teammateId} flex={flex} isBigCard={true} />
	) : (
		<SmallCard teammateId={teammateId} flex={flex} isBigCard={false} />
	);

	return isBigCardOpened;
};

TeammateCard.propTypes = {
	flex: PropTypes.string,
	teammateId: PropTypes.string,
	isBigCard: PropTypes.bool,
};
