const time = document.querySelector('#time');

setInterval(() => {
	const toDate = new Date(new Date().setHours(7, 40, 0, 0)).getTime();
	const resTime = ((toDate - Date.now()) / (1000 * 60)).toFixed(0);
	time.innerText = `В школу через: ${resTime} минут(ы)`;
}, 200);
