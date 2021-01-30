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

export default toggleMenu;