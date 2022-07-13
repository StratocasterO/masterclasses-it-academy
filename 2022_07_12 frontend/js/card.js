// seleccionem el contenidor
let cont = document.querySelector(".cont")

// afegir un gatete
let gatet = document.querySelector("#cat")

gatet.addEventListener("click", () => {
    let randomSize = [Math.floor(Math.random() * 150) + 50, Math.floor(Math.random() * 150) + 50]
    
    let source = `http://placekitten.com/${randomSize[0]}/${randomSize[1]}`

    cont.innerHTML += `
    <div class="card">
        <img src="${source}" alt="">
    
        <h3>Perferendis, libero!</h3>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo maxime, illo nostrum similique ex repudiandae nemo excepturi?</p>
    
        <a href="http://placekitten.com/"> Click me! </a>
    </div>
    `
})

// afegir una frase dels simpson
let simpson = document.querySelector("#simpson")

simpson.addEventListener("click", () => {
    // fa una petició GET a la URL
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(res => res.json())
    .then(res => {
        res = res[0];

        name = res.character
        img = res.image
        quote = res.quote

        cont.innerHTML += `
        <div class="card">
            <img src="${img}" alt="">
        
            <h3>${name}</h3>
        
            <p>${quote}</p>
        
            <a href="https://thesimpsonsquoteapi.glitch.me/"> Click me! </a>
        </div>
        `
    })
})

// per fer una petició POST
async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });