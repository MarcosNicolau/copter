import React from "react";

interface Props {
	title: string;
}

export const Point: React.FC<Props> = ({ title, children }) => {
	return (
		<div>
			<h3>{title}</h3>
			{children}
		</div>
	);
};

export const Text: React.FC = ({ children }) => <p style={{ margin: ".5rem 0 0" }}>{children}</p>;

export const Clause: React.FC = ({ children }) => (
	<p style={{ margin: "2rem 0 0.2rem" }}>{children}</p>
);

interface ListProps {
	text?: string;
}

export const List: React.FC<ListProps> = ({ children, text }) => {
	return (
		<div style={{ margin: ".5rem 0" }}>
			{text && <Text>{text}</Text>}
			<ul style={{ margin: 0 }}>{children}</ul>
		</div>
	);
};
