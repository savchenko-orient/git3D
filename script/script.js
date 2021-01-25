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

	const toggleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);
		menu.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('close-btn')) {
				handlerMenu();
			} else {
				target = target.closest('li');
				if (target) {
					handlerMenu();
				}
			}
		});

	};
	toggleMenu();

	// popUp
	const togglePopUp = () => {
		const popUp = document.querySelector('.popup'),
			popUpBtn = document.querySelectorAll('.popup-btn'),
			popUpClose = document.querySelector('.popup-close'),
            popUpContent = document.querySelector('.popup-content');

		popUpBtn.forEach(elem => {
			elem.addEventListener('click', () => {
				if (document.documentElement.clientWidth > 768) {
					let start = Date.now();
					let timer = setInterval(function () {
						let timePassed = Date.now() - start;
						popUp.style.display = 'block';
						popUpContent.style.left = timePassed / 2 + 'px';
						if (timePassed >= 2000) {
							clearInterval(timer);
						}
					}, 20);
					
				} else {
					popUp.style.display = 'block';
				}
			});
		});

		popUpClose.addEventListener('click', () => {
            popUp.style.display = 'none';
        });
	};

	togglePopUp();
});
