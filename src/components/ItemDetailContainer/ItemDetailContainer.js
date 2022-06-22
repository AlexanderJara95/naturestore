import ItemList from "../ItemList/ItemList";
import React,{useEffect, useState} from "react";
import { Grid } from "@mui/material";
import producto from "../../utils/Producto";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';

function ItemDetailContainer(){
    //destructuración
    const {id} = useParams();
    console.log("params:", id);
    const [data,setData] = useState([]);  
    
    useEffect(()=>{
        setData(productFilter);
    },[]);
    const productFilter = producto.find((prod)=>{
        return prod.id === id
    });

    return(
        <Grid container>
            <ItemDetail item={data}></ItemDetail>
        </Grid>
    );
}
export default ItemDetailContainer;