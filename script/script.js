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

	// Menu
	const toggleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');

		};

		btnMenu.addEventListener('click', handlerMenu);
		menu.addEventListener('click', event => {
			const target = event.target;
			if (target.classList.contains('close-btn')) {
				handlerMenu();
			}
			if (target.closest('li')) {
				handlerMenu();
			}

		});

	};
	toggleMenu();

	// popUp
	const togglePopUp = () => {
		const popUp = document.querySelector('.popup'),
			popUpBtn = document.querySelectorAll('.popup-btn'),
			popUpClose = document.querySelector('.popup-close');

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
			if (document.documentElement.clientWidth > 768) {
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

	// Tabs
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tabContent[i].classList.add('d-none');
					tab[i].classList.remove('active');
				}
			}
		};

		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});

	};

	tabs();

	// Slider
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			dots = document.querySelector('.portfolio-dots'),
			// dot = document.querySelectorAll('.dot'),
			slider = document.querySelector('.portfolio-content');

		let currentSlide = 0,
			interval,
			dot;

		const dotAdd = () => {
			for (let i = 0; i <= slide.length - 1; i++) {
				const li = document.createElement('li');
				li.classList.add('dot');
				if (i === 0) {
					li.classList.add('dot-active');
				}
				dots.append(li);
			}
			dot = document.querySelectorAll('.dot');
		};
		dotAdd();

		// strClass - сокрощённо от stringClass(строка с названием класса)
		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', event => {
			event.preventDefault();

			const target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		slider.addEventListener('mouseover', event => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', event => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
				startSlide();
			}
		});

		startSlide(1500);
	};
	slider();

	// Hover effect
	const hover = () => {
		const container = document.querySelector('#command .row');

		container.addEventListener('mouseover', event => {
			if (event.target.classList.contains('command__photo')) {
				const src = event.target.src;
				event.target.src = event.target.dataset.img;
				event.target.dataset.img = src;
			}
		});

		container.addEventListener('mouseout', event => {
			if (event.target.classList.contains('command__photo')) {
				const datasetImg = event.target.src;
				event.target.src = event.target.dataset.img;
				event.target.dataset.img = datasetImg;
			}
		});
	};
	hover();

	const numberValidation = () => {
		const calculatorBlock = document.querySelector('.calc-block');

		calculatorBlock.addEventListener('input', event => {
			if (event.target.tagName === 'INPUT') {
				event.target.value = event.target.value.replace(/\D/g, '');
			}
		});
	};
	numberValidation();

});
