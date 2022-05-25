import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css'

function Item({id,title,price,pictureUrl,pesoNeto,stock}){
    return(
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
                <img src={`${pictureUrl}`}/>
            </div>
            <Typography variant="body2" color="text.secondary">
                Stock: {stock}
            </Typography>
        </CardContent>
    );
}
export default Item;