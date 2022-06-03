import ItemList from "../ItemList/ItemList";
import React,{useEffect, useState} from "react";
import { Grid } from "@mui/material";
import producto from "../../utils/Producto";
import {useParams} from 'react-router-dom';

function ItemListContainer(){
    const [data,setData] = useState([]);  
    const {categoryId} = useParams(); 
    const getProducts = () =>{
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(producto);
            }, 1000);
        })
    }
    useEffect(()=>{   
        setData([]);     
        getProducts()
        .then((response)=>{
            if(!categoryId){
                setData(response)
            }else{
                filterCategory(response)
            }
            
        })
        .catch((err)=>{
            
        })    
        .finally(()=>{
            console.log("listado finalizado",producto);
        }) 
    },[categoryId]);
    const filterCategory = (array)=>{
        return array.map((item)=>{
            if(item.category == categoryId){
                return setData(data=>[...data,item])
            }
        })
    }
    return(
        <Grid container>
            <ItemList items={data}></ItemList>
        </Grid>
    );
}
export default ItemListContainer;
/* */