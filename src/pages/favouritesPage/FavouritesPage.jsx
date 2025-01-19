import React from 'react';
import { PageContainer } from '../../components/pageContainer';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const FavouritesPage = () => {
	const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

	return (
		<PageContainer>
			<>
				{favourites.length > 0 ? (
					favourites.map((teammateId) => (
						<TeammateCard
							key={teammateId}
							teammateId={teammateId}
							flex={'flex-[2] hover:flex-[8] transition-all ease-out'}
						/>
					))
				) : (
					<p>Нет избранных участников.</p>
				)}
			</>
		</PageContainer>
	);
};
