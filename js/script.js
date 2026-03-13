// script.js
document.addEventListener('DOMContentLoaded', function () {
	const headers = document.querySelectorAll('.accordion-header');

	headers.forEach((header) => {
		header.addEventListener('click', function () {
			const content = this.nextElementSibling; // .accordion-content

			// Закрыть все другие открытые элементы (аккордеон)
			headers.forEach((otherHeader) => {
				if (otherHeader !== header) {
					const otherContent = otherHeader.nextElementSibling;
					otherContent.classList.remove('active');
				}
			});

			// Переключить текущий элемент
			content.classList.toggle('active');
		});
	});

	// Добавляем функциональность кнопкам (пока просто заглушка)
	const pdfButtons = document.querySelectorAll('.pdf-btn');
	pdfButtons.forEach((btn) => {
		btn.addEventListener('click', function (e) {
			e.stopPropagation(); // предотвращаем всплытие, чтобы не закрыть аккордеон
			alert('Функция скачивания PDF будет добавлена позже.');
			// Здесь в будущем можно добавить window.location.href = 'путь_к_файлу.pdf';
		});
	});
});
