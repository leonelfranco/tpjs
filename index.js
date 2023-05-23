function borrarInputs() {
    const inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }


function calcular() {
    const precio = 200;
    const cantidadElement = document.getElementById("cantidad");
    const categoriaElement = document.querySelector("#categoria select");
    const descuentoPorcentaje = obtenerDescuento(categoriaElement.value);
    let cantidad = parseFloat(cantidadElement.value);
    let descuento = cantidad * precio * descuentoPorcentaje;
    let total = cantidad * precio - descuento;
    document.getElementById("pagar").innerText = "Total a pagar: $" + total;

    console.log(total);
  }

  function obtenerDescuento(categoria) {
    switch (categoria) {
      case "estudiante":
        return 0.8; // Descuento del 80%
      case "trainee":
        return 0.5; // Descuento del 50%
      case "junior":
        return 0.15; // Descuento del 15%
      default:
        return 0; // Sin descuento por defecto
    }
  }