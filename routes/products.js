var express = require('express');
var productService = require('../services/product_service');


const {
	GETALLPRODUCTS,
	GETRANDOMPRODUCTS,
	GETTOPRATED,

} = require('../utils/endpoints');

const { serviceHandler } = require('../services/common_service');

const router = express.Router();

router.get(
	GETALLPRODUCTS,
	serviceHandler(productService.getAllProductsService)
);

router.get(
	GETTOPRATED,
	serviceHandler(productService.getTopRated)
);

router.get(
	GETRANDOMPRODUCTS,
	serviceHandler(productService.getRandomProductsService)
);







module.exports = router;
