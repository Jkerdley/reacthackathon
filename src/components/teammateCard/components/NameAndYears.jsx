import React from 'react';

export const NameAndYears = ({ name, years, profession, text, level, makeInProject }) => {
	return (
		<div className="flex flex-row rounded-xl h-auto w-auto justify-between whitespace-nowrap pr-2">
			<div className="flex flex-col gap-1">
				<p className="font-bold text-3xl object-cover">{name}</p>
				<p className="font-extralight text-base object-cover">{profession}</p>
				<p className="font-bold text-xl object-cover">{years} года</p>

				<div name="list-of-tasks" className="py-2">
					<h4 className="text-lg font-bold">Участие в проекте:</h4>
					<ul className="list-disc pl-5">
						{makeInProject.map((item) => {
							return (
								<li key={item.id} className="mb-1">
									{item.text}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
