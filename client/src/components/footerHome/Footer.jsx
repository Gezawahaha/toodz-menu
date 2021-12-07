import React from 'react'
import './footer.scss'
import LogoToodz from '../../assets/img/toodz-house_260.png'
import { CardLocation } from '../specific'
import { ICgmail, ICinstagram, ICwhatsapp } from '../../assets'
//import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wraper-footer">
                <div className="left">
                    <img src={LogoToodz} alt="logo-toodzhouse" />
                </div>
                <div className="right">
                    
                        <h3 className="title" >Opening Hours</h3>
                        <p>All Day 09.00 AM - 09.00 PM</p>
                        <p>Last Order 08.30 PM</p>
                        <p>Dine-in Only 45 Minute</p>
                    
                </div>
                <div className="right">
                    <h3 className="title">Location</h3>
                    <div className="location-list">
                        <CardLocation 
                            title="Toodz House Cipete" 
                            addres="Jl. Cipete Raya No.79, RW.4, Cipete Sel., Kec. Cilandak, 
                            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410"
                        />
                        <CardLocation 
                            title="Toodz House Karang Tengah" 
                            addres="Jl. Karang Tengah Raya, Lb. Bulus, Kec. Cilandak, 
                            Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440"
                        />
                        <CardLocation 
                            title="Toodz House Kemanggisan" 
                            addres="Jl. Anggrek Neli Murni, RT.15/RW.1, Kemanggisan, 
                            Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480"
                        />
                    </div>
                </div>
                <div className="right">
                    <h3 className="title">Social</h3>
                    <div className="social-list">
                        <a href={'https://www.instagram.com/toodzhouse/'}><img src={ICinstagram} alt="logo ig" /></a>
                        <img src={ICgmail} alt="icon gmail" />
                        <img src={ICwhatsapp} alt="icon whatsapp" />
                    </div>
                </div>
                
                
            </div>
            
            <div className="copyright">
                <span>All Rights Reserved Toodz House by Geza Mahardika 2021</span>
            </div>
        </footer>
    )
}

export default Footer
