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

export default hover;