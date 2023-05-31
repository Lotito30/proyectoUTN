function abrirImagen(imagen) {
  var rutaImagen = imagen.src;
  window.open(rutaImagen);
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".form");
  var nameInput = document.querySelector(".item1");
  var emailInput = document.querySelector(".item5");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nameInput.value.trim() === "") {
      alert("Por favor, ingrese su nombre y apellido.");
      nameInput.focus();
      return;
    }
    if (emailInput.value.trim() === "") {
      alert("Por favor, ingrese su correo electrónico.");
      emailInput.focus();
      return;
    }
    form.submit();
  });
});
