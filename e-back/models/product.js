import mongoose from 'mongoose';
const ObjectId = mongoose.SchemaTypes.ObjectId
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    images: [String],
    categories: [ObjectId]
});
const Product = mongoose.model('Product', ProductSchema);
export default Product;