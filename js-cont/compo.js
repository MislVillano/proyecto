
let btnBolita =document.querySelector('.contenedorchatbot');

btnBolita.addEventListener('click', aparece);

function aparece(){
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style','display:block');
    //alert('Aparece el cuadro de chat');
}

//seleccion del boton cerrar

let btncerrar = document.querySelector('.btncerrar');

btncerrar.addEventListener('click', desaparecer);

function desaparecer(){
    let cuadrochatbot = document.querySelector('.cuadrochatbot');
    cuadrochatbot.setAttribute('style','display:none');
}

//enter para mandar escribir
let escrituraInput = document.querySelector('.mensajes');
escrituraInput.addEventListener('keyup', tecleado);

function tecleado( event ){
    if( event.key === "Enter")
        agregarTexto();
}




//SELECCIONAR EL BOTON ENVIAR
let btnEnviar = document.querySelector('.btnEviar');
btnEnviar.addEventListener('click', agregarTexto);

function agregarTexto(){
    //seleccionar la caja de texto
    let cajaMensajes = document.querySelector('.mensajes');

    //obtenemos el texto de la caja
    let textoPregunta = cajaMensajes.value;

    //borrar el texto del input
    cajaMensajes.value = "";

    //seleccionamos el chat
    let contenedorChat = document.querySelector('.chatchatbot');

    //creamos un elemento parrafo
    let parrafoNuevo = document.createElement('p');

    //agregamos una clase a P
    parrafoNuevo.className = 'mensajeUsuario';

    //añadimos el texto al parrafo nuevo
    parrafoNuevo.innerHTML = "Tu:"+ textoPregunta;

    //añadimos el parrafo nuevo al chat
    contenedorChat.appendChild(parrafoNuevo);

    //IA
    let parrafoIA = document.createElement('p');
    parrafoIA.innerHTML = "IA: "+ IA(textoPregunta);
    contenedorChat.appendChild(parrafoIA);

    contenedorChat.scrollTop = contenedorChat.scrollHeight; //linea de codigo para que se deslice automaticamente hacia abajo
}

function IA( pregunta ){

   
    
     //pregunta 1
     let nombrePregunta = /(tu nombre)*nombre/gi; //cual es tu nombre?
     if (nombrePregunta.test(pregunta) ){
         return "CHATBOT";
     }

      //pregunta 2
    let edadPregunta = /años[a-z\s]*tienes/gi; // cuantos años tienes?
    if( edadPregunta.test(pregunta) ){
        return "Tengo 15 dias de haber sido creado";
    }

     //pregunta 3
     let dondePregunta = /(tu nombre)*eres/gi; // de donde eres?
     if (dondePregunta.test(pregunta) ){
         return "Del internet, para servirte";
     }

     //pregunta 4
     let holaPregunta = /(tu nombre)*como estas/gi; // Hola como estas?
     if (holaPregunta.test(pregunta) ){
         return "hola, muy bien ";
     }

     //pregunta 5
     let proporcionarPregunta = /(tu nombre)*informacion/gi; // me puedes proporcionar informacion?
     if (proporcionarPregunta.test(pregunta) ){
         return "somos una empresa, proovedores de intenet que te hacemos llegar el internet hasta las zonas mas rurales y tambien manejamos venta de equipos para wisp";
     }



    return "Lo siento no entendi tu pregunta";
}