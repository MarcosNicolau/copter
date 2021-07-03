import React from "react";

interface Props {
	name: string;
}

const Questions: React.FC<Props> = ({ name, children }) => {
	return (
		<div className="help__section">
			<div className="help__section-name">
				<h4>{name}</h4>
			</div>
			{children}
		</div>
	);
};

export default Questions;
