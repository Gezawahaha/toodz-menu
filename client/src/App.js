//import { Router } from 'react-router-dom'
import React, { useEffect } from 'react'
import './App.scss'
import Routes from './routes'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setMenu } from './redux/restoSlice'

const App = () => {
    const dispatch = useDispatch();
    const axiosInstance = axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://wahaha-global-m83ezqh16-gezawahaha.vercel.app/api/Toodzhouse/',
        headers: {'Content-Type': 'application/json'}
        });
    useEffect(() => {
        
        const getAllMenu = async () =>{
            try {
                const res = await axiosInstance.get("menu");
                dispatch(setMenu({menu: res.data.data}));
            } catch (err) {
                console.log(err);
            }
           
        };
        getAllMenu();
    }, [dispatch,axiosInstance]);
    

    return (
        <div>
            
            <Routes/>
           
        </div>
    )
}

export default App
