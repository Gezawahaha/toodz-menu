import React from 'react'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Footer from '../components/footerHome/Footer'
import Navbar from '../components/navbarHome/Navbar'
import AboutUs from '../pages/aboutUs/AboutUs'
import Admin from '../pages/admin/Admin'
import Home from '../pages/home/Home'
import Menu from '../pages/menu/Menu'
import MenuDetail from '../pages/menuDetail/MenuDetail'
import Rekomendasi from '../pages/rekomendasi/Rekomendasi'


const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path={'/aboutus'}>
                    <AboutUs />
                </Route>
                <Route path={'/menu'}>
                    <Menu />
                </Route>
                <Route path={'/menudetail/'}>
                        <MenuDetail />
                    </Route>
                <Route path={'/rekomendasi'}>
                    <Rekomendasi />
                </Route>
                <Route path={'/admin-toodzH'}>
                    <Admin />
                </Route>
                <Route path={'/'}>
                    <Home />
                </Route>
                
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes
