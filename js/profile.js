const circle = document.querySelector('#circle');
const article = document.querySelectorAll('article');

for (const el of article) {
	el.addEventListener('mouseenter', () => {
		circle.style.animationPlayState = 'paused';
	});
	el.addEventListener('mouseleave', () => {
		circle.style.animationPlayState = 'running';
	});
}
