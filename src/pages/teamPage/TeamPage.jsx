import React from 'react';
import { Sidebar } from '../../components/sidebar';
import { PageContainer } from '../../components/pageContainer';
import Teammate from '../teammatePage/Teammate';

export const TeamPage = () => {
	return (
		<>
			<Sidebar />
			<PageContainer>
				<Teammate />
			</PageContainer>
		</>
	);
};
