import React from "react";
import SpaceBackground from "./space-background";
import Hero from "./hero.jsx";
import Features from "./features.jsx";
import Security from "./security.jsx";
import StartOperate from "../shared/components/start-operate.jsx";
import Cta from "./cta.jsx";

const Home = () => {
	return (
		<div className="text-neutral-1000">
			<SpaceBackground />
			<Hero />
			<Features />
			<Security />
			<StartOperate lineColor="light" />
			<Cta />
		</div>
	);
};

export default Home;
