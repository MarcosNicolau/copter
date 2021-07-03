import React from "react";

interface Props {
	isBold?: boolean;
	isList?: boolean;
	style?: React.CSSProperties;
}

//This is in the case we cant to make a change on the question change we have this component.
//For now it is just a p tag
export const QuestionText: React.FC<Props> = ({ children, isBold, style, isList }) =>
	isList ? (
		<li>
			<p className={`${isBold && "font-wght-700"}`} style={{ margin: ".5rem 0" }}>
				{children}
			</p>
		</li>
	) : (
		<p className={`${isBold && "font-wght-700"}`} style={style}>
			{children}
		</p>
	);
