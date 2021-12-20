import React, { useEffect, useState } from 'react'
import { CardMenu, Cart } from '../../components/specific'
import './menu.scss'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { useSelector , useDispatch} from 'react-redux'
import { selectRestoMenu } from '../../redux/restoSlice'
import { addItem } from '../../redux/cartSlice'

import CircularProgress from '@material-ui/core/CircularProgress'



export const Menu = () =>{
    //const isLoading = false;
    const fakeMenu = useSelector(selectRestoMenu);
    const dispatch = useDispatch();

    
    const [isLoading, setLoading] = useState(true)
    

    const [categori, setCategori] = useState('all');
    const handleChangeCategori =(e)=>{
        //console.log('data categor', e.target.value);
        setCategori(e.target.value)
    };

    useEffect(() => {
        //const cekMenu = [fakeMenu].length
        if (fakeMenu.length === 2 ){
            setLoading(true)
        }else{
            setLoading(false)
        }
    }, [isLoading, fakeMenu])
    
    
    return (
        <div className="container-menu">
            <div className="menu-head">
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
                            <MenuItem value={'Drink'}>Drink</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="search">
                        
                    </div>
            </div>
            
            <div className="wraper-menu">
            { 
            isLoading ?
            <CircularProgress />
            :

            <div className="wraper-menu">
            
            {   categori !== 'all'
                ?
                <div className="wraper-menu" >
                    
                    { 
                        fakeMenu.map((data, index) => (
                            //console.log("DATA :",data.categories, data.food_id)
                            data.categories === categori ?
                            <CardMenu 
                                key={index} 
                                price={data.price} 
                                title={data.menutitle} 
                                image={data.pic} 
                                click={(e)=>{
                                    e.preventDefault();
                                    dispatch(addItem({food_id: data._id, price: data.price}));
                                    
                                    //console.log(dispatch(addItem()))
                                }}
                                />
                            :
                            ''
                        ))
                    }
                </div>
                :
                <div className="wraper-menu">
                    { 
                        fakeMenu.map((data, index) => (
                        
                            <CardMenu 
                                key={index}
                                id={data._id}
                                data={data}
                                from={"menu"} 
                                price={data.price} 
                                title={data.menutitle} 
                                image={data.pic} 
                                click={(e)=>{
                                    e.preventDefault();
                                    dispatch(addItem({food_id: data._id, price: data.price}));
                                    
                                    //console.log(dispatch(addItem()))
                                }}
                                />
                        ))
                    }
                </div>
            
            }
            <Cart />
            </div>  
            }
            </div>
        </div>
        
    )
}




export default Menu
