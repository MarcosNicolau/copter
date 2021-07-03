import React from "react";

interface Props {
	title: string;
	icon: string;
	type: string;
}

const Card: React.FC<Props> = ({ title, icon, type, children }) => {
	return (
		<div className="card" id={type} data-aos="fade-up">
			<div className={`card__img-container`}>
				<img src={icon} alt="icon" />
			</div>
			<div className="card__text">
				<h4>{title}</h4>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default Card;
