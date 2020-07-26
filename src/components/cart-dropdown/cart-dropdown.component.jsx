 
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

//import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';
import Button from '@material-ui/core/Button';


const CartDropdown = ({ cartItems, history, dispatch,toggleCartHidden }) => (

  
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button type="submit" variant="contained" color="primary"  onClick={(event) => {toggleCartHidden();history.push("/checkout")}}>Checkout</Button>
  </div>
);



const mapStateToProps=(state)=>({
  cartItems:selectCartItems(state)
})
const mapDispatchToProps=(dispatch)=>({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter((CartDropdown)));