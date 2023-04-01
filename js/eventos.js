
		// Carrusel de imágenes
		$(document).ready(function() {
			var slideIndex = 0;
			showSlides();

			function showSlides() {
				var i;
				var slides = $('#carousel img');
				var overlays = $('#carousel .overlay');
				for (i = 0; i < slides.length; i++) {
					slides[i].style.display = "none";
					overlays[i].style.display = "none";
				}
				slideIndex++;
				if (slideIndex > slides.length) {slideIndex = 1}
				slides[slideIndex-1].style.display = "block";
				overlays[slideIndex-1].style.display = "flex";
				setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
			}
		});

		// Enlaces al hacer clic en las superposiciones de texto
		$(document).ready(function() {
			$('#carousel .overlay').click(function() {
				var overlayText = $(this).find('p').text();
				if (overlayText === 'Enlace 1') {
					window.location.href = 'enlace1.html';
				} else if (overlayText === 'Enlace 2') {
					window.location.href = 'enlace2.html';
				} else if (overlayText === 'Enlace 3') {
					window.location.href = 'enlace3.html';
				}
			});
		});
