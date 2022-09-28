//import { Router } from 'react-router-dom'
import React, { useEffect } from 'react'
import './App.scss'
import Routes from './routes'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setMenu } from './redux/restoSlice'

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        const getAllMenu = async () =>{
            try {
                const res = await axios.get("api/Toodzhouse/menu");
                dispatch(setMenu({menu: res.data.data}));
            } catch (err) {
                dispatch(setMenu({menu: { title: "Sate Padang", price: 20000, food_id: 1, categories: "Food", img: "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" }}));
                console.log(err);
            }
           
        };
        getAllMenu();
    }, [dispatch]);
    

    return (
        <div>
            
            <Routes/>
           
        </div>
    )
}

export default App
