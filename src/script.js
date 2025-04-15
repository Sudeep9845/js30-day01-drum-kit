const main = document.querySelector("#main");
const beat = document.querySelector("#beat");
const dark = document.querySelector("#dark");
const guitar = document.querySelector("#guitar");

//importing audio files
const beatAudio = new Audio("../audio/beat-drums-4_4_120bpm-9sek-275095.mp3");
const darkAudio = new Audio(
	"../audio/dark-trap-loop-145bpm-e-minor-270343.mp3"
);
const guitarAudio = new Audio("../audio/relaxing-guitar-257871.mp3");

const playBeat = () => {
	darkAudio.pause();
	guitarAudio.pause();
	dark.classList.remove("playing");
	guitar.classList.remove("playing");
	beatAudio.currentTime = 0;
	beatAudio.play();
	beat.classList.add("playing");
};
const playDark = () => {
	beatAudio.pause();
	guitarAudio.pause();
	beat.classList.remove("playing");
	guitar.classList.remove("playing");
	darkAudio.currentTime = 0;
	darkAudio.play();
	dark.classList.add("playing");
};
const playGuitar = () => {
	beatAudio.pause();
	darkAudio.pause();
	beat.classList.remove("playing");
	dark.classList.remove("playing");
	guitarAudio.currentTime = 0;
	guitarAudio.play();
	guitar.classList.add("playing");
};
const pauseAll = () => {
	beatAudio.pause();
	darkAudio.pause();
	guitarAudio.pause();
	beat.classList.remove("playing");
	dark.classList.remove("playing");
	guitar.classList.remove("playing");
};
//adding click event listeners to the buttons
beat.addEventListener("click", () => {
	playBeat();
});
dark.addEventListener("click", () => {
	playDark();
});
guitar.addEventListener("click", () => {
	playGuitar();
});

//adding keydown event listeners to the buttons
document.addEventListener("keydown", (e) => {
	if (e.key === "b") playBeat();
	if (e.key === "d") playDark();
	if (e.key === "g") playGuitar();
	if (e.key === " ") pauseAll();
});

document.addEventListener("click", (event) => {
	const clickedElement = event.target;

	// If the clicked element is NOT one of the audio buttons
	if (
		clickedElement !== beat &&
		clickedElement !== dark &&
		clickedElement !== guitar
	) {
		pauseAll();
	}
});
