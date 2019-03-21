import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';

/*Validar Children*/
import PropTypes from 'prop-types'; 

/*importando componentes*/

//import { Alert } from 'reactstrap';


import Navegacion from './Componentes/Navegacion';

import AppRoutes from './rutas';

class App extends Component {

  constructor() {
    super();
    
  }

  // static propTypes = {
  //   children: PropTypes.object.isRequired
  // };

  render() {
    return (
        <div className="App">

          <Navegacion />


          <div className="container">  
              <AppRoutes/>
          </div>


          
        </div>

    );
  }
}

export default App;