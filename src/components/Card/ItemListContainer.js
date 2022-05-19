import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'

function ItemListContainer({title,price,image,pesoNeto}){
    return(
        <Card sx={{ minWidth: 275}}>
            <CardContent>
                <Typography variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {pesoNeto}
                <br />
                <div className='imageItemList'>
                    <img src={`${image}`}/>
                </div>
                <Typography variant="h5" component="div">
                <b>$</b>{price}
                </Typography>
                </Typography>
            </CardContent>
            <Button variant="contained" size="large">Agregar</Button>
        </Card>
    );
}
export default ItemListContainer;