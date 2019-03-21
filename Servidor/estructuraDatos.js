
/*	Creamos una estructura que respete los JSON propuestos por el Challenge
*	descartanto la informacion que no es relevante para nuestra api
*/

const author = {
	name: 'Jorge',
	lastName: 'Cardozo'
};

function infoProducto2(item){
	/* separamos la parte entera del decimal */
	let parteEntera = Math.floor(item.price);
	let parteDecimal = item.price - parteEntera;

	return {
		id: item.id,
		title: item.title,
		price: {
			currency: item.currency_id,
			amount: parteEntera,
			decimals: parteDecimal,
		},
		condition: item.condition,
		free_shipping: item.shipping.free_shipping,
	}
}

const estructuraBusqueda = data => {

	const categoryFilter = data.filters.find(filter => filter.id === 'category');
	const categoryValues = categoryFilter ? categoryFilter.values : [];
	const pathFromRoot = (categoryValues && categoryValues[0]) ? categoryValues[0].path_from_root : [];
	const categories = pathFromRoot.map(category => category.name);

	const items = data.results.map(item => {
		return {
			...infoProducto2(item),
			picture: item.thumbnail,
			location: item.address.state_name,	
		}
	});

	return { author, categories, items };
}

const estructuraCategoria = data => data.path_from_root.map(category => category.name);

const estructuraItem = (data, description = {}, categories = {}) => {
	return {
		author,
		categories: categories ? estructuraCategoria(categories) : null,
		item: {
			...infoProducto2(data),
			picture: data.pictures.length ? data.pictures[0].url : data.thumbnail,
			sold_quantity: data.sold_quantity,
			description: description ? description.plain_text : null,
			category_id: data.category_id,
		}
		
	}
}

module.exports = { estructuraCategoria,estructuraBusqueda,estructuraItem }