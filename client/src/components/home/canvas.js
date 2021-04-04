function Star(ctx, canvas) {
	const x = Math.random() * canvas.offsetWidth;
	const y = Math.random() * canvas.offsetHeight;
	// const maxShadow = 10;
	// const minShadow = 1;
	let shadowblur = Math.floor(Math.random() * 10) + 1;
	// let incrementer = 1;

	this.draw = () => {
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
		ctx.fill();
		ctx.shadowColor = "white";
		ctx.shadowBlur = shadowblur;
	};

	this.draw();
}

const drawCanvas = (canvas, starsNum) => {
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;
	const stars = [];
	for (let i = 0; i <= starsNum; i++) {
		stars.push(new Star(ctx, canvas));
	}
};

export default drawCanvas;
