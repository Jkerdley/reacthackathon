import React from 'react';
import { Slider } from '../../slider';

export const NameAndYears = ({ name, years, profession, text, level, makeInProject, isBigCard }) => {
	return (
		<div className="flex flex-col rounded-xl h-auto w-auto justify-between whitespace-nowrap pr-1 gap-1">
			<div className="flex flex-col gap-[4px]">
				{isBigCard ? (
					<div className="flex items-center justify-between w-full gap-16">
						<p className="font-bold text-3xl object-cover">{name}</p>
						<p className="font-extralight text-base object-cover">{years} года</p>
						<p className="font-extralight text-base object-cover">{profession}</p>
						<p className="font-extralight text-base object-cover">DEV LEVEL: {level}</p>
					</div>
				) : (
					<>
						<p className="font-bold text-3xl object-cover">{name}</p>
						<p className="font-extralight text-base object-cover">{profession}</p>
						<p className="font-bold text-xl object-cover">{years} года</p>
					</>
				)}
			</div>
			<div className="flex justify-between">
				<div
					name="list-of-tasks"
					className="pr-3 whitespace-nowrap scrollbar-thin overflow-auto max-h-60 object-cover"
				>
					<h4 className="text-lg font-bold">Задачи в проекте:</h4>
					<ul className="list-disc pl-5 object-cover">
						{(isBigCard ? makeInProject : makeInProject.slice(0, 7)).map((item) => {
							return (
								<li key={item.id} className="mb-[2px]">
									{item.text}
								</li>
							);
						})}
					</ul>
				</div>
				{isBigCard ? (
					<div name="slider" className="flex max-h-60 max-w-80">
						<Slider />
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};
