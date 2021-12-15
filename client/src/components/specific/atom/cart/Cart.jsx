import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import NumberFormat from 'react-number-format'

import './cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, addTableid, removeItem, selectCartCount, selectCartItem, selectTableid, selectTotalOrder } from '../../../../redux/cartSlice'
import { selectRestoMenu } from '../../../../redux/restoSlice'
import { CardMenuMini } from '../..';
import { Button, ButtonGroup, Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress'



const Cart = () => {
  const count = useSelector(selectCartCount);
  const items  = useSelector(selectCartItem);
  const menu = useSelector(selectRestoMenu);
  const totalOrder = useSelector(selectTotalOrder);
  const table_id = useSelector(selectTableid);

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [checkOut, setCheckOut] = useState({
    table_id: '',
    NameOrder: '',
    order: [],
    totalOrder: totalOrder,
    qtyItem: count,
  });
 
  const handleOpen = () => {
    if (count !== 0 )
    if (open === true) return setOpen(false) 
    setCheckOut({...checkOut, order: Object.values(items), totalOrder: totalOrder, qtyItem: count});
    return setOpen(true);
  };

  const handleClose = () => {
    setCheckOut({...checkOut, order: Object.values(items), totalOrder: totalOrder, qtyItem: count});
    setOpen(false);
  };

  const handleClickSubmit = () =>{
    setLoading(true);
    setCheckOut({...checkOut, order: Object.values(items), totalOrder: totalOrder, qtyItem: count});
    setTimeout(() =>{setLoading(false);console.log(checkOut);},5000)
  };

  const body = (
    <div className="papper">
        <h3>Your Order</h3>
        {items !== undefined ?
          <div>
            {
              Object.values(items).map((data, index) => (
                
                <div className="detail-cart" key={index}>
                    <div className="product">
                          <CardMenuMini image={menu.find(x => x._id === data.food_id).pic}/>
                    </div>
                    <div className="title-product">
                        <p>{menu.find(x => x._id === data.food_id).title}</p>
                    </div>
                    <div className="qty-custom">
                    <ButtonGroup size="small" aria-label="small outlined button group">

                    <Button onClick={(e) => {
                       e.preventDefault();
                       dispatch(removeItem({food_id: data.food_id, price: menu.find(x => x._id === data.food_id).price}));
                       setCheckOut({...checkOut, order: Object.values(items), totalOrder: totalOrder, qtyItem: count});
                      }}>-</Button>

                      <Button disabled>{data.qty}</Button>

                      <Button onClick={(e)=> {
                        e.preventDefault();
                        dispatch(addItem({food_id: data.food_id, price: menu.find(x => x._id === data.food_id).price}));
                        setCheckOut({...checkOut, order: Object.values(items), totalOrder: totalOrder, qtyItem: count});
                      }}>+</Button>

                      

                      </ButtonGroup>
                    </div>
                </div>
              ))
            }
          </div>
          :
          ''
        }
      <div className="detail-checkout">
        <div><p>Qty: </p></div>
        <div><NumberFormat 
                    className="price"
                    value={count}
                    displayType="text"
                    thousandSeparator={true}
                    suffix=' item'
                /></div>
          
      </div>
      <div className="detail-checkout">
        <div><p>Estimate Price: </p></div>
        <div><NumberFormat 
                    className="price"
                    value={totalOrder}
                    displayType="text"
                    thousandSeparator={true}
                    prefix="Rp "
                /></div>
          
      </div>
      <div className="detail-checkout">
                        <InputLabel className="from-title">Table:</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel id="categories">enter you table number</InputLabel>
                            <Select
                            name="categories"
                            id="categories"
                            onChange={
                              (e)=>{
                                e.preventDefault();
                                //console.log(e.target.value)
                                dispatch(addTableid({table_id: e.target.value}));
                                setCheckOut({...checkOut, table_id: e.target.value})
                              }
                            }
                            value={table_id}
                            >
                            <MenuItem value={'TB-1'}>T-1</MenuItem>
                            <MenuItem value={'TB-2'}>T-2</MenuItem>
                            <MenuItem value={'TB-3'}>T-3</MenuItem>
                            <MenuItem value={'TB-4'}>T-4</MenuItem>
                            <MenuItem value={'TB-5'}>T-5</MenuItem>
                            <MenuItem value={'TB-6'}>T-6</MenuItem>
                            <MenuItem value={'TB-7'}>T-7</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="detail-checkout">
                        <InputLabel className="from-title">Name:</InputLabel>
                        <FormControl className="from-input">
                          <TextField
                            label="required your name for repeat order"
                            type="text"
                            onChange={(e)=>{
                              e.preventDefault();
                              setCheckOut({
                                ...checkOut,
                                NameOrder: e.target.value
                              })
                            }}
                          />
                        </FormControl>
                    </div>
      <div className="detail-cart">
        <Button fullWidth={true} color="primary" variant="contained" onClick={handleClickSubmit}>{isLoading ?<CircularProgress size={25}/> : 'checkout'}</Button>  
      </div>
      <Cart />
    </div>
  );
    
    
    //setTimeout(() =>{console.log(checOut)},2000)
    return (
        <div>{ count !== 0 ? 
            <Fab className="fab"  color="primary" aria-label="add" onClick={handleOpen}>
                <Badge badgeContent={count} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </Fab>
            : ''}
            {/* <Modal
                open={open}
                onClose={handleClose}
              > */}
                  <Dialog 
                    open={open}
                    onClose={handleClose}
                    scroll="body"
                    fullWidth={true}
                    //fullScreen={true}
                    
                  >{body}</Dialog>
                  
            {/* </Modal> */}
        </div>
    )
}

export default Cart