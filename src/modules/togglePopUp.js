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
					const opacityAnimate = function () {
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
				const opacityAnimate = function () {
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

export default togglePopUp;