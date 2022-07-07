import ItemList from "../ItemList/ItemList";
import React,{useEffect, useState} from "react";
import { Grid } from "@mui/material";
import producto from "../../utils/Producto";
import {useParams} from 'react-router-dom';
import { collection, getDocs} from 'firebase/firestore';
import db from '../../utils/FirebaseConfig';

function ItemListContainer(){
    const [data,setData] = useState([]);  
    const {categoryId} = useParams(); 

    const getFirebaseProducts = async () =>{
        const databd = await getDocs(collection(db,"Producto"));
        const productList = databd.docs.map((doc)=>{
            let prod = doc.data();
            prod.id = doc.id;
            return prod;
        });
        return productList
    }
    const getProducts = () =>{
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(getFirebaseProducts());
            }, 1000);
        })
    }
    useEffect(()=>{   
        setData([]);   
        getProducts().then((response)=>{
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