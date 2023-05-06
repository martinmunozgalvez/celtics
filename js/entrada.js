$(document).ready(function () {
  // Inicializar el datepicker en el elemento con el ID "date"
  $("#date").datepicker();

  // Función para validar el correo electrónico
  function isValidEmail(email) {
    var emailRegex = /\S+@\S+.\S+/;
    return emailRegex.test(email);
  }

  // Función para validar el formulario
  function validateForm() {
    var emailInput = $("#email");
    var nameInput = $("#name");
    var phoneInput = $("#phone");
    var dateInput = $("#date");

    // Validar correo electrónico
    if (!isValidEmail(emailInput.val())) {
      emailInput.addClass("is-invalid");
      return false;
    } else {
      emailInput.removeClass("is-invalid");
    }
    // Validar que el campo phone solo tenga números
    var phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phoneInput.val())) {
      phoneInput.addClass("is-invalid");
      return false;
    } else {
      phoneInput.removeClass("is-invalid");
    }

    // Validar campos vacíos
    if (
      nameInput.val() === "" ||
      phoneInput.val() === "" ||
      dateInput.val() === ""
    ) {
      nameInput.addClass("is-invalid");
      phoneInput.addClass("is-invalid");
      dateInput.addClass("is-invalid");
      return false;
    } else {
      nameInput.removeClass("is-invalid");
      phoneInput.removeClass("is-invalid");
      dateInput.removeClass("is-invalid");
    }

    return true;
  }

  // Cambiar título del formulario
  $("#form-title").text("Compra de entradas");

  // Agregar evento de envío de formulario
  $("#contact-form").submit(function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
});
