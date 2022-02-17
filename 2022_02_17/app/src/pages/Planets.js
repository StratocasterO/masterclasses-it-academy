import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Planets() {

  // per actualizar la info dels planetes
  const [planets, setPlanets] = useState([]);

  // per demanar la info dels planetes de Star Wars a la API
  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then(res => res.json())
      .then(data => setPlanets(data.results)) // enviem la info al setter dels planetes
  }, [])

  const planetsToShow = planets.map(item => {
    let url = "/planetDetail/" + item.id;

    return < Link to={url} >
      <p>item.name</p>
    </Link >
  });

return (
  <>
    {planets &&
      <p>Planetas cargados: {planets.length} 🪐</p>
    }

    <p>Llista de planetes:</p>
    {planetsToShow}

    <Link to="/">
      Ves a l'inici
    </Link>
  </>
);
}

export default Planets;
