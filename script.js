const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.audio-box[data-key="${e.keyCode}"]`);
const allKeys = document.querySelectorAll(".audio-box");
const allAudio = document.querySelectorAll("audio");

// Add event listener to all keys
window.addEventListener("keydown", (e) => {
	playSound(e);
});
// Add event listener to all mouse clicks
allKeys.forEach((key) => {
	key.addEventListener("click", () => {
		playSound();
	});
});

// Play sound function
const playSound = (e) => {
	if (e.keyCode === "32") {
		pauseAll();
		return;
	}

	if (!audio) return; // stop the function if there's no audio

	pauseAll();
	audio.currentTime = 0; // rewind to the start
	audio.play(); // play the audio
	key.classList.add("playing");
};
// Pause all sounds and remove the playing class
const pauseAll = () => {
	allAudio.forEach((audio) => {
		audio.pause(); // pause all audio
		audio.currentTime = 0; // rewind to the start
	});

	allKeys.forEach((k) => k.classList.remove("playing"));
};
// Remove the playing class after transition ends
const removeTransition = (e) => {
	if (e.popertyName !== "transform") return;
	this.classList.remove("playing");
};
// Add transition end event listener to all keys
allKeys.forEach((key) =>
	key.addEventListener("transitionend", removeTransition)
);
