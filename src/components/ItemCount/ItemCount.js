import React,{ useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { IconButton } from '@mui/material';

function ItemCount({item,stock,setShowButton,count,actualizarCantidad,addProductToCart}){

    const [desactive,setDesactive] = useState(false);
    
    useEffect(()=>{
        if(stock==0)setDesactive(true);
    },[stock,count]);

    const onAdd = () =>{
        if(count<stock){
            actualizarCantidad(count+1);
        }
    }
    const onRemove = () =>{
        if(count>0)
        actualizarCantidad(count-1);
    }

    return(
        <>
            <div className='count-item'>
                <IconButton color="primary" aria-label="agregar" disabled={desactive} onClick={onRemove}>
                    <DoDisturbOnOutlinedIcon fontSize='large'/>
                </IconButton>
                <h2>{count}</h2>
                <IconButton color="primary" aria-label="agregar" disabled={desactive} onClick={onAdd}>
                    <AddCircleOutlineOutlinedIcon fontSize='large' />
                </IconButton>
            </div>
            <Button variant="contained" disabled={desactive} onClick={()=>addProductToCart(item,count)} size="large">Agregar</Button>
        </>
    );
}
export default ItemCount;