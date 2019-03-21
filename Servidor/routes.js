const express = require('express');
const router = express.Router();
const {estructuraCategoria} = require('./estructuraDatos');
const {estructuraBusqueda } = require('./estructuraDatos');
const {estructuraItem} = require('./estructuraDatos');
const axios = require('axios');

//"req" (Resquest) lo que recibe el navegador,la informacion que el navegador me esta enviando
//"res" (Response) lo que envia el servidor
router.get("/", (req, res) => {

    /* "query" contendra el valor de la busqueda ingresada por el Cliente*/ 
    let query = req.query.q;
    console.log("query:",query)

    /*En caso de que la consulta por parte del cliente 
    sea Vacia("") o Undefined, se mostrara un mensaje de Error 404 
    */
    if(query==="" || query===undefined)
        return res.status(404).json({ error:"Los parametros no han sido enviados correctamente!"})

    /*Caso contrario se obtendra la busqueda deseada por el cliente, retornandola en un Json
        -se re alizara la busqueda de la "query", con un limite de 4 productos
    */
	let url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;

	axios.get(url).then(response => {
        res.json(estructuraBusqueda(response.data));
        //res.json(response.data);
	}).catch(error => {
		res.status(404).send(error);
	});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
    if (!id) 
        return res.status(404).json({ error: 'No id was sent. '});
        
	const productoUrl = `https://api.mercadolibre.com/items/${id}`;
	const descripcionProductoUrl = `https://api.mercadolibre.com/items/${id}/description`;
	
	axios.all([
		axios.get(productoUrl).catch(() => null),
		axios.get(descripcionProductoUrl).catch(() => null)
	]).then(axios.spread((productoRes, descripcionProductoRes) => {
		if (productoRes) {
			return axios.all([
				productoRes,
				descripcionProductoRes,
				axios.get(`https://api.mercadolibre.com/categories/${productoRes.data.category_id}`),
			]);
		} else {
			res.status(404).end();
		}
	})).then(axios.spread((productoRes, descripcionProductoRes, categoriaProductoRes) => {
		res.json(estructuraItem(
			productoRes.data,
			descripcionProductoRes && descripcionProductoRes.data,
			categoriaProductoRes && categoriaProductoRes.data,
		));
	})).catch(error => {
		res.status(404).end({ error });
	});
});

module.exports = router;

