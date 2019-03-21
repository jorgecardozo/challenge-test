import React, { Component } from 'react';
import logoError from '../Imagenes/errorNotFound.png';
import MetaTags from 'react-meta-tags';
class ErrorNotFound extends Component {
	constructor(props) {
        super(props);
        
	}

	render() {
		return (
			<div className="error-style">
				<MetaTags>
					<title>Error Not Found Mercado Libre</title>
					<meta 
						name="Error Not Found" 
						content="Página de Error Not Found de Mercado Libre"
					/>
				</MetaTags>
				<img
					className="error-style__logo"
					src={logoError}
					alt="Logo de MercadoLibre"
				/>
				<div>
					<h1 >Error Not Found 404</h1>
				</div><br/>
		
			</div>
		);
	}
}

export default ErrorNotFound;