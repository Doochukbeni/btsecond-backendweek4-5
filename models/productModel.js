const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        
        dateCreated: {
            type: Date,
            required: true,
            default:Date.now
        }
    }
)

const ProductModel = mongoose.model('Products', ProductSchema);

module.exports = ProductModel;


