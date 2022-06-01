import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import producto from "../../utils/Producto";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
    const [data,setData] = useState([]);   
    const getItem = () =>{
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(producto[0]);
            }, 2000);
        })
    }
    useEffect(()=>{
        getItem()
        .then((response)=>{
            setData(response)
        })
        .catch((err)=>{
            
        })    
        .finally(()=>{
            console.log("listado finalizado");
        })   
    });
    return(
        <Grid container>
            <ItemDetail item={data}></ItemDetail>
        </Grid>
    );
}
export default ItemDetailContainer;