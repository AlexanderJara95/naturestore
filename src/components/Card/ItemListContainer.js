import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({title,price,image,pesoNeto,stock,initial}){
    return(
        <Card sx={{ minWidth: 275}}>
            <CardContent>
                <h2 style={{marginBottom:'0'}}>
                    {title}
                </h2>
                <Typography variant="body2" color="text.secondary">
                    {pesoNeto}
                </Typography>
                <h1><b>$</b>{price}</h1>
                <br/>
                <div className='imageItemList'>
                    <img src={`${image}`}/>
                </div>
                <Typography variant="body2" color="text.secondary">
                    Stock: {stock}
                </Typography>
            </CardContent>
            <ItemCount stock={stock} initial={initial}></ItemCount>
        </Card>
    );
}
export default ItemListContainer;