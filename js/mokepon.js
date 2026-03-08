let ataqueJugador
let ataqueOponente

let vidasJugador = 3
let vidasOponente = 3

let mascotaJugador
let mascotaOponente

let imagenJugador
let imagenOponente

const sonidoFuego = new Audio("sonidos/fuego.mp3")
const sonidoAgua = new Audio("sonidos/agua.mp3")
const sonidoTierra = new Audio("sonidos/tierra.mp3")

function iniciarJuego(){

document.getElementById("seleccionar-ataque").style.display = "none"
document.getElementById("reiniciar").style.display = "none"

document.getElementById("boton-mascota").addEventListener("click", seleccionarMascotaJugador)

document.getElementById("boton-fuego").addEventListener("click", ataqueFuego)
document.getElementById("boton-agua").addEventListener("click", ataqueAgua)
document.getElementById("boton-tierra").addEventListener("click", ataqueTierra)

document.getElementById("boton-regresar").addEventListener("click", regresarMascotas)

document.getElementById("boton-reiniciar").addEventListener("click", reiniciarJuego)

}

function regresarMascotas(){

document.getElementById("seleccionar-ataque").style.display = "none"
document.getElementById("seleccionar-mascota").style.display = "flex"

}

function seleccionarMascotaJugador(){

let sectionMascota = document.getElementById("seleccionar-mascota")
sectionMascota.style.display = "none"

let sectionAtaque = document.getElementById("seleccionar-ataque")
sectionAtaque.style.display = "flex"

let inputMarydoge = document.getElementById("Marydoge")
let inputMarypepo = document.getElementById("Marypepo")
let inputMarygueya = document.getElementById("Marygueya")

if(inputMarydoge.checked){
mascotaJugador = "Marydoge"
imagenJugador = "mascotas/Marydoge.png"
}
else if(inputMarypepo.checked){
mascotaJugador = "Marypepo"
imagenJugador = "mascotas/Marypepo.png"
}
else if(inputMarygueya.checked){
mascotaJugador = "Marygueya"
imagenJugador = "mascotas/Marygueya.png"
}
else{
alert("Selecciona una mascota")
return
}

document.getElementById("img-jugador").src = imagenJugador

let mensajes = document.getElementById("mensajes")
mensajes.innerHTML = `<p>Has seleccionado <b>${mascotaJugador}</b></p>`

seleccionarMascotaOponente()

}

function seleccionarMascotaOponente(){

let mascotaAleatoria

do{

mascotaAleatoria = aleatorio(1,3)

}while(
(mascotaAleatoria == 1 && mascotaJugador == "Marydoge") ||
(mascotaAleatoria == 2 && mascotaJugador == "Marypepo") ||
(mascotaAleatoria == 3 && mascotaJugador == "Marygueya")
)

if(mascotaAleatoria == 1){
mascotaOponente = "Marydoge"
imagenOponente = "mascotas/Marydoge.png"
}
else if(mascotaAleatoria == 2){
mascotaOponente = "Marypepo"
imagenOponente = "mascotas/Marypepo.png"
}
else{
mascotaOponente = "Marygueya"
imagenOponente = "mascotas/Marygueya.png"
}

document.getElementById("img-oponente").src = imagenOponente

let mensajes = document.getElementById("mensajes")
mensajes.innerHTML += `<p>Tu oponente eligió <b>${mascotaOponente}</b></p>`

actualizarCorazones()

}

function ataqueFuego(){

ataqueJugador = "FUEGO"

sonidoFuego.currentTime = 0
sonidoFuego.play()

setTimeout(()=>{
sonidoFuego.pause()
},900)

ataqueAleatorioOponente()

}

function ataqueAgua(){

ataqueJugador = "AGUA"

sonidoAgua.currentTime = 0
sonidoAgua.play()

setTimeout(()=>{
sonidoAgua.pause()
},900)

ataqueAleatorioOponente()

}

function ataqueTierra(){

ataqueJugador = "TIERRA"

sonidoTierra.currentTime = 0
sonidoTierra.play()

setTimeout(()=>{
sonidoTierra.pause()
},900)

ataqueAleatorioOponente()

}

function ataqueAleatorioOponente(){

let ataqueAleatorio = aleatorio(1,3)

if(ataqueAleatorio == 1){
ataqueOponente = "FUEGO"
}
else if(ataqueAleatorio == 2){
ataqueOponente = "AGUA"
}
else{
ataqueOponente = "TIERRA"
}

combate()

}

function combate(){

if(ataqueJugador == ataqueOponente){

crearMensaje("EMPATE")

}
else if(ataqueJugador == "FUEGO" && ataqueOponente == "TIERRA"){

crearMensaje("GANASTE")
vidasOponente--

}
else if(ataqueJugador == "AGUA" && ataqueOponente == "FUEGO"){

crearMensaje("GANASTE")
vidasOponente--

}
else if(ataqueJugador == "TIERRA" && ataqueOponente == "AGUA"){

crearMensaje("GANASTE")
vidasOponente--

}
else{

crearMensaje("PERDISTE")
vidasJugador--

}

actualizarCorazones()
revisarVidas()

}

function actualizarCorazones(){

let corazonesJugador = ""
let corazonesOponente = ""

for(let i = 0; i < vidasJugador; i++){
corazonesJugador += "❤️"
}

for(let i = 0; i < vidasOponente; i++){
corazonesOponente += "❤️"
}

if(vidasJugador <= 0){
corazonesJugador = "💀"
}

if(vidasOponente <= 0){
corazonesOponente = "💀"
}

document.getElementById("vidas-jugador").innerHTML = corazonesJugador
document.getElementById("vidas-oponente").innerHTML = corazonesOponente

}

function revisarVidas(){

if(vidasOponente == 0){

crearMensajeFinal("🏆 FELICIDADES GANASTE, MARY CORTÉS TE DA LAS GRACIAS POR JUGAR SU PRIMER JUEGO")
lanzarConfeti()

}
else if(vidasJugador == 0){

crearMensajeFinal("💀 LO SIENTO PERDISTE, PERO NO TE DESANIMES SIGUE INTENTANDO")
caritasTristes()

}

}

function crearMensaje(resultado){

let mensajes = document.getElementById("mensajes")

let iconoJugador = ""
let iconoOponente = ""

if(ataqueJugador == "FUEGO"){iconoJugador="🔥"}
if(ataqueJugador == "AGUA"){iconoJugador="💧"}
if(ataqueJugador == "TIERRA"){iconoJugador="🌱"}

if(ataqueOponente == "FUEGO"){iconoOponente="🔥"}
if(ataqueOponente == "AGUA"){iconoOponente="💧"}
if(ataqueOponente == "TIERRA"){iconoOponente="🌱"}

let parrafo = document.createElement("p")

parrafo.innerHTML =
`Tu mascota atacó con ${iconoJugador} - la mascota del enemigo atacó con ${iconoOponente} → ${resultado}`

mensajes.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal){

let mensajes = document.getElementById("mensajes")

let parrafo = document.createElement("p")
parrafo.innerHTML = resultadoFinal

mensajes.appendChild(parrafo)

document.getElementById("boton-fuego").disabled = true
document.getElementById("boton-agua").disabled = true
document.getElementById("boton-tierra").disabled = true

document.getElementById("reiniciar").style.display = "block"

}

function lanzarConfeti(){

for(let i=0;i<120;i++){

let confeti=document.createElement("div")

confeti.innerHTML="🎉"

confeti.style.position="fixed"
confeti.style.left=Math.random()*100+"vw"
confeti.style.top=Math.random()*100+"vh"

confeti.style.fontSize="30px"

document.body.appendChild(confeti)

setTimeout(()=>{
confeti.remove()
},3000)

}

}

function caritasTristes(){

for(let i=0;i<80;i++){

let cara=document.createElement("div")

cara.innerHTML="😢"

cara.style.position="fixed"
cara.style.left=Math.random()*100+"vw"
cara.style.top=Math.random()*100+"vh"

cara.style.fontSize="30px"

document.body.appendChild(cara)

setTimeout(()=>{
cara.remove()
},3000)

}

}

function reiniciarJuego(){
location.reload()
}

function aleatorio(min,max){
return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarJuego)