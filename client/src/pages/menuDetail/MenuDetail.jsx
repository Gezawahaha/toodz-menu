import React from 'react'
import { useLocation } from 'react-router-dom';
import CardMenuLg from '../../components/specific/moleculs/carMenuLg/CardMenuLg'
import './menudetail.scss'



const MenuDetail = () => {
    const location = useLocation();
    //console.log(Menu);

    return (
        <div className="menutdetail">
            <CardMenuLg 
            title={'ujang'}
            image={'img'}
            from={location.form} 
            price={'2000'} 
            // click={}, 
            // home={}, 
            desc={'ini desc nya'} />
        </div>
    )
}

export default MenuDetail
