const sendForm = () => {
    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся.';


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 18px';
    statusMessage.style.color = '#fff';

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

    };

    const setData = (event) => {
        event.preventDefault();

        event.target.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(event.target);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                event.target.reset();
            })

            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    };

    document.body.addEventListener('submit', (event) => {
        setData(event);
    });

};

export default sendForm;