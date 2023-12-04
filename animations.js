const scene = document.getElementById("scene");
const ctx = scene.getContext("2d");
const arena = document.getElementById("arena");
const screen = document.getElementById("screen");
const fps = 7;
const frameDelay = 1000 / fps;

let lastFrameTime = 0;

function resizeScene() {
	scene.width = screen.clientWidth;
	scene.height = screen.clientHeight;
	ctx.drawImage(arena, 0, 0, scene.width, scene.height);
}

arena.onload = resizeScene;
window.onresize = resizeScene;

//Idle wizard animation
const idleWizard = new Image();
idleWizard.src = "./assets/wizard/idle.png";

//Dimensions of each frames
const idleWizardWidth = idleWizard.width / 6;
const idleWizardHeight = idleWizard.height;

let idleWizardFrameIndex = 0;
const totalIdleWizardFrameIndex = 6;

//Idle wizard animation loop
function startIdleWizard() {}

idleWizard.addEventListener("load", function () {
	startIdleWizard();
});

//update canvas
function updateScene(timestamp) {
	//clear canvas
	ctx.clearRect(0, 0, scene.width, scene.height);

	// Draw the background or any other elements here
	ctx.drawImage(arena, 0, 0, scene.width, scene.height);

	// Check if enough time has passed since the last frame
	if (timestamp - lastFrameTime >= frameDelay) {
		// Update the frame index
		idleWizardFrameIndex = (idleWizardFrameIndex + 1) % totalIdleWizardFrameIndex;

		// Save the timestamp of this frame
		lastFrameTime = timestamp;
	}

	//idle wizard
	ctx.drawImage(
		idleWizard, //source of sprite sheet
		idleWizardFrameIndex * idleWizardWidth,
		0,
		idleWizardWidth,
		idleWizardHeight,
		-18,
		74,
		idleWizardWidth,
		idleWizardHeight
	);

	//request the next frame of the animation
	requestAnimationFrame(updateScene);
}

//start animation when sprite is loaded
idleWizard.onload = function () {
	resizeScene();
	updateScene();
};
