const preciosDolar = document.querySelectorAll('.precio-dolar');
const preciosCordoba = document.querySelectorAll('.precio-cordoba');

// Verifica que los elementos existan
if (preciosDolar && preciosCordoba) {
  // Itera sobre los elementos
  preciosDolar.forEach((precioDolar, index) => {
    // Obtiene el valor del precio en dólares
    const precioDolarValue = precioDolar.innerText.replace('$', '');

    // Verifica que el valor del precio en dólares sea un número
    if (!isNaN(precioDolarValue)) {
      // Realiza el cálculo
      const precioCordobaValue = precioDolarValue * 37;

      // Actualiza el valor del precio en córdobas
      preciosCordoba[index].innerText = `C$ ${precioCordobaValue.toFixed(2)}`;
    }
  });
}