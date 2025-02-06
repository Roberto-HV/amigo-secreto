// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let nombreEntrante = document.getElementById("amigo");

function agregarAmigo(){
    let nuevoNombre = nombreEntrante.value;
    if(nuevoNombre == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(nuevoNombre);
        document.querySelector('#amigo').value='';
        actualizarListaAmigos(amigos);
    }
    return;
}

function sortearAmigo(){
    if(amigos.length==0){
        alert("No se han agregado amigos a la lista");
    }else{
        let nombreGenerado = Math.floor(Math.random()*amigos.length);
        let resultado = amigos[nombreGenerado];
        asignarTextoElemento('#resultado',`${resultado}`);
    }
    return;
}

function asignarTextoElemento(etiqueta, texto){
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    return;
}

function actualizarListaAmigos(amigos) {
    const lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";
    
    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
    return;
}