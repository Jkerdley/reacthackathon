import React from 'react';
import { Sidebar } from '../../components/sidebar';
import { PageContainer } from '../../components/pageContainer';
import Teammate from '../teammatePage/Teammate';
import { TeammateCard } from '../../components/teammateCard/TeammateCard';

export const TeamPage = () => {
	// const x = isHover ? 10 : 4;
	return (
		<>
			<Sidebar />

			<PageContainer>
				<>
					<TeammateCard flex={'flex-[4] hover:flex-[8] transition-all ease-out'} />
					<TeammateCard flex={'flex-[4] hover:flex-[8] transition-all ease-out'} />
					<TeammateCard flex={'flex-[4] hover:flex-[8] transition-all ease-out'} />
				</>
				<TeammateCard flex={'flex-[1]'} />
				{/* <Teammate flex={0.5} /> */}
			</PageContainer>
		</>
	);
};

// import React, { useState } from 'react';
// import { Sidebar } from '../../components/sidebar';
// import { PageContainer } from '../../components/pageContainer';
// import { TeammateCard } from '../../components/teammateCard/TeammateCard';

// export const TeamPage = () => {
// 	const [activeIndex, setActiveIndex] = useState(0);

// 	const handleHover = (index) => {
// 		setActiveIndex(index);
// 	};

// 	const handleMouseLeave = () => {
// 		setActiveIndex(0);
// 	};

// 	return (
// 		<>
// 			<Sidebar />

// 			<PageContainer>
// 				<>
// 					{[0, 1, 2].map((index) => (
// 						<TeammateCard
// 							key={index}
// 							flex={
// 								activeIndex === index
// 									? 'flex-[10]'
// 									: 'flex-[4] hover:flex-[10] transition-all ease-out'
// 							}
// 							onHover={() => handleHover(index)}
// 							onMouseLeave={handleMouseLeave}
// 						/>
// 					))}
// 				</>
// 				<TeammateCard flex={'flex-[1]'} />
// 			</PageContainer>
// 		</>
// 	);
// };
