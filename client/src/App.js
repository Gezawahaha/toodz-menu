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
                const res = await  axios.get("menus");
                dispatch(setMenu({menu: res.data}));
            } catch (err) {
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
