const blockEls = document.querySelectorAll('.block');

blockEls.forEach(element => {
	element.addEventListener('click', function (e) {
		if (e.target.classList.contains('question')) {
			e.currentTarget.querySelector('.answer').classList.toggle('hide');
        }
		
	});
})