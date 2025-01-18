import React from 'react';
import { Sidebar } from '../../components/sidebar';
import { PageContainer } from '../../components/pageContainer';
import Teammate from '../teammatePage/Teammate';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const TeamPage = () => {
	return (
		<>
			<Sidebar />
			<PageContainer>
				<TeammateCard />
				<TeammateCard />
				<TeammateCard />
				<Teammate />
			</PageContainer>
		</>
	);
};
