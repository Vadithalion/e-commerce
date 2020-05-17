const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({
    status: String,
    deliveryDate: Date,
    userId: ObjectId,
    products: [{
        type: ObjectId,
        ref: 'Product'
    }]
}, {
    timestamps: true
});
const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;