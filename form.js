// EFECTO PASOS PARA EL FORMUALRIO
// Variables
let form = document.querySelector(".form-register");

form.addEventListener("click", function (e) {
  let element = e.target;
  let isButtonNext = element.classList.contains("step__button--next");
  let isButtonBack = element.classList.contains("step__button--back");

  if (isButtonBack || isButtonNext) {
    let currentStep = document.getElementById("step-" + element.dataset.step);
    let jumpStep = document.getElementById("step-" + element.dataset.to_step);

    currentStep.addEventListener("animationend", function callback() {
      currentStep.classList.remove("active");
      jumpStep.classList.add("active");
      if (isButtonNext) {
        currentStep.classList.add("to-left");
      } else {
        jumpStep.classList.remove("to-left");
      }

      currentStep.removeEventListener("animationend", callback);
    });

    currentStep.classList.add("inactive");
    jumpStep.classList.remove("inactive");
  }
});

///

// EFECTO VER Y OCULTAR CONTRASEÑA
// Variables
let cambiarInput = document.getElementById("myInput");
let clickIcon = document.getElementById("iconEye");
let cabiarIcon = document.querySelector(".icono");

// Función al momento de hacer click
clickIcon.addEventListener("click", function () {
  // if para condifcionar el input
  // si es input es === password, este lo reemplazar po un input text
  if (cambiarInput.type === "password") {
    cambiarInput.type = "text";
    // se remueve el icono del input
    cabiarIcon.classList.remove("ion-md-eye");
    // se agregar el icono del input
    cabiarIcon.classList.add("ion-md-eye-off");
  } else {
    cambiarInput.type = "password";
    cabiarIcon.classList.remove("ion-md-eye-off");
    cabiarIcon.classList.add("ion-md-eye");
  }
});
