import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Planets from './Planets'

function Welcome() { 

  return (
    <>
      {/* Part fixa de l'aplicació */}
      <p> La app està funcionant! 😀</p>
      <p> (This is Welcome component) </p>
      <hr></hr>
      
      {/* Part dinámica (condicionals, bucles, etc) */}
      <Planets></Planets>

      <Link to="/">
          Veure la llista de planetes
      </Link>
    </>
  );
}

export default Welcome;
