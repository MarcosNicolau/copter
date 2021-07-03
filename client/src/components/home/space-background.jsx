import React, { useCallback } from "react";
import drawCanvas from "./canvas";

const SpaceBackground = () => {
	const canvasResize = useCallback(() => {
		drawCanvas(document.querySelector("canvas"));
	}, []);

	const canvasRef = useCallback((canvas) => {
		drawCanvas(canvas);
		window.addEventListener("resize", canvasResize);
		return () => window.removeEventListener("resize", canvasResize);
	}, []);
	return <canvas ref={canvasRef} className="space-background"></canvas>;
};

export default SpaceBackground;
