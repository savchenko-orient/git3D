'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import hover from './modules/hover';
import numberValidation from './modules/numberValidation';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

	// Timer
	countTimer('8, february, 2021');
	
	// Menu
	toggleMenu();

	// popUp
	togglePopUp();

	// Tabs
	tabs();

	// Slider
	slider();

	// Hover effect
	hover();

	// Prohibit letter entry
	numberValidation();

	// Calculator
	calculator(100);

	// send-ajax-form
	sendForm();