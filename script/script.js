'use strict';
window.addEventListener('DOMContentLoaded', () => {

	const timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerSeconds = document.querySelector('#timer-seconds'),
		timerDiv = document.querySelector('#timer'),
		deadline = '16 january 2021';

	// Timer
	function countTimer() {
		const dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor(timeRemaining / 60 / 60);
		// day = Math.floor(timeRemaining / 60 / 60 / 24);
		if (timeRemaining < 0) {
			timerDiv.style.color = 'red';
			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';
		} else {
			timerHours.textContent = (hours < 10 ? '0' : '') + hours;
			timerMinutes.textContent = (minutes < 10 ? '0' : '') + minutes;
			timerSeconds.textContent = (seconds < 10 ? '0' : '') + seconds;
		}

	}
	setInterval(countTimer, 1000);

});
