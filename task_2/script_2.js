'use strict';
const timeOfDay = document.querySelector('#time-of-day'),
	presentDay = document.querySelector('#present-day'),
	presentTime = document.querySelector('#present-time'),
	newYearLeft = document.querySelector('#new-year-left'),
	newYear = '1 Jan 2022';

function timer() {
	const data = new Date(),
		newYearDate = new Date(newYear);

	const hours = data.getHours();
	if (hours <= 6) {
		timeOfDay.textContent = 'Доброй ночи!';
	} else if (hours <= 10) {
		timeOfDay.textContent = 'Доброе утро!';
	} else if (hours <= 20) {
		timeOfDay.textContent = 'Добрый день!';
	} else if (hours > 20) {
		timeOfDay.textContent = 'Доброй ночи!';
	}

	const timeNow = data.toLocaleTimeString('en');
	presentTime.textContent = 'Текущее время: ' + timeNow;

	const today = data.getDay();
	if (today === 0) {
		presentDay.textContent = 'Сегодня: Воскресенье';
	} else if (today === 1) {
		presentDay.textContent = 'Сегодня: Понедельник';
	} else if (today === 2) {
		presentDay.textContent = 'Сегодня: Вторник';
	} else if (today === 3) {
		presentDay.textContent = 'Сегодня: Среда';
	} else if (today === 4) {
		presentDay.textContent = 'Сегодня: Четверг';
	} else if (today === 5) {
		presentDay.textContent = 'Сегодня: Пятница';
	} else if (today === 6) {
		presentDay.textContent = 'Сегодня: Суббота';
	}

	const timeRemaining = (newYearDate - data) / 1000,
		days = Math.floor(timeRemaining / 3600 / 24);
	newYearLeft.textContent = 'До нового года осталось ' + days + ' дней';

}

timer();
