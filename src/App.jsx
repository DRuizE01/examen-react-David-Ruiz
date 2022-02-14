import React from 'react';
import Menu from './components/Menu'
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Enunciado from './components/nunciado';
import { PaginasApp } from './data/PaginasApp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Menu/>
      {PaginasApp.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
    </div>
  );
}

export default App;
