//import { ButtonBase } from '@material-ui/core'
import React from 'react'
import { BtnSlide } from '../../../specific'
//import { logoRekomendasi } from '../../../../assets'
import './cardRekomU.scss'
import { Link } from 'react-router-dom'

const CardRekomU = ({tittle , to}) => {
    
    
    return (
        <div  className="boxs">
            <h3>Rekomendasi Menu Buat Kamu</h3>
            <Link to={'/menu'} ><BtnSlide title={tittle} to={`/${to}`}/></Link>
        </div>
    )
}

export default CardRekomU;
