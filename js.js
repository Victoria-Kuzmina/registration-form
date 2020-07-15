const inputs = [...document.getElementsByTagName('input')];
inputs.forEach((input) => { 
	input.addEventListener('keyup', (event) => {
		input.setAttribute('value', input.value);
	});
});