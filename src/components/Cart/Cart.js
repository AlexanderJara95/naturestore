import React, {useContext,useEffect,useState} from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CartContext from '../../context/cartContext';
import { Button,Menu,MenuItem,Fade} from '@mui/material';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart(){
    const {cartListItem,removeProductToCart,clearAllCart,subTotal} = useContext(CartContext);
    
    return(
        <>
            <div className='containBody'>
                <div className='containHead'>
                    <h2>Imagen</h2>
                    <h2>Descripción</h2>
                    <h2>Cantidad</h2>
                    <h2>Precio</h2>
                    <h2>Quitar</h2>
                </div>
                {cartListItem.map((item)=>{  
                    return(
                        <div className='containCart' key={item.id}>
                            <div className='in imageCart'>
                                <img src={`../${item.pictureUrl}`}/>
                            </div>
                            <div className='in infoCart'>{item.title}</div>
                            <div className='in infoCart'>{item.count}</div>
                            <div className='in infoCart'>${item.price}.00</div>
                            <div className='in actionCart'><Button onClick={()=>removeProductToCart(item.id)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button></div>
                        </div>
                    )
                })}
                {cartListItem.length === 0 
                    ?<>
                        <div style={{padding:'1em'}}>
                            <p style={{color:"#000"}}>Carrito vacío</p>
                            <p><Link to="/">Agregar Productos</Link></p>
                        </div>
                    </>
                    : <>
                        <div className='containSubTotal'>
                            <div>
                                Subtotal: 
                            </div> 
                            <div>
                                <b>${subTotal}.00</b>  
                            </div> 
                        </div>
                        <div className='containSubTotal'>
                            <div>
                                Envío: 
                            </div> 
                            <div>
                                <b>${subTotal}.00</b>  
                            </div> 
                        </div>
                        <div className='containPagar'>
                            <div>
                                <Button variant="contained" onClick={()=>clearAllCart()}>Pagar</Button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}
export default Cart;