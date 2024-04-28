/*SALUDO DE ENTRADA*/
Swal.fire({
    icon: "success",
    title: "RK Store",
    text: "¡BIENVENIDO A NUESTRO CATALOGO WEB!",
  });

/*CODIGO DE CONVERSIÓN DE DOLAR*/
// Obtiene los elementos HTML necesarios
const preciosDolar = document.querySelectorAll('.product-price-dolar');
const preciosCordoba = document.querySelectorAll('.product-price-cordoba');

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

/* CODIGO PARA FILTRAR POR ESTADOS */
// Obtiene el elemento select y el botón de búsqueda
const estadoSelect = document.getElementById('estadoP');
const btnSearch = document.getElementById('btnSearchEstado');

// Agrega un evento de escucha al botón de búsqueda
btnSearch.addEventListener('click', () => {
  // Obtiene el valor del select
  const estadoSeleccionado = estadoSelect.value;

  // Obtiene todos los elementos .product
  const products = document.querySelectorAll('.product');

  // Filtra los elementos .product que tengan el estado seleccionado
  let productosVisibles = 0;
  products.forEach((product) => {
    const productStatus = product.querySelector('.product-status').innerText;

    if (productStatus === estadoSeleccionado) {
      product.style.display = 'block';
      productosVisibles++;
    } else {
      product.style.display = 'none';
    }
  });

  // Verifica si hay productos visibles
  if (productosVisibles === 0) {
    // Muestra el mensaje de SweetAlert
    Swal.fire({
      icon: 'info',
      title: 'No se encontraron productos',
      text: `No hay productos con el estado "${estadoSeleccionado}"`,
    });

    // Vuelve a mostrar todos los productos
    products.forEach((product) => {
      product.style.display = 'block';
    });
  }
});

// Ejecuta el código después de que se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Agrega el evento de escucha al botón de búsqueda
  btnSearch.addEventListener('click', () => {
    // Obtiene el valor del select
    const estadoSeleccionado = estadoSelect.value;

    // Obtiene todos los elementos .product
    const products = document.querySelectorAll('.product');

    // Filtra los elementos .product que tengan el estado seleccionado
    let productosVisibles = 0;
    products.forEach((product) => {
      const productStatus = product.querySelector('.product-status').innerText;

      if (productStatus === estadoSeleccionado) {
        product.style.display = 'block';
        productosVisibles++;
      } else {
        product.style.display = 'none';
      }
    });

    // Verifica si hay productos visibles
    if (productosVisibles === 0) {
      // Muestra el mensaje de SweetAlert
      Swal.fire({
        icon: 'info',
        title: 'No se encontraron productos',
        text: `No hay productos con el estado "${estadoSeleccionado}"`,
      });

      // Vuelve a mostrar todos los productos
      products.forEach((product) => {
        product.style.display = 'block';
      });
    }
  });
});
