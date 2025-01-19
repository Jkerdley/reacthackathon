import React from 'react';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const Teammate = ({ flex, isBigCard, teammateId }) => {
	return (
		<>
			<TeammateCard flex={flex} isBigCard={isBigCard} teammateId={teammateId} />
		</>
	);
};
