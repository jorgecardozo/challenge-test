
import React, { Component } from 'react';
import logoFreeShipping from '../Imagenes/ic_shipping.png';

/* Producto es el componente que se encarga de renderizar la informacion
* de cada produco, la informacion de dicho producto se las pasan mediante los props
*/
class Producto extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li className="producto-style">         
                    <a href="#" className="producto-style__container">

                        
                        <img width={180} height={180} src={this.props.picture} alt={this.props.title} className="producto-style__image"/>

                        <div className="producto-style__info">
                            <div className="product__first-row">

                                
                                <div className="producto-style__price">
                                    <div> $ {this.props.price.amount}</div>

                                    {
                                        this.props.free_shipping &&
                                        <img
                                            className="producto-style__shipping"
                                            src={logoFreeShipping}
                                            alt="Envío gratis"
                                        />
                                    }
                                </div>
                                <div className="producto-style__location">{this.props.location}</div>
                            </div>

                            <div className="producto-style__title">{this.props.title}</div>
                        </div>
                    </a>

                </li>
                
            </div>
        );
    }
}



export default Producto;