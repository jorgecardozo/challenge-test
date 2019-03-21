import React, { Component } from 'react';
import axios from 'axios';
import MetaTags from 'react-meta-tags';

/* detalleProducto es el componente que se encarga de renderizar el detalle
*  de cada producto despues de consultar al servidor con el IdProducto
*  pasado medante los props
*/
class detalleProducto extends Component{
    constructor(props){
        super(props);
        this.state={
           idProducto: this.props.match.params.id ? this.props.match.params.id : "",
           detalleProducto: [],
           title: "",
           price: 0,
           picture: "",
           condition: "",
           sold_quantity: 0,
           description: "",
           categories: []
       };
    }
    /*ComponentDidMount se invoca inmediatamente después de montar un componente
    * y ejecuta el metodo "handleSear" el cual obtiene los datos del servidor 
    */
    componentDidMount(){
        this.handleSearch();
      }
    
    /* 
	* routeChange me cabia la ruta de busqueda hacia el NotFound Page.
	*/
    routeChangeError=()=> {
        this.props.history.push({pathname: `/NotFounError`});
    }

    /*HandleSearch se encargar de realizar la peticion al servidor con el respectivo
    *  id del producto pasado en elos props y setea los datos en el estado del componente.
    */
    handleSearch=(e)=>{
        var e=false;
        axios.get('http://localhost:4000/api/items/'+this.state.idProducto)
                .then((response) => {
                    this.setState({
                            title: response.data.item.title,
                            price: response.data.item.price,
                            picture: response.data.item.picture,
                            condition: response.data.item.condition,
                            sold_quantity: response.data.item.sold_quantity,
                            description: response.data.item.description,
                            categories: response.data.categories
                        });
            
            })
            .catch((error) => {
                console.log(error);
                this.routeChangeError();
        });
    
    }

    
    render(){
        return(
                <div>
                    <MetaTags>
                        <title>{`Detalle del Producto ${this.state.title} en Mercado Libre`}</title>
                        <meta 
                            name="Detalle del Producto" 
                            content={`Detalle del Producto relacionados con ${this.state.title} en Mercado Libre`}
                        />
			        </MetaTags>
                    <section className="categoria-style" >
						{
							this.state.categories && 
							this.state.categories.map((categoria, i) =>
								<span
									key={`${categoria}${i}`}
									className="categoria-style__item"
								>
									{categoria}
								</span>
							)
						}
				    </section>
                    <section className="detalle-producto">
                        <div className="detalle-producto__main">

                        
                            <div className="detalle-producto__image">
                            <img src={this.state.picture} alt={this.state.title} />

                            </div>
                                <section className="detalle-producto__panel">
                                        <div className="detalle-producto__subtitle">
                                            {
                                                `${this.state.condition === 'new' ? 'Nuevo' : this.state.condition === 'used' ? 'Usado' : ''} - 
                                                ${this.state.sold_quantity} ${this.state.sold_quantity === 1 ? 'vendido' : 'vendidos'}`
                                            }
                                        </div>

                                        <h1 className="detalle-producto__title">
                                            {this.state.title}
                                        </h1>

                                       
                                        <div className="detalle-producto__price">
                                            <span>${this.state.price.amount}</span>
                                        </div>

                                       
                                        <button role="button" className="detalle-producto__buy-button">
                                            Comprar
                                        </button>
                                </section>
                        </div>

                        {       
                            this.state.description &&
                            <article className="descripcion">
                                <h2 className="descripcion__title">
                                    Descripción del producto
                                </h2>
                                <p className="descripcion__body">
                                    {this.state.description}
                                </p>
                            </article>
                        }
                    </section>
                </div>
        );
    }
}

export default detalleProducto;