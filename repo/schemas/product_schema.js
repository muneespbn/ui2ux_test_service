const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		
		productId: {
			type: String,
			required: true,
			// unique: true,
			// index: true,
			trim: true,
			uppercase: true,
		},
		productName: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		model: {
			type: String,
			required: true,
		},
		
		price: {
			type: Number,
			required: true,
		},
		images: {
			type: [String],
			required: false,
		},
			rating: Number,
	
		
		
		
	},
	{ timestamps: true }
);

// productSchema.index();

module.exports = mongoose.model('Product', productSchema, 'products');
