import comet from "../../assets/miscellaneous/canvas/comet.svg";

function Star(ctx, canvas) {
	const x = Math.random() * canvas.offsetWidth;
	let y = Math.random() * canvas.offsetHeight;
	// let shadowblur = Math.floor(Math.random() * 10) + 1;

	this.draw = () => {
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
		ctx.fill();
	};

	this.move = (newPos) => {
		y += newPos;
		this.draw();
	};

	this.draw();
}

function Comet(ctx) {
	const img = new Image();
	img.src = comet;
	this.x = Math.random() * window.innerWidth;
	this.y = Math.random() * 20;

	this.draw = () => {
		img.onload = () => {
			ctx.drawImage(img, this.x, this.y);
		};
	};

	this.move = (newPosX, newPosY) => {
		this.x -= newPosX;
		this.y += newPosY;
		ctx.drawImage(img, this.x, this.y);
	};

	this.draw();
}

const cometAnimation = (ctx, canvas, comets, stars) => {
	//The lower  the less chances of appearing
	const spawnChances = 0.015;
	Math.random() < spawnChances && comets.push(new Comet(ctx, canvas));
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	stars.forEach((star) => {
		star.draw();
	});
	comets.forEach((comet, index) => {
		//Removes the comet if its out of the screen.
		//The reason for the set timeout is to prevent the other elemnts from flashing.
		if (comet.x < -100) return setTimeout(() => comets.splice(index, 1), 0);
		comet.move(10, 10);
	});
	requestAnimationFrame(() => cometAnimation(ctx, canvas, comets, stars));
};

//This variable is for checking whether the user has scrolled down or up, by substracting it from the current scroll
let initialScrollTop = 0;
const starsAnimation = (ctx, canvas, stars) => {
	const moveSpeed = 1.5;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//Checks if the user has scroll down or up, and sets its respective moveSpeed
	const newPos = initialScrollTop >= window.scrollY ? moveSpeed : -moveSpeed;
	initialScrollTop = window.scrollY;

	stars.forEach((star) => star.move(newPos));
};

const drawCanvas = (canvas) => {
	if (!canvas) return;
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;

	const starsNumber = window.innerWidth <= 1000 ? 100 : 300;
	const stars = [];
	const comets = [];

	//Create instances of stars based on starsNumber
	for (let i = 0; i <= starsNumber; i++) {
		stars.push(new Star(ctx, canvas));
	}

	//Play comets animation only on screens larger than 1000 px
	requestAnimationFrame(() => cometAnimation(ctx, canvas, comets, stars));

	//Add stars animation on scroll on screens larger than 1000px
	if (window.innerWidth <= 1000) return;
	window.addEventListener("scroll", () => starsAnimation(ctx, canvas, stars));
};

export default drawCanvas;
