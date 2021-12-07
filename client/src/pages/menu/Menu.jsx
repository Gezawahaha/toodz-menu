import React, { useState } from 'react'
import { CardMenu } from '../../components/specific'
import './menu.scss'
import Fab from '@material-ui/core/Fab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'



const fakeMenu = [
    {   "title": "Sate Padang",
        "price": "20000",
        "food_id": "1",
        "categories": "Food", 
        "img": "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
    {   "title": "Nasi Kuning Sekut",
        "price": "20000",
        "food_id": "2",
        "categories": "Food",  
        "img": "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
    {   "title": "Indomie Mantab", 
        "price": "20000",
        "food_id": "3",
        "categories": "Sides", 
        "img": "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
    {   "title": "Martabokk", 
        "price": "20000",
        "food_id": "4",
        "categories": "Dessert", 
        "img": "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
    {   "title": "Sosise",
        "price": "20000", 
        "food_id": "5",
        "categories": "Sides", 
        "img": "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
    {   "title": "Sate Padang",
        "price": "20000",
        "food_id": "6",
        "categories": "Food",  
        "img": "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
    {   "title": "Nasi Kuning Sekut",
        "price": "20000", 
        "food_id": "7",
        "categories": "Kids Meal", 
        "img": "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
    {   "title": "Indomie Mantab", 
        "price": "20000",
        "food_id": "8",
        "categories": "Sides", 
        "img": "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
    {   "title": "Martabokk2", 
        "price": "20000",
        "food_id": "9",
        "categories": "Dessert", 
        "img": "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
    {   "title": "Sosise",
        "price": "20000",
        "food_id": "10",
        "categories": "Sides",  
        "img": "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},{ "title": "Sate Padang","price": "20000", "img": "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
    {   "title": "Nasi Kuning Sekut",
        "price": "20000", 
        "food_id": "11",
        "categories": "Kids Meal",
        "img": "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
    {   "title": "Indomie Mantab", 
        "price": "20000",
        "food_id": "12",
        "categories": "Sides", 
        "img": "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
    {   "title": "Martabokk3", 
        "price": "20000",
        "food_id": "13",
        "categories": "Dessert", 
        "img": "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
    {   "title": "Sosise Tapi Salad",
        "price": "20000", 
        "food_id": "14",
        "categories": "Salad", 
        "img": "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
        {   "title": "Soup Indomie Mantab", 
        "price": "20000",
        "food_id": "12",
        "categories": "Soup", 
        "img": "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
    
];

const Menu = () => {
    //const isLoading = false;

    const [categori, setCategori] = useState('all');
    const handleChangeCategori =(e)=>{
        //console.log('data categor', e.target.value);
        setCategori(e.target.value)
    };


    return (

    
        <div className="container-menu">
            {/* <div className="menu-head">
                    <div className="filter">
                    <InputLabel className="from-title">Menu</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel id="categories">select categories</InputLabel>
                            <Select
                            name="categories"
                            id="categories"
                            onChange={handleChangeCategori}
                            value={categori}
                            >
                            <MenuItem value={'all'}>All</MenuItem>
                            <MenuItem value={'To Share'}>To Share(3-4 people)</MenuItem>
                            <MenuItem value={'Salad'}>Salad</MenuItem>
                            <MenuItem value={'Soup'}>Soup</MenuItem>
                            <MenuItem value={'Kids Meal'}>Kids Meal</MenuItem>
                            <MenuItem value={'Food'}>Main Course</MenuItem>
                            <MenuItem value={'Sides'}>Sides</MenuItem>
                            <MenuItem value={'Dessert'}>Dessert</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="search">
                        
                    </div>
            </div> */}
            <div className="wraper-menu">
            { 
                            fakeMenu.map((fakeMenu, index) => (
                                <CardMenu key={index} price={fakeMenu.price} title={fakeMenu.title} image={fakeMenu.img}/>
                            ))
                        }
                {   categori !== 'all'
                    ?
                    <div >
                        {console.log("DATA :",fakeMenu)}
                        {/* { 
                            fakeMenu.map((fakeMenu, index) => (
                                console.log("DATA :",fakeMenu[index].categories)
                                ?
                                <CardMenu key={index} price={fakeMenu.price} title={fakeMenu.title} image={fakeMenu.img}/>
                                :
                                ''
                            ))
                        } */}
                    </div>
                    :
                    <>
                        {/* { 
                            fakeMenu.map((fakeMenu, index) => (
                                <CardMenu key={index} price={fakeMenu.price} title={fakeMenu.title} image={fakeMenu.img}/>
                            ))
                        } */}
                    </>
                
                }
                <Fab className="fab" color="primary" aria-label="add">
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </Fab>
            </div>  
        </div>
        
    )
}

export default Menu
