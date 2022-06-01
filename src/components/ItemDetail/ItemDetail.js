import {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemGrid = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

function ItemDetail({item}){
    useEffect(()=> {
        console.log("iteeeem:",item);
    },[]);
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <ItemGrid centered>
                    <div className='imageDetailList'>
                        <img src={`${item.pictureUrl}`}/>
                    </div>
                </ItemGrid>
            </Grid>
            <Grid item xs={4}>
                <ItemGrid>
                    <h1 style={{marginBottom:'0'}}>
                        {item.title}
                    </h1>
                    <p>
                        {item.description}
                    </p>
                    <Typography variant="body2" color="text.secondary">
                        {item.pesoNeto}
                    </Typography>
                    <h1><b>$</b>{item.price}</h1>
                    <ItemCount stock={item.stock} initial={item.initial}></ItemCount>
                    <p>
                        Stock: {item.stock}
                    </p>
                </ItemGrid>
            </Grid>
        </Grid>    
    );
}
export default ItemDetail;