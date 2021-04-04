function Star(ctx, canvas) {
	const x = Math.random() * canvas.offsetWidth;
	let y = Math.random() * canvas.offsetHeight;
	let shadowblur = Math.floor(Math.random() * 10) + 1;

	this.draw = () => {
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
		ctx.fill();
		ctx.shadowColor = "white";
		ctx.shadowBlur = shadowblur;
	};

	this.move = (newPos) => {
		y += newPos;
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
		ctx.fill();
		ctx.shadowColor = "white";
		ctx.shadowBlur = shadowblur;
	};

	this.draw();
}

//This variable is for checking whether the user has scrolled down or up, by substracting it from the current scroll
let initialScrollTop = 0;

const drawCanvas = (canvas) => {
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;
	const starsNumber = window.innerWidth <= 1000 ? 100 : 200;
	const stars = [];
	for (let i = 0; i <= starsNumber; i++) {
		stars.push(new Star(ctx, canvas));
	}

	const animate = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const newPos = initialScrollTop >= window.scrollY ? 1.5 : -1.5;
		initialScrollTop = window.scrollY;
		stars.forEach((star) => {
			star.move(newPos);
		});
		if (stars.length > 500) return;
		stars.push(new Star(ctx, canvas));
	};

	if (window.innerWidth <= 1000) return;
	window.addEventListener("scroll", animate);
};

export default drawCanvas;
