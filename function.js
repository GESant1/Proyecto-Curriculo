
// boton para menu principal

let menu = document.getElementById("opciones_btn")
menu.addEventListener('mouseover',mostrarMenu);
let menuOculto = document.getElementById("opciones")
function mostrarMenu(){
        menuOculto.style.display="block";
}

menu.addEventListener('mouseout',ocultarMenu)
function ocultarMenu(){
    setTimeout(()=>{
        menuOculto.style.display="none"
    },3000)
    ;
}


// botones que dirijen a links de la web

function irAPortafolio() {
    var enlacePortafolio = "https://www.behance.net/gallery/155531337/Portafolio"
    window.location.href = enlacePortafolio;
}


function irAPremios() {
    var enlacePortafolio = "https://fundasucre.wordpress.com/2015/08/21/biciclaje-en-sucre-se-impuso-en-el-i-concurso-hacedores-de-cambio/"
    window.location.href = enlacePortafolio;
}


function irALikedin() {
    var enlacePortafolio = "https://www.linkedin.com/in/gabriela-santos-2019b1113/"
    window.location.href = enlacePortafolio;
}

//Boton de informacion de contacto

function irAContacto(numeroTelefono, correo){
    console.log("Numero movil:" + numeroTelefono + "" + "Correo:" + correo);
    alert("Numero movil:" + numeroTelefono + "         " + "Correo:" + correo)
}

// Funcionalidad de los botones de mas

let delineante_btn = document.getElementById('delineante_btn');
let parrafo1 = document.getElementById('parrafo1');

delineante_btn.addEventListener('click',toggleText);

function toggleText(){

    if(parrafo1.innerHTML.length>1){
        delineante_btn.innerHTML = 'Leer mas';parrafo1.innerHTML= ""
    } else {
        delineante_btn.innerHTML = 'Leer menos';parrafo1.innerHTML= "Identificación y medición de zonas de intervención de los proyectos, diseño según parámetros del cliente y cuantificación del material necesario y de los costos asociados.";
    }
}



let voluntariado_btn = document.getElementById('voluntariado_btn');
let parrafo2 = document.getElementById('parrafo2');

voluntariado_btn.addEventListener('click',toggleTextvoluntariado);

function toggleTextvoluntariado() {
    
    if(parrafo2.innerHTML.length>1){
        voluntariado_btn.innerHTML = 'Leer mas'; parrafo2.innerHTML= ""
    } else {
        voluntariado_btn.innerHTML = 'Leer menos'; parrafo2.innerHTML= "Elaboración, coordinación y seguimiento de proyectos digitales para jóvenes universitarios. Colaboración en la gestión de las RRSS y levantamiento de finanzas.";
    }
}

let practica_btn = document.getElementById('practica_btn');
let parrafo3 = document.getElementById('parrafo3');

practica_btn.addEventListener('click',toggleTextpractica);

function toggleTextpractica() {

    if(parrafo3.innerHTML.length>1){
        practica_btn.innerHTML = 'Leer mas'; parrafo3.innerHTML= ""
    } else {
        practica_btn.innerHTML = 'Leer menos'; parrafo3.innerHTML= "Colaboración en Proyectos de Desarrollo Urbano Local en Ciudades de Venezuela, aplicación de diagnostico, elaboración de planos de estudio y propuestas para la solución de problemas en los sectores.";
    }
}
