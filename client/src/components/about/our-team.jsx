import React from "react";

import linkedinIcon from "../../assets/company/contact/linkedin-2.svg";
import hernan from "../../assets/company/team/hernan.jpg";
import ignacio from "../../assets/company/team/ignacio.jpg";
import pablo from "../../assets/company/team/pablo.jpg";

const TeamMember = ({ photo, name, position, linkedin }) => {
	const handleLinkedinRedirect = () => window.open(linkedin);

	return (
		<div className="flex-column-center  our-team__member">
			<div className="flex-column-center our-team__member__profile">
				<img src={photo} alt={name}/>
			</div>
			<h5>{name}</h5>
			<p>{position}</p>
			<img
				src={linkedinIcon}
				alt="linkedin"
				onClick={handleLinkedinRedirect}
				className="pointer"
			/>
		</div>
	);
};

const OurTeam = () => {
	return (
		<section>
			<div className="container space our-team">
				<div className="our-team__title">
					<h2 className="title text-left">Nuestro equipo</h2>
					<p className="snippet text-left">
						Formado por jóvenes emprendedores amantes de las criptomonedas
					</p>
				</div>
				<div className="text-neutral-0 our-team__members">
				<TeamMember
						photo={pablo}
						name="Pablo Cantarin"
						position="Chief Executive Officer && CTO"
						linkedin="https://www.linkedin.com/in/pablo-cantarin-252370124/"
					/>
					<TeamMember
						photo={hernan}
						name="Hernan Cantarin"
						position="Chief Financial Officer"
						linkedin="https://www.linkedin.com/in/hernan-cantarin-a82b75a3/"
					/>
					<TeamMember
						photo={ignacio}
						name="Ignacio Manzanel"
						position="Chief Operating Officer"
						linkedin="https://www.linkedin.com/in/ignacio-manzanel-b509661a9/"
					/>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
