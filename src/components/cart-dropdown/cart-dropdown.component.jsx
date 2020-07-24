 
import React from 'react';
//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

//import CustomButton from '../custom-button/custom-button.component';
//import CartItem from '../cart-item/cart-item.component';
//import { selectCartItems } from '../../redux/cart/cart.selectors';
//import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';
import Button from '@material-ui/core/Button';
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
     
    </div>
    <Button type="submit" variant="contained" color="primary"  onClick={(event) => history.push("/checkout")}>Checkout</Button>
  </div>
);



export default withRouter((CartDropdown));