import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Planets from './pages/Planets';
import Details from './pages/Details';
import './App.css';

// props són els paràmetres d'entrada del component
function App(props) {
  return (
    <div className="App">
      <p> (This is App.js) </p>
      <hr></hr>

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
