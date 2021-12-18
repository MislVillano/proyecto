

let filas = document.querySelectorAll('.fila');

filas[0].addEventListener('mouseover', function(){ cambiar('img4/7 Pecados C.jpg', '7 Pecados C') } );
filas[1].addEventListener('mouseover', function(){ cambiar('img4/inuyasha.jpg', 'Inuyasha') } );
filas[2].addEventListener('mouseover', function(){ cambiar('img4/kengan.jpg', 'Kengan') } );
filas[3].addEventListener('mouseover', function(){ cambiar('img4/naruto.jpg', 'Naruto') } );
filas[4].addEventListener('mouseover', function(){ cambiar('img4/one piece.jpg', 'One piece') } );

function cambiar(ruta, titulo){
    let contenedorImg = document.querySelector('.contenedorImagen img');
    contenedorImg.src = ruta;

    let contenedorTexto = document.querySelector('.contenedorImagen h4');
    contenedorTexto.textContent = titulo;
}


let btnAgregar = document.querySelector('.btnAgregar');
let btnEliminar = document.querySelector('.btnEliminar');

btnAgregar.addEventListener('click', agregar);
btnEliminar.addEventListener('click', eliminar);

function agregar(){
    let pelicula = prompt('Que anime te gusta?');
    let calificacion = prompt('Cual es tu calificacion?');
    let ruta = prompt('URL de la imagen');
    let top = 1;

    let filaNueva = document.createElement('tr');
    filaNueva.innerHTML = `<td>${top}</td> <td>${pelicula}</td> <td>${calificacion}</td>`;

    let tabla = document.querySelector('.tabla tbody');
    tabla.appendChild (filaNueva);

    filaNueva.addEventListener('mouseover', function(){ cambiar( ruta, pelicula) } );

}

function eliminar(){
    let tabla = document.querySelector('.tabla tbody');
    let ultimaFila = tabla.lastChild;
    ultimaFila.remove();
}