import React from 'react';

import { BreadCrumbs } from './components/breadcrumbs';
import NavBar from './components/navigation/NavBar';
import { ContentContainer } from './components/content/ContentContainer';

function App() {
	return (
		<div name="main-container" className="flex flex-col bg-[#14141B] w-[100%] h-auto items-start">
			<NavBar />
			<BreadCrumbs />
			<ContentContainer />
		</div>
	);
}
export default App;
