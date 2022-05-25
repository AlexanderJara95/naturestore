import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import './ItemList.css'
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';

function ItemList({items}){
    return(
        <>
            {items.map((i) => (
                <Grid item md={3}>
                    <Card sx={{ minWidth: 275}}>
                    <Item id={i.id} title={i.title} price={i.price} pictureUrl={i.pictureUrl} pesoNeto={i.pesoNeto} stock={i.stock}> </Item>
                    <ItemCount stock={i.stock} initial={i.initial}></ItemCount>
                    </Card>
                </Grid>    
            ))}
        </>
    );
}
export default ItemList;