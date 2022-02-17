import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route
}
  from 'react-router-dom';
import Welcome from './pages/Welcome';
import Planets from './pages/Planets';
import Details from './pages/Details';
import './App.css';

// props són els paràmetres d'entrada del component
function App(props) {



  return (
    <div className="App">
      {/* Part fixa de l'aplicació */}
      <Welcome></Welcome>

      {/* Part dinámica (condicionals, bucles, etc) */}
      <Planets></Planets>

      {/* Rutes */}
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/planets' element={<Planets />} />
          <Route path='/planetsDetail/:id' element={<Details />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
