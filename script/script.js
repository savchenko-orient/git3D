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
		
		let opacityIn = 0,
         	opacityOut = 1;

		popUpBtn.forEach(elem => {
			elem.addEventListener('click', () => {
				if (document.documentElement.clientWidth > 768) {
					opacityIn = 0;
                popUp.style.display = 'block';
                let opacityInterval;
                const opacityAnimate = function() {
                    opacityInterval = requestAnimationFrame(opacityAnimate);
                    opacityIn += 0.03;
                    if (opacityIn < 1.01) {
                        popUp.style.opacity = opacityIn;
                    } else if (opacityIn >= 1) {
                        cancelAnimationFrame(opacityInterval);
                    }
                };
                opacityInterval = requestAnimationFrame(opacityAnimate); 
				
				} else {
					popUp.style.display = 'block';
					popUp.style.opacity = 1;
				}
                
            });
        });

		popUpClose.addEventListener('click', () => {
			if (document.documentElement.clientWidth > 768){
				let opacityInterval;
            		opacityOut = 1;
            	const opacityAnimate = function() {
                opacityInterval = requestAnimationFrame(opacityAnimate);
                opacityOut -= 0.03;
                if (opacityOut > 0.01) {
                    popUp.style.opacity = opacityOut;
                } else {
                    popUp.style.display = 'none';
                    cancelAnimationFrame(opacityInterval);
                }
				};
				
				opacityInterval = requestAnimationFrame(opacityAnimate);
			} else {
				popUp.style.display = 'none';
					popUp.style.opacity = 0;
			}
        });
	};

	togglePopUp();
});
