var productRepo = require('../repo/product_repo');








async function getTopRated(req,res){
	let productList = await productRepo.getTopRated();
	return productList;
}

async function getAllProductsService(req, _res) {
	let productList = await productRepo.getAllProductsRepo();
	return productList;

}

async function getRandomProductsService(req, _res) {
	let productList = await productRepo.getRandomProductsRepo(
		
	);
	return productList
}


module.exports = {

	getAllProductsService,

	getRandomProductsService,

	getTopRated
};
