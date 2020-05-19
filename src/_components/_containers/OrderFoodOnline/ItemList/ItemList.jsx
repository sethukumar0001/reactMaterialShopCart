import React, { useState, useEffect } from 'react';
import ItemListHtml from './ItemListHtml';
import { useSelector, useDispatch } from 'react-redux';
import { AddItemToCart } from '../../../../_redux/_actions/CartActionCreators';
import CartData from '../../Json/app';

function ItemList(props) {

    const dispatch = useDispatch()
    const addToCart = (item) => {
        dispatch(AddItemToCart(item))
    }

    const [CartArray, setCartArray] = useState([])
    const [hotelName, setHotelName] = useState([])
    useEffect(() => {
        let cart = CartData.filter((item) => {
            if (item.hotelName === sessionStorage.getItem("hotelName"))
                return item
        })
        setHotelName(cart[0].hotelName)
        setCartArray(cart[0].itemList)
    }, [])

    return (
        <div>
            <ItemListHtml
                addToCart={addToCart}
                CartArray={CartArray}
                hotelName={hotelName}
            />
        </div>
    );
}

export default ItemList;