const express = require('express');
const app = express();
const PORT = 3000;

// permet accedir a arxius estàtics
app.use(express.static('public'));

// crea una pantalla d'inici al home del server
app.get('/', (req, res) => {
    res.send(`
    <h3>Des d'aquest servidor pots accedir a les pàgines creades a la masterclass:</h3>

    <ul>
        <li><a href="http://localhost:3000/html/index.html">Primera pàgina de proves d'HTML</a></li>
        <li><a href="http://localhost:3000/html/form.html">Pàgina amb tipus de inputs per formularis</a></li>
        <li><a href="http://localhost:3000/html/web.html">Maquetació d'un web</a></li>
        <li><a href="http://localhost:3000/html/card.html">Maquetació de targetes amb request a una API</a></li>
    </ul>
    `);
});

// inicia el server
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));