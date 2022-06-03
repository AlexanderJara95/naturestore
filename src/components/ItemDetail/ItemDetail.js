import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemGrid = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

function ItemDetail({item}){
    return (
        <Grid container>
            <Grid item xs={6}>
                <ItemGrid>
                    <div className='imageDetailList'>
                        <img src={`../${item.pictureUrl}`}/>
                    </div>
                </ItemGrid>
            </Grid>
            <Grid item xs={6}>
                <ItemGrid style={{position:'relative'}}>
                    <IconButton color="primary" aria-label="agregar" style={{position:'absolute',right:'.75em'}} >
                        <FavoriteBorderIcon fontSize='large'></FavoriteBorderIcon>
                    </IconButton>
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