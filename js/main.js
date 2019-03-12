
const jsOffsiteToggle = document.querySelector('.jsOffsiteToggle');

const toggleOffCanvas = () => {
	document.body.classList.toggle('offsite-is-open');
};

jsOffsiteToggle.addEventListener('click', () => toggleOffCanvas() );
