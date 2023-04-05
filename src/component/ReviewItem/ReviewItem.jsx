import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product, handleRemoveFromCart}) => {
    // console.log(product)
    const {img, name, price, shipping, id } = product;
    return (
        <div className='review-contaner'>
            <img src={img} alt="" />
            <div className="review-info">
                <p className='title'>{name}</p>
                <p>Price : <span className='price'>${price}</span></p>
                <p>Shipping : <span className='price'>${shipping}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)}  className='btn-delate'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;