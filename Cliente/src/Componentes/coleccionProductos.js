import React, { Component, Fragment } from 'react';
import axios from 'axios'
import Producto from '../Componentes/Producto'
import MetaTags from 'react-meta-tags';
import queryString from 'query-string'
import {Link} from 'react-router-dom';

/* ColeccionProductos es el componente que renderiza la lista de los "productos
*  y categoria" despues de la peticion de los datos al servidor
*/

class coleccionProductos extends Component {
	
	constructor(props) {
		super(props);
		this.state = {dataProductos: []};	 
	}
	
	getQuery=(val)=>{
		return queryString.parse(val).search;
	}

	componentDidMount(){ 
		this.handleSearch(this.getQuery(this.props.location.search));
			
	}
	
	componentDidUpdate(prevProps) {
		const busqueda = this.props.location.search;
		if (this.getQuery(prevProps.location.search) !== this.getQuery(busqueda)) {
			this.handleSearch(this.getQuery(busqueda));
		}
	}

	/* 
	* routeChangeError me cabia la ruta hacia NotFound Page
	*/
	routeChangeError=()=> {
		this.props.history.push({pathname: `/NotFoundError`});
	}

	/* handleSearh realiza la busqueda realizando 
	*  la peticion al servidor
	*/
	handleSearch=(query)=>{
		axios.get('http://localhost:4000/api/items/?q='+query)
			.then((response) => {
				this.setState({dataProductos: response.data});

			})
			.catch((error) => {
				console.log(error);
				this.routeChangeError();
	});

	
	
}

render(){
	
	return (
	<div>
		<Fragment>
			<MetaTags>
				<title>{`${this.getQuery(this.props.location.search)} Mercado Libre`}</title>
				<meta 
					name="Lista de Productos" 
					content={`Lista de productos relacionados con ${this.getQuery(this.props.location.search)} en Mercado Libre`}
				/>
			</MetaTags>
			<section className="categoria-style" >
					{
						this.state.dataProductos.categories && 
						this.state.dataProductos.categories.map((categoria, i) =>
							<span
								key={`${categoria}${i}`}
								className="categoria-style__item"
							>
								{categoria}
							</span>
						)
					}
			</section>
			<section>
				<ol className="productoLista-style">
					{
						this.state.dataProductos.items &&
						this.state.dataProductos.items.map((productos,i) => 
							<Link to={`items/${productos.id}`}>
								<Producto 
										key={`${productos}${i}`}
										id={productos.id} 
										{...productos} 
								/>
							</Link>
						)
					}
				</ol>
			</section>
		</Fragment>
		
	</div>
	);
}
}

export default coleccionProductos;