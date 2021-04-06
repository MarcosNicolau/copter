import React from "react";
import linkedinIcon from "../../assets/company/contact/linkedin-2.svg";
import hernan from "../../assets/company/team/hernan.svg";
import ignacio from "../../assets/company/team/ignacio.svg";
import stefania from "../../assets/company/team/stefania.svg";
import leandro from "../../assets/company/team/leandro.svg";

const TeamMember = ({ photo, name, position, linkedin }) => {
	return (
		<div className="flex-column-center  our-team__member">
			<img src={photo} alt={name} className="our-team__member__profile" />
			<h5>{name}</h5>
			<p>{position}</p>
			<a href={linkedin}>
				<img src={linkedinIcon} alt="linkedin" />
			</a>
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
						photo={hernan}
						name="Hernan Cantarin"
						position="Chief Executive Officer"
						linkedin="https://www.linkedin.com/in/hernan-cantarin-a82b75a3/"
					/>
					<TeamMember
						photo={ignacio}
						name="Ignacio Manzanel"
						position="Chief Operating Officer"
						linkedin="https://www.linkedin.com/in/ignacio-manzanel-b509661a9/"
					/>
					<TeamMember
						photo={stefania}
						name="Stefania Wetzel"
						position="Community Manager"
						linkedin="/"
					/>
					<TeamMember
						photo={leandro}
						name="Leandro.A. Duran"
						position="Marketing Advisor"
						linkedin="https://www.linkedin.com/in/leandro-alvarez-duran-a70b90131/"
					/>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
