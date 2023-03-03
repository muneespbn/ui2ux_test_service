var Product = require('./schemas/product_schema');






async function getAllProductsRepo() {
	return Product.find()
	
}

async function getTopRated(){
	return Product.aggregate([
		{$sort: {
			ratings : 1
		}},{$limit:5}
	]).exec()
}








async function getRandomProductsRepo() {
	return Product.aggregate([
		
		{
			$sample: {
				size: 5,
			},
		},
		
		
	])
		.exec()
		
}


module.exports = {

	getAllProductsRepo,

	getRandomProductsRepo,
	
	getTopRated
};
