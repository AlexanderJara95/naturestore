import React from 'react';
import { createContext, useState } from "react";
import ItemCount from '../components/ItemCount/ItemCount';
const CartContext = createContext();
const CartProvider = ({children}) =>{
const [cartListItem, setCartListItem] = useState([]);
    
    const addProductToCart = (product,count)=>{
        const producto ={
            id:product.id,
            count:count,
            category: product.category,
            pesoNeto: product.pesoNeto,
            pictureUrl: product.pictureUrl,
            price: product.price,
            stock: product.stock,
            title: product.title,
        }
        console.log("product,cant",producto);
        let isInCart = cartListItem.find(item=>item.id == producto.id);
        if(!isInCart){
            return setCartListItem(cartListItem=>[...cartListItem,producto]);
        }        
    }
    const removeProductToCart = (id) => {
        let filterproducts = cartListItem.filter(item=>item.id !== id)
        console.log("filterproducts",filterproducts);
        return setCartListItem(filterproducts);
    }
    const clearAllCart = () => {
        return setCartListItem([]);
    }

    const data = {
        cartListItem,
        setCartListItem,
        addProductToCart,
        removeProductToCart,
        clearAllCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;
export {CartProvider};