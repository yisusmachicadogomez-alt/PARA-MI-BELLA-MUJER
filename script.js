const inicio = new Date("2026-05-08T00:00:00");

function actualizar(){

const hoy=new Date();

const dias=Math.floor((hoy-inicio)/(1000*60*60*24));

document.getElementById("contador").innerHTML=

`❤️ Llevamos <b>${dias}</b> días juntos ❤️`;

}

actualizar();

setInterval(actualizar,1000);

const estrellas=document.getElementById("estrellas");

const corazones=document.getElementById("corazones");

for(let i=0;i<300;i++){

const estrella=document.createElement("div");

estrella.className="estrella";

estrella.style.left=Math.random()*100+"vw";

estrella.style.top=Math.random()*100+"vh";

estrella.style.animationDuration=(2+Math.random()*5)+"s";

estrella.style.animationDelay=Math.random()*5+"s";

estrellas.appendChild(estrella);

}

const fotos=[

"foto1.jpg",

"foto2.jpg",

"foto3.jpg",

"foto4.jpg",

"foto5.jpg",

"foto6.jpg",

"foto7.jpg"

];

const mensajes=[

"Siempre recordaré el primer día que te besé esos labios tan dulces... ❤️",

"Tu eres la azúcar que endulza todos mis días bb 🍬",

"Sol solecito dame de tu brillo, no soy romántico... solo pasa me contigo ☀️",

"Te dedico la noche y las estrellas... 🌙✨",

"Era broma XD 😂",

"Tu eres un sol que de amor me quema... ❤️",

"Si no hubieras llegado a mi vida esta seguiria vacia🌌 "

];

let actual=0;

const boton=document.getElementById("boton");

const escena=document.getElementById("escena");

const foto=document.getElementById("foto");

const mensaje=document.getElementById("mensaje");

const musica=document.getElementById("musica");

const estrella=document.getElementById("estrellaFugaz");

function lanzarEstrella(){

estrella.style.display="block";

estrella.style.left=(70+Math.random()*20)+"vw";

estrella.style.top=(10+Math.random()*20)+"vh";

estrella.style.animation="none";

estrella.offsetHeight;

estrella.style.animation="fugaz 1.8s linear";

setTimeout(function(){

estrella.style.display="none";

},1800);

}

function escribirTexto(texto){

    mensaje.innerHTML="";

    let i=0;

    let intervalo=setInterval(function(){

        mensaje.innerHTML+=texto.charAt(i);

        i++;

        if(i>=texto.length){

            clearInterval(intervalo);

            lanzarEstrella();

        }

    },45);

}

boton.onclick=function(){

    musica.currentTime = 0;
musica.play().catch(error => {
    console.log("No se pudo reproducir la música:", error);
});

document.getElementById("contenido").style.display="none";

escena.style.display="flex";

foto.src=fotos[0];

escribirTexto(mensajes[0]);

actual=1;

setInterval(function(){

if(actual>=fotos.length){

clearInterval(this);

escena.style.display="none";

document.getElementById("final").style.display="flex";

lluviaFinal();

for(let i=0;i<12;i++){

setTimeout(function(){

crearCorazon();

},i*250);

}

}

foto.style.opacity=0;

foto.style.transform="scale(1.15)";

mensaje.style.opacity=0;

setTimeout(function(){

foto.src=fotos[actual];

escribirTexto(mensajes[actual]);

foto.style.opacity=1;

foto.style.transform="scale(1)";

mensaje.style.opacity=1;

actual++;

},700);

},6000);

};

function crearCorazon(){

const corazon=document.createElement("div");

corazon.className="corazon";

corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";

corazon.style.bottom="-40px";

corazon.style.fontSize=(18+Math.random()*20)+"px";

corazones.appendChild(corazon);

setTimeout(function(){

corazon.remove();

},6000);

}

let velocidadCorazones=2200;

setInterval(function(){

crearCorazon();

},velocidadCorazones);

function lluviaFinal(){

for(let i=0;i<15;i++){

setTimeout(function(){

lanzarEstrella();

},i*250);

}

}

function lluviaFinal(){

for(let i=0;i<20;i++){

setTimeout(function(){

lanzarEstrella();

},i*180);

}

}

const abrirCarta=document.getElementById("abrirCarta");
const carta=document.getElementById("carta");
const cerrarCarta=document.getElementById("cerrarCarta");

abrirCarta.onclick=function(){

carta.style.display="flex";

}

cerrarCarta.onclick=function(){

carta.style.display="none";

}