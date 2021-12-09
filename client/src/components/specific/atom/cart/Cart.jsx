import React from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'

import './cart.scss'
import { useSelector } from 'react-redux'
import { selectCartCount, selectCartItem } from '../../../../redux/cartSlice'
import {  selectRestoMenu } from '../../../../redux/restoSlice'


const Cart = () => {
    const count = useSelector(selectCartCount);
    const items  = useSelector(selectCartItem);
    const menu = useSelector(selectRestoMenu);

    //loadRestoAsync();

    const handleCartClick = (e) =>{
        e.preventDefault();
        if (count === 0 ) return console.log("cart Kosong bego"); //cek cart kosong apa tidak
        
        const total = Object.values(items).reduce((acc, item) =>{
            const menuItem = menu[item.food_id];
            if( menuItem === undefined) return acc ;
            //console.log(`Food Name ${menuItem.name}`);
               
            return acc + menuItem.price * item.qty;
        });
        console.log("total: ", total )
    };

    //setTimeout(() =>{console.log(menu)},2000)
    return (
        <Fab className="fab" color="primary" aria-label="add" onClick={handleCartClick}>
            <Badge badgeContent={count} color="error">
                <ShoppingCartIcon />
            </Badge>
        </Fab>
    )
}

export default Cart