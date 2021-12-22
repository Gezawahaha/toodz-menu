import { createMenuFailure, createMenuStart, createMenuSuccess, deleteMenuFailure, deleteMenuStart, deleteMenuSuccess, getMenuFailure, getMenuStart, getMenuSuccess, updateMenuFailure, updateMenuStart, updateMenuSuccess } from "./MenuActions"
import axios from "axios"


const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL});
export const getMenu = async (dispatch) =>{
    
    dispatch(getMenuStart())
    //console.log("Bearer "+JSON.parse(localStorage.getItem("user")).accessToken)
    try {
        const res = await axiosInstance.get("/menus/", {
            headers: {
                token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
            
        dispatch(getMenuSuccess(res.data))    
    } catch (err) {
        console.log(err)
        dispatch(getMenuFailure());
    }
};
//CREATE
export const createMenu = async (menu,dispatch) =>{
    
    dispatch(createMenuStart())
    try {
        //console.log("id",id)
        const res = await axiosInstance.post("/menus/add/", menu, {
            headers: {
                token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        
        dispatch(createMenuSuccess(res.data))    
    } catch (err) {
        dispatch(createMenuFailure());
    }
};
//DELETE
export const deleteMenu = async (id,dispatch) =>{
    
    dispatch(deleteMenuStart())
    try {
        //console.log("id",id)
        await axiosInstance.delete("/menus/"+id, {
            headers: {
                token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        
        dispatch(deleteMenuSuccess(id))    
    } catch (err) {
        dispatch(deleteMenuFailure());
    }
};

//UPDATE
export const updateMenu = async (id,dispatch) =>{
    
    dispatch(updateMenuStart())
    try {
        //console.log("id",id)
        await axiosInstance.put("/menus/"+id._id, {
            headers: {
                token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                data: id,
            },
            body: id
        });
        
        dispatch(updateMenuSuccess(id))    
    } catch (err) {
        dispatch(updateMenuFailure());
    }
};