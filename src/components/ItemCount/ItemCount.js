import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { IconButton } from '@mui/material';

function ItemCount({stock,initial}){

    const [count,setCount] = useState(initial);
    const [desactive,setDesactive] = useState(false);

    useEffect(()=>{
        if(stock==0)setDesactive(true);
    },[stock]);

    const onAdd = () =>{
        if(count<stock){
            setCount(count+1);
        }
    }
    const onRemove = () =>{
        if(count>0)
        setCount(count-1);
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
            <Button variant="contained" disabled={desactive} size="large">Agregar</Button>
        </>
    );
}
export default ItemCount;