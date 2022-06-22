import React,{useState} from 'react';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import './ItemList.css'
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ItemList({items}){
    const [count,setCount] = useState(0);
    return(
        <>
            {items.map((i) => (
                <Grid item key={i.id}>
                    <Card sx={{ minWidth: 275}}>
                    <Item id={i.id} title={i.title} price={i.price} pictureUrl={i.pictureUrl} pesoNeto={i.pesoNeto} stock={i.stock}> </Item>
                    <Button variant={'contained'} style={{backgroundColor:'#000',marginTop:'10px'}}>
                        <Link to={`/item/${i.id}`} style={{textDecoration:'none',color:'#fff'}}> Ver detalle</Link>
                    </Button>
                    </Card>
                </Grid>    
            ))}
        </>
    );
}
export default ItemList;