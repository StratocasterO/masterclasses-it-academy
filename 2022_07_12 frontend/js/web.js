console.log("això és un script importat al final del body");

// selecciona i mostra un element
let footer = document.querySelector("#footer")
console.log(footer);
console.log(footer.innerHTML);

// selecciona els elements del formulari
let nom = document.querySelector("#nom")
let comment = document.querySelector("#comment")
let button = document.querySelector('.inputs input[type="button"]')
let cont = document.querySelector("#comment_container")

console.log(nom, comment, button);

let commentCount = 0

// afegeix un listener al botó del formulari
button.addEventListener("click", () => {
    if (!nom.value) return window.alert("Has d'introduir un nom!")

    cont.innerHTML += `<div>
                    <p> Nom: ${nom.value} </p>
                    <p> Comentari: ${comment.value} </p>
                </div>`

    commentCount ++

    console.log(commentCount);
})

// canvia el tema
let theme = document.querySelector("#theme")
let css = document.querySelector('link[rel="stylesheet"]')

theme.addEventListener("click", () => {
    console.log("has canviat el tema!");

    if (css.href.includes("css/web.css")) css.href = "../css/web_dark.css"
    else css.href = "../css/web.css"
})

// canvi d'idioma
let lang = document.querySelector("#lang")
let texts = document.querySelectorAll(".trans")
console.log(texts);

let current = "CAT"

lang.addEventListener("click", () => {
    
    if (current == "CAT") {
        texts.forEach((el, index) => {
            el.innerHTML = copy.eng[index]
        })
        button.value = copy.eng[12]
        current = "ENG"
    } else {
        texts.forEach((el, index) => {
            el.innerHTML = copy.cat[index]
        })
        button.value = copy.cat[12]
        current = "CAT"
    }
    
    console.log("has canviat l'idioma a " + current + "!");
})

let copy = {
    cat: [
        "Aquesta pàgina és una passada",
        "Benvinguts a la nostra pagina de proves de JavaScript!",
        "Enllaç 1",
        "Enllaç 2",
        "Enllaç 3",
        "Enllaç 4",
        "Enllaç 5",
        "Nom: Prova",
        "Comentari: Això és un comentari de prova",
        "Deixa aquí el teu comentari:",
        "Nom: ",
        "Comentari: ",
        "Enviar comentari" // pendent
    ],
    eng: [
        "This page is awesome",
        "Welcome to our JavaScript test site!",
        "Link 1",
        "Link 2",
        "Link 3",
        "Link 4",
        "Link 5",
        "Name: Test",
        "Comment: This is a test comment",
        "Leave here your comment:",
        "Name: ",
        "Comment: ",
        "Send comment" // pendent
    ]
}