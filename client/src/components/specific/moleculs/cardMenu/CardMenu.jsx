import { ButtonBase } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'
// import {  useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actionCreator from '../../../../redux'
//import { foodimg} from '../../../../assets'
import './cardMenu.scss'


const CardMenu = ({title, image, price, id, click}) => {
    //const state = useSelector((state) => state)
    //const additem = useDispatch({type: 'PLUS_CART'})
    //console.log(state)

    //const dispatch = useDispatch()
    //const { counterPlus, counterMin} = bindActionCreators(actionCreator, dispatch);
    

    return (
        <div className="container-cardmenu">
            <div className="img-cover" >
                <img className="img-cardmenu" src={image} alt="foodimg"/>
            </div>
            <p className="title-menu">{title}</p>
            {price ? 
            <div className="price-checkout">
                <NumberFormat 
                    className="price"
                    value={price}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="Rp "
                />
                <ButtonBase className="checkout" onClick={ click} >add item</ButtonBase> 
            </div>
            : ''}
        </div>
    )
}



export default CardMenu
