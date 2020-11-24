let btns = document.querySelectorAll(".btn");
let h = document.querySelector(".h");
let m = document.querySelector(".m");
let s = document.querySelector(".s");

let hr = 00,
	min = 00,
	sec = 00;
let interval = null;

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		let target = e.path[1].id;
		if (target === "start") {
			clearInterval(interval);
			interval = setInterval(start, 1000);
		} else if (target === "pause") {
			clearInterval(interval);
		} else {
			clearInterval(interval);
			reset();
		}
	});
});

let timeCondition = (domClass, format) => {
	if (format <= 9) {
		domClass.textContent = "0" + format;
	}
	if (format > 9) {
		domClass.textContent = format;
	}
};

let start = () => {
	sec++;
	timeCondition(s, sec);
	if (sec >= 60) {
		sec = 00;
		min++;
		timeCondition(m, min);
	}
	if (min >= 60) {
		min = 00;
		hr++;
		timeCondition(h, hr);
	}
};

let reset = () => {
	sec = 00;
	min = 00;
	hr = 00;
	s.textContent = "00";
	m.textContent = "00";
	h.textContent = "00";
};
