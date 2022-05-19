import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

function CartWidget(){
    return(
        <IconButton
            size="large"
            color="inherit"
            >
            <ShoppingCartIcon fontSize='medium'></ShoppingCartIcon>   
            <span className='quantityRed'>0</span>      
        </IconButton>
    );
}
export default CartWidget; 