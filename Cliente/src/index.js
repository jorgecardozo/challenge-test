import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './sass/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router} from 'react-router-dom';
/*importando bootstrap*/
//import 'bootstrap/dist/css/bootstrap.min.css';
//Rutas
//import AppRoutes from './rutas';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>   
        <App/> 
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
