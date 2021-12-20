//import { ButtonBase } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'
// import {  useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actionCreator from '../../../../redux'
//import { foodimg} from '../../../../assets'
import './cardMenu.scss'


const CardMenu = ({title, image, price, data, id, click, home, rank , from}) => {
    //const state = useSelector((state) => state)
    //const additem = useDispatch({type: 'PLUS_CART'})
    //console.log(state)

    //const dispatch = useDispatch()
    //const { counterPlus, counterMin} = bindActionCreators(actionCreator, dispatch);
    
//console.log(id)
    return (
        <div className="container-cardmenu">
            { rank ? <p>{rank}</p>:''}
            <Link to={{pathname:"/menudetail/", menu: data, from: from}}>
                <div className="img-cover" >
                    <img className="img-cardmenu" src={image} alt="foodimg"/>
                </div>
            </Link>
            
            <p className="title-menu">{title}</p>
            {home ? 
            ''
            : 
            <div className="price-checkout">
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
    )
}



export default CardMenu
