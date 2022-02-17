import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Welcome() { 

  return (
    <>
      <p> La app està funcionant! 😀</p>
      
      <Link to="/">
          Veure la llista de planetes
      </Link>
    </>
  );
}

export default Welcome;
