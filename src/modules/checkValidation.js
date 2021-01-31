const checkValidation = () => {
    document.body.addEventListener('focusout', (event) => {
        let target = event.target;
        if (target.name === 'user_phone') {
            target.style.border = 'none';
            target.setCustomValidity('');
            if (target.value.length < 11) {
                target.setCustomValidity("Введите + и 11 цифр или 12 цифр.");
                target.style.border = `3px solid red`;
            }
        } else if (target.name === 'user_email') {
            const regExp = /^\w+@\w+\.\w{2,}$/;
            target.style.border = 'none';
            target.setCustomValidity('');
            if (regExp.test(target.value) === false) {
                target.setCustomValidity("Введите корректный e-mail");
                target.style.border = `2px solid red`;
            }
            if (target.value.length <= 11) {
                target.setCustomValidity("E-mail должен состоять минимум из 11 символов");

                target.style.border = `2px solid red`;
            }
        } else if (target.name === 'user_name') {
            target.style.border = 'none';
            target.setCustomValidity('');
            if (target.value.length <= 2) {
                target.setCustomValidity("Введите от 2х букв");
                target.style.border = `2px solid red`;
            }
        }
    });
};

export default checkValidation;