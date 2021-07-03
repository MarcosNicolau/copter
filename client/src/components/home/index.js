import React, { useEffect } from "react";
import SpaceBackground from "./space-background";
import Hero from "./hero.jsx";
import Features from "./features.jsx";
import Security from "./security.jsx";
import StartOperate from "../shared/components/start-operate";
import Cta from "./cta.jsx";
import { useNavContext } from "../shared/states/nav-context";

const Home = () => {
	const { setIsNavLight } = useNavContext();

	useEffect(() => setIsNavLight(true), []);

	return (
		<div className="text-neutral-1000">
			<SpaceBackground />
			<Hero />
			<Features />
			<Security />
			<StartOperate isLineLight={true} />
			<Cta />
		</div>
	);
};

export default Home;
