// Get DOM elements
const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hour');

// Function which will update the time
const updateTime = () => {
	const seconds = new Date().getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = new Date().getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hour = new Date().getHours();
	const hourDegrees = ((hour / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Calling the updateTime function every second in order to update clock hands
setInterval(() => {
	updateTime();
}, 1000);