import React, {useEffect, useState} from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function Welcome() { 
  
  const { id } = useParams();
  return (
    <>
      <p> Mira els detalls del planeta! 😀</p>
      
      <Link to="/">
          Veure la llista de planetes
      </Link> 
    </>
  );
}

export default Welcome;
