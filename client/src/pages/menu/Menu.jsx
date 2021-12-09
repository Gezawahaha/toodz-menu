import React, { useState } from 'react'
import { CardMenu, Cart } from '../../components/specific'
import './menu.scss'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { useSelector , useDispatch} from 'react-redux'
import { selectRestoMenu } from '../../redux/restoSlice'
import { addItem } from '../../redux/cartSlice'



export const Menu = () =>{
    //const isLoading = false;
    const fakeMenu = useSelector(selectRestoMenu);
    const dispatch = useDispatch();
    //console.log(dispatch(addItem({food_id: 1})));
    

    const [categori, setCategori] = useState('all');
    const handleChangeCategori =(e)=>{
        //console.log('data categor', e.target.value);
        setCategori(e.target.value)
    };
    //const state = useSelector((state) => state)


    //console.log("action",AC);
    //console.log(state.orderData.totalOrder);
    
    
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
            
                {   categori !== 'all'
                    ?
                    <div className="wraper-menu" >
                        {/* {console.log("DATA :",fakeMenu[1].categories, "categori :" , categori)} */}
                        { 
                            fakeMenu.map((data, index) => (
                                //console.log("DATA :",data.categories, data.food_id)
                                data.categories === categori ?
                                <CardMenu 
                                    key={index} 
                                    price={data.price} 
                                    title={data.title} 
                                    image={data.img}/>
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
                                    price={data.price} 
                                    title={data.title} 
                                    image={data.img} 
                                    click={(e)=>{
                                        e.preventDefault();
                                        dispatch(addItem({food_id: data.food_id}));
                                        //console.log(dispatch(addItem()))
                                    }}
                                    />
                            ))
                        }
                    </div>
                
                }
                <Cart />
            </div>  
        </div>
        
    )
}




export default Menu
