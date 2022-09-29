//import { Router } from 'react-router-dom'
import React, { useEffect } from 'react'
import './App.scss'
import Routes from './routes'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setMenu } from './redux/restoSlice'

const App = () => {
    const dispatch = useDispatch();
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_KEY});
    
    
    useEffect(() => {
        
        
        const getAllMenu = async () =>{
            try {
                const res = await axiosInstance.get("Toodzhouse/menu");
                console.log( res.data )
                // dispatch(setMenu({menu: res.data.data }));
            } catch (err) {
                console.log(err);
            }
           
        };
        getAllMenu();

        // async function go(){
        //     try{
        //         const res = await fetch('https://wahaha-global-api.vercel.app/api/pets')
        //         const data = await res.json()
        //         console.log(data)
        //     }catch(err){
        //       console.log(err)
        //     }
        //   }
          
        // go();          
    }, [dispatch, axiosInstance]);
    

    return (
        <div>
            
            <Routes/>
           
        </div>
    )
}

export default App
