import React from "react";
import SectionTitle from "./section-title";
import budgetIcon from "../../../assets/icons/budget.svg";
import buyCryptosIcon from "../../../assets/icons/buy-cryptos.svg";
import valuationsIcon from "../../../assets/icons/valuations.svg";

interface StepProps {
	desc: string;
	icon: string;
	delay: string;
}

const Step: React.FC<StepProps> = ({ desc, icon, delay }) => {
	return (
		<div
			className="start-operate__step flex-column-center"
			data-aos="fade-left"
			data-aos-delay={delay}
		>
			<div className="start-operate__step-img-container">
				<img src={icon} alt="deposita" />
			</div>
			<h4>{desc}</h4>
		</div>
	);
};

interface Props {
	isLineLight: boolean;
}

const StartOperate: React.FC<Props> = ({ isLineLight }) => {
	const lineBg = isLineLight ? "start-operate__line--light" : "start-operate__line--dark";
	return (
		<section>
			<div className="space start-operate container">
				<SectionTitle title="Comenzar a operar nunca fue tan fácil">
					Tan fácil como 1, 2, 3...
				</SectionTitle>

				<div className="flex-row-center start-operate__steps">
					<Step desc="Depositá pesos" icon={budgetIcon} delay="0" />
					<div
						className={`start-operate__line ${lineBg}`}
						data-aos="fade-left"
						data-aos-delay="100"
					></div>
					<Step desc="Comprá crypto" icon={buyCryptosIcon} delay="100" />
					<div
						className={`start-operate__line ${lineBg}`}
						data-aos="fade-left"
						data-aos-delay="300"
					></div>
					<Step desc="Aumentá tus ahorros" icon={valuationsIcon} delay="400" />
				</div>
			</div>
		</section>
	);
};

export default StartOperate;
