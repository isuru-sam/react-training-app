import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item }) => (
 
  <div className='cart-item'>
    <img src={item.courseData.imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{item.courseData.course}</span>
      <span className='name'>{item.hours}hrs{item.mins}mins</span>
      
      <span className='price'>${Math.floor(item.totalmins*item.courseData.hourlyRate/60)}</span>
      
    </div>
  </div>
);

export default CartItem;