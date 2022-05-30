import ItemList from "../ItemList/ItemList";
import {useState} from "react";
import { Grid } from "@mui/material";

function ItemListContainer(){
    const [data,setData] = useState([]);
    const items =[
        {
            id:1,
            title:'Jabón de sábila',
            price:3,
            pictureUrl:'jabon1.jpg',
            pesoNeto:'Caja de 5 unidades',
            stock: 5,
            initial: 1
        },
        {
            id:2,
            title:'Shampoo de Miel',
            price:9,
            pictureUrl:'shampoo1.jpg',
            pesoNeto:'300ml',
            stock: 10,
            initial: 2
        },
        {
            id:3,
            title:'Jabón de Avena',
            price:3,
            pictureUrl:'jabon2.jpg',
            pesoNeto:'Caja de 5 unidades',
            stock: 3,
            initial: 1
        },
        {
            id:4,
            title:'Shampoo de Avena',
            price:11,
            pictureUrl:'shampoo2.jpg',
            pesoNeto:'300ml',
            stock: 0,
            initial: 0
        }
    ]        
    const mock = () =>{
        return new Promise((resolve,reject) =>{
            setTimeout(() => {
                resolve(items);
            }, 2000);
        })
    }
    useState(()=>{
        mock()
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
            <ItemList items={data}></ItemList>
        </Grid>
    );
}
export default ItemListContainer;