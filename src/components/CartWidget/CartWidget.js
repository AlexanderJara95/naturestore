import React, {useContext,useEffect,useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import CartContext from '../../context/cartContext';
import { Button,Menu,MenuItem,Fade} from '@mui/material';
import { Link } from 'react-router-dom';

function CartWidget(){
    const {cartListItem,removeProductToCart,clearAllCart,setCartListItem} = useContext(CartContext);
    const [count,setCount] = useState(0);

    useEffect(()=>{
        let contador=0;
        cartListItem.map((item)=>{
            console.log("count,",item.count);
            contador+=item.count
        });
        setCount(contador);
    },[cartListItem]);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <IconButton
                size="large"
                color="inherit"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                <ShoppingCartIcon fontSize='medium'></ShoppingCartIcon>   
                <span className='quantityRed'>{count}</span>   
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {cartListItem.map((item)=>{  
                    return(
                        <div className='containItem' key={item.id}>
                            <div className='in imageItem'>
                                <img src={`../${item.pictureUrl}`}/>
                            </div>
                            <div className='in infoItem'>{item.title}<br></br><b>{item.count} cantidades</b></div>
                            <div className='in actionItem'><Button onClick={()=>removeProductToCart(item.id)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button></div>
                        </div>
                    )
                })}
                {cartListItem.length === 0 
                    ?<>
                        <div style={{padding:'1em'}}>
                            <p style={{color:"#000"}}>Carrito vacío</p>
                            <p><Link to="/">Agregar Productos</Link></p>
                        </div>
                    </>
                    : <div className='containItem'><Button variant="contained" onClick={()=>clearAllCart()}>Limpiar todo</Button></div>
                }
            </Menu>
        </>
    );
}
export default CartWidget; 