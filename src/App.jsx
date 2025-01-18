import React from 'react';

import { BreadCrumbs } from './components/breadcrumbs';
import NavBar from './components/navigation/NavBar';
import { ContentContainer } from './components/content/ContentContainer';

function App() {
	return (
		<div
			name="main-container"
			className="flex flex-col bg-[#14141B] w-full h-auto items-start overflow-hidden"
		>
			<NavBar />
			<BreadCrumbs />
			<ContentContainer></ContentContainer>
		</div>
	);
}
export default App;
