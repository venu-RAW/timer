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
		let target = e.target.id;
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
	if (sec > 59) {
		min++;
		sec = 00;
		timeCondition(m, min);
		if (min > 59) {
			hr++;
			min = 00;
			timeCondition(h, hr);
		}
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
