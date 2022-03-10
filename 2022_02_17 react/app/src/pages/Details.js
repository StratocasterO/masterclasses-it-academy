import React, {useEffect, useState} from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function Welcome() { 
  
  // TODO take id param from route
  const { id } = useParams();

  return (
    <>
      <p> Mira els detalls del planeta! 😀</p>
      <p> (This is details component) </p>

      {/* TODO  render details of the planet */}
      
      <Link to="/">
          Veure la llista de planetes
      </Link> 
    </>
  );
}

export default Welcome;
