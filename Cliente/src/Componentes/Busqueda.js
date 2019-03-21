import React, { Component } from 'react';
import logo from '../Imagenes/ic_Search.png';
import { withRouter } from 'react-router-dom';
/*
* Busqueda es el componente que renderiza el formulario de Busqueda
* para cada uno de los productos
*/
class Busqueda extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			busqueda: ''
		  };
	}
	/*
	* Cada vez que se vuelve a montar el componente, se 
	* hace foco en el input del buscador
	*/
	componentDidMount(){
		/*Para que siempre haga foco en el input*/
		this.input.focus();}
	
	/* 
	* routeChange me cabia la ruta de busqueda hacia el producto buscado
	*/
  routeChange=()=> {
		this.props.history.push({
															pathname: `/items`,
															search:`search=${this.state.busqueda}`
														});
	}
	
	/*HandleInputChanche es un metodo que recive un evento como parametro
	* por cada change en el input este actualiza el estado (setea el valor
	* de la busqueda en el estado del componente)
	*/ 
	handleInputChange=(e)=> {
    const {value, name} = e.target;
		
		this.setState(
			({[name]: value})
		);
	}
	
	/*HandleKeyPress es un metodo que se ejecuta cada vez
	* que el evento sea una tecla "Enter"
	*/ 
	handleKeyPress=(e)=>{
		if (e.key === 'Enter') {
			this.routeChange();
		}
	}

	render() {
		return (
			<div>
				<form className="cajaBusqueda" onSubmit={e => e.preventDefault()}>
					<input
						ref={input => this.input = input}
						type="text"
						name="busqueda"
						value={this.state.busqueda}
						onChange={this.handleInputChange}
						className="cajaBusqueda__input"
						placeholder="Nunca dejes de buscar"
						onKeyPress={this.handleKeyPress}
						//size="105"
					/>
					<button className="cajaBusqueda__button" onClick={this.routeChange}>
						<img src={logo} alt="Ícono de búsqueda"/>
					</button>
				</form>
			</div>
		);
	}
}	

export default withRouter(Busqueda);