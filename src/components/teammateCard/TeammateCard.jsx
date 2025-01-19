import React from 'react';
import { BigCard, SmallCard } from './components';

export const TeammateCard = ({ flex, teammateId, isBigCard }) => {
	const isBigCardOpened = isBigCard ? (
		<BigCard teammateId={teammateId} flex={flex} />
	) : (
		<SmallCard teammateId={teammateId} flex={flex} />
	);

	return isBigCardOpened;
};
