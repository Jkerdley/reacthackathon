import React from 'react';

import { Badge } from './components/badge/badge';

function App() {
	return (
		<div
			name="main-container"
			className="flex flex-col bg-[#14141B] w-full h-auto items-start overflow-hidden m-20 p-10"
		>
			<Badge content="Badge" color="yellow" />
		</div>
	);
}
export default App;
