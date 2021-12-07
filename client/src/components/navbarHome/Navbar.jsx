import React from 'react'
import './navbar.scss'
import LogoToodz from '../../assets/img/toodz-house_260.png'
import ButtonBase from '@material-ui/core/ButtonBase'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    

    useEffect(() => {
        showButton();
        
    }, [])


    //console.log(button)
    window.addEventListener('resize', showButton);
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link className="left" to={'/'}>
                    <img src={LogoToodz} className={click ? 'nav-logo active' : 'nav-logo'} alt="logo-toodzhouse" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className="right">
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to={'/'} onClick={closeMobileMenu} className="nav-links" style={{textDecoration: 'none', color: 'black'}}><span>Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/menu'} onClick={closeMobileMenu} className="nav-links" style={{textDecoration: 'none', color: 'black'}}><span>Menu</span></Link>
                        </li>
                        <li className="nav-item"> 
                            <Link to={'/aboutus'} onClick={closeMobileMenu} className="nav-links" style={{textDecoration: 'none', color: 'black'}}><span >About Us</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/rekomendasi'} onClick={closeMobileMenu} className="nav-links" style={{textDecoration: 'none', color: 'black'}}><span ><ButtonBase className="border-rekomendasi">Rekomendasi</ButtonBase></span></Link>
                        </li>
                        {button ? '':''}
                    </ul>
                </div>
            </div>
        </nav>

        
    )
}

export default Navbar
