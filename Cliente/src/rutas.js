import React from 'react';
import {Route,Switch} from 'react-router-dom'
//Componentes
import coleccionProductos from './Componentes/coleccionProductos';
import detalleProducto from './Componentes/detalleProducto';
import ErrorNotFound from './Componentes/ErrorNotFound';

const AppRoutes = ()=>
    
        <Switch>
            <Route path="/" exact/>
            <Route path="/items/:id" component={detalleProducto}/>
            <Route path="/items/" component={coleccionProductos} exact/>
            <Route component={ErrorNotFound}/>
        </Switch>

export default AppRoutes; 