document.addEventListener('DOMContentLoaded', function () {
	// Аккордеон
	const headers = document.querySelectorAll('.accordion-header');
	headers.forEach((header) => {
		header.addEventListener('click', function () {
			const content = this.nextElementSibling;
			headers.forEach((otherHeader) => {
				if (otherHeader !== header) {
					otherHeader.nextElementSibling.classList.remove('active');
				}
			});
			content.classList.toggle('active');
		});
	});

	// Открытие PDF по кнопке
	const pdfButtons = document.querySelectorAll('.pdf-btn');
	pdfButtons.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			e.stopPropagation(); // не закрывать аккордеон
			const url = this.dataset.url; // ссылка на PDF
			if (url) {
				window.open(url, '_blank'); // открыть в новой вкладке
			}
		});
	});
});
