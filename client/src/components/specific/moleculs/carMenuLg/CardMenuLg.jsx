//import { ButtonBase } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Link, Redirect, useLocation } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import {  useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actionCreator from '../../../../redux'
//import { foodimg} from '../../../../assets'
import './cardMenuLg.scss'


const CardMenuLg = ({title="Menu Makanan Edan", image, from,price='30000', data, click, home, desc}) => {
    //const state = useSelector((state) => state)
    //const additem = useDispatch({type: 'PLUS_CART'})
    //console.log(state)

    //const dispatch = useDispatch()
    //const { counterPlus, counterMin} = bindActionCreators(actionCreator, dispatch);
    const location = useLocation();
    const [menu, setMenu] = useState(location.menu);
    console.log(menu);

//     useEffect(() => {
//          if(menu === undefined ){
// <Redirect push to="/menu" />
//          }
//     }, [])
    return (

        <div className="cardmenulg">
            <Link to={`/${from}`} className="btn-back" style={{textDecoration: 'none', color: 'black'}}>
                
                <ArrowBackIcon className="back"/>
                <span>
                <h1 >Back</h1>
                </span>
                
            </Link>
            <div className="container-cardmenuLG">
            <Link to={{pathname:"/menudetail/" +data}}>
            <div className="img-cover" >
                    <img className="img-cardmenu" src={menu.pic} alt="foodimg"/>
                </div>
            </Link>
            
            
            {home ? 
            ''
            : 
            <div className="price-checkout">
                <h3 className="title-menu">{menu.menutitle}</h3>
                <p >{desc}</p>
                <NumberFormat 
                    className="price"
                    value={price}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="Rp "
                />
                {/* <ButtonBase className="checkout" onClick={ click} >add item</ButtonBase>  */}
            </div>}
        </div>
        </div>
    )
}



export default CardMenuLg
