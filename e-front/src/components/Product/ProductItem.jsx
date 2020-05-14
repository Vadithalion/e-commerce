import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './ProductItem.scss';
import { addCart } from '../../redux/actions';
const Product = ({ product }) => {

    return (
        <div className="productContainer">
            <Link className="product"
                key={product._id} to={'/product/' + product._id}>
                <img src={product.image_path} alt="" />
                <span>{product.name}</span>
                <span>{product.price}€</span>
            </Link>
            <ShoppingCartOutlined onClick={()=>addCart(product)} />
        </div>
    )
}
export default Product;