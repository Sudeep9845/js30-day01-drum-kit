const allKeys = document.querySelectorAll(".audio-box");
const allAudio = document.querySelectorAll("audio");

window.addEventListener("keydown", (e) => {
	playSound(e.keyCode);
});

allKeys.forEach((key) => {
	key.addEventListener("click", (e) => {
		const keyCode = key.getAttribute("data-key");
		playSound(Number(keyCode)); // convert to number
	});
});
document.addEventListener("click", (e) => {
	if (!e.target.closest(".audio-box")) {
		pauseAll();
	}
});
const playSound = (keyCode) => {
	if (keyCode === 32) {
		pauseAll();
		return;
	}

	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`.audio-box[data-key="${keyCode}"]`);

	if (!audio) return;

	pauseAll(); // pause everything first

	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
};

const pauseAll = () => {
	allAudio.forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
	});

	allKeys.forEach((k) => k.classList.remove("playing"));
};
//transitioned effect
// const removeTransition = function (e) {
// 	if (e.propertyName !== "transform") return;
// 	this.classList.remove("playing");
// };

// allKeys.forEach((key) =>
// 	key.addEventListener("transitionend", removeTransition)
// );

//ended effect
allAudio.forEach((audio) => {
	audio.addEventListener("ended", () => {
		const keyCode = audio.target.getAttribute("data-key");
		const key = document.querySelector(`audio-box[data-key="${keyCode}]`);
		key.classList.remove("playing");
	});
});
