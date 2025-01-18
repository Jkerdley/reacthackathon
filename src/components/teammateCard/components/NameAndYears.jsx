import React from 'react';
import TeamMateIcon from '../../sidebar/TeamMateIcon';

const NameAndYears = () => {
	return (
		<div className="flex flex-row bg-green-700 rounded-xl h-auto w-auto justify-between whitespace-nowrap pr-4">
			<div className="flex flex-col gap-1">
				<p className="font-bold text-3xl object-cover">Евгений Эрдле</p>
				<p className="font-extralight text-base object-cover">FRONTEND DEVELOPER | DESIGNER</p>
				<p className="font-bold text-xl object-cover">33 года</p>

				<div name="list-of-tasks" className="py-2">
					<h4 className="text-lg font-bold">Участие в проекте:</h4>
					<ul className="list-disc pl-5">
						<li className="mb-1">Инициализация VITE проекта.</li>
						<li className="mb-1">Подключение GitHub.</li>
						<li className="mb-1">Создание layout.</li>
						<li className="mb-1">Разработка архитектуры App.</li>
						<li className="mb-1">Отрисовка интерфейса в Figma.</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NameAndYears;
