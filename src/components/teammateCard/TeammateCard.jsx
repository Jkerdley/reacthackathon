import React from 'react';
import { BigCard, SmallCard } from './components';

export const TeammateCard = ({ flex, teammateId, isBigCard }) => {
	const isBigCardOpened = isBigCard ? (
		<BigCard teammateId={teammateId} flex={flex} isBigCard={true} />
	) : (
		<SmallCard teammateId={teammateId} flex={flex} isBigCard={false} />
	);

	return isBigCardOpened;
};
