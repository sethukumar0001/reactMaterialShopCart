import React,{useState} from 'react';
import CartHtml from './CartHtml';
import { useSelector, useDispatch } from 'react-redux';
import { IncreaseItemInCart, DecreaseItemInCart, RemoveItemToCart } from '../../../_redux/_actions/CartActionCreators'


function Cart(props) {

    const cartData = useSelector(state => state.CartReducer)

    const dispatch = useDispatch();

    const IncCartItem = (id) => {
        dispatch(IncreaseItemInCart(id))
    }
    const DecCartItem = (id) => {
        dispatch(DecreaseItemInCart( id))
    }
    const RemoveCartItem = (index) => {
        dispatch(RemoveItemToCart(index))
        window.location.href = "/cart"
    }

    return (
        <div>
            <CartHtml
                cartData={cartData}
                IncCartItem={IncCartItem}
                DecCartItem={DecCartItem}
                RemoveCartItem={RemoveCartItem}


            />
        </div>
    );
}

export default Cart;