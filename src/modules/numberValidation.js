const numberValidation = () => {
		const calcBlock = document.querySelector('.calc-block');

		calcBlock.addEventListener('input', event => {
			if (event.target.tagName === 'INPUT') {
				event.target.value = event.target.value.replace(/\D/g, '');
			}
		});
};

export default numberValidation;