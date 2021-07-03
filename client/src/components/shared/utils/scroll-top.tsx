import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//This function will scroll to the top every time the router changes.
//We create this, because when linking to another route from the footer, the pages does not go to the top it stays in the same position.
export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
	}, [pathname]);

	return null;
}
