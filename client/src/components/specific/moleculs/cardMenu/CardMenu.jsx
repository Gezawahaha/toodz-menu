import { ButtonBase } from '@material-ui/core'
import React from 'react'
import NumberFormat from 'react-number-format'
//import { foodimg} from '../../../../assets'
import './cardMenu.scss'

const CardMenu = ({title, image, price}) => {
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
                <ButtonBase className="checkout">add item</ButtonBase> 
            </div>
            : ''}
        </div>
    )
}

export default CardMenu
