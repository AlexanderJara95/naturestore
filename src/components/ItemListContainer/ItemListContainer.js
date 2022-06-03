import ItemList from "../ItemList/ItemList";
import React,{useEffect, useState} from "react";
import { Grid } from "@mui/material";
import producto from "../../utils/Producto";

function ItemListContainer(){
    const [data,setData] = useState([]);   
    const mock = () =>{
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        })
    }
    useEffect(()=>{
        mock()
        .then((response)=>{
            setData(response)
        })
        .catch((err)=>{
            
        })    
        .finally(()=>{
            console.log("listado finalizado",producto);
        })   
    });
    return(
        <Grid container>
            <ItemList items={data}></ItemList>
        </Grid>
    );
}
export default ItemListContainer;