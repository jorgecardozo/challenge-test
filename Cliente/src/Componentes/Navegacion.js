import React from 'react';
import logo from '../Imagenes/Logo_ML.png'
import Busqueda from './Busqueda';
import MetaTags from 'react-meta-tags';
/*Navegacion es una especie de Container, que contiene al componente Busqueda*/
const Navegacion = (props) => ( 
	<nav className="navbar">
		<MetaTags>
            <title>Mercado Libre</title>
            <meta name="Navegacion" content="Contenedor del navegador principal." />
            <meta property="og:image" content={logo} />
          </MetaTags>
		<div className="container">
			<div className="row">
				<div className="navbar__container col col-md-10 offset-ml-2">
					<a className="navbar__logo" >
						<img
							width="50"
							height="40"
							src={logo}
							alt="Logo de Mercado Libre"
						/>
					</a>
					<Busqueda {...props} />
				</div>
			</div>
		</div>
	</nav>
);

export default Navegacion;