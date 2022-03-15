// seleccionar element de HTML
var resultat = document.querySelector("#result")
var boto = document.querySelector(`#button`) 
var boto2 = document.querySelector(`#button2`) 
var boto3 = document.querySelector(`#button3`) 
var boto4 = document.querySelector(`#button4`) 
var input = document.querySelector("#text")   
var coses = document.querySelector("#coses") 


// modificar propietat d'un element
resultat.style.color = "grey"
resultat.addEventListener("click", () => {
    resultat.style.color = "pink"
})

boto.addEventListener("click", () => {
    resultat.innerHTML = input.value // modifica el que hi ha dins l'etiqueta
    console.log(resultat);
})

boto2.addEventListener("click", () => {
    coses.innerHTML += `<p> ${input.value} </p>` // afegeix a dins l'etiqueta
})

boto4.addEventListener("click", () => {
    var nom = window.prompt("Com et dius?")

    resultat.innerHTML = nom
})

// funció que fa coses a més d'un element
boto3.addEventListener("click", () => {
    var resultats = document.querySelectorAll("#coses p")
    
    console.log(resultats);

    for (const item of resultats) {
        console.log(item);
    }

    var colors = ["red", "orange", "yellow", "green", "blue", "purple"]

    for (let index = 0; index < resultats.length; index++) {
        const element = resultats[index];
        element.style.color = colors[index%6]
    }
})

console.log(resultat);

// alerta del navegador
window.alert("OJO QUE HAN PASAO COSAS")

// agafar info d'una api
fetch("https://swapi.dev/api/people")
.then((res) => res.json())
.then((res) => {
    console.log(res.results);
    pintarPersones(res.results);
})

function pintarPersones(array) {
    for (const persona of array) {
        coses.innerHTML +=  `<p> ${persona.name} </p>`
    }
}