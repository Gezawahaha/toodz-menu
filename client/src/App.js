//import { Router } from 'react-router-dom'
import React, { useEffect } from 'react'
import './App.scss'
import Routes from './routes'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setMenu } from './redux/restoSlice'

const App = () => {
    const dispatch = useDispatch();
    const axioxInstance =axios.create({baseURL:process.env.REACT_APP_API_URL});
    useEffect(() => {
        
        const getAllMenu = async () =>{
            try {
                const res = await  axioxInstance.get("menus");
                dispatch(setMenu({menu: res.data}));
            } catch (err) {
                console.log(err);
            }
        };
        getAllMenu();
    }, [dispatch,axioxInstance]);


    return (
        <div>
            
            <Routes/>
           
        </div>
    )
}

export default App
