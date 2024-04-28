const btnValidarUser = document.getElementById('btnValidarUser');

btnValidarUser.addEventListener("click", ()=> {
    const inputUser = document.getElementById('UsuarioInp').value;
    const inputclave = document.getElementById('ClaveInp').value;

    const userAdmin = 'Reynery';
    const clave = '05011994'

    if(inputUser == userAdmin &&  inputclave == clave) {
        Swal.fire({
            title: "ESTADO LOGUEO",
            text: "Bienvenid@ " + userAdmin,
            icon: "success"
          });
          // Redirigir al usuario a otra página
          window.location = '/listadoProductos';
    }else{
        Swal.fire({
            title: "ESTADO LOGUEO",
            text: "Usuario incorrecto: " + inputUser +" no existe en nuestros registros!",
            icon: "error"
          });
    }
});