import React from 'react';
import { createContext, useState } from "react";
import ItemCount from '../components/ItemCount/ItemCount';
const CartContext = createContext();
const CartProvider = ({children}) =>{
const [cartListItem, setCartListItem] = useState([]);
const [subTotal, setSubTotal] = useState(0);
    
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
            console.log("subtotal:",subTotal+(producto.count*producto.price));
            setSubTotal(subTotal+((producto.count)*(producto.price)));
            setCartListItem(cartListItem=>[...cartListItem,producto]);
        }        
    }
    const removeProductToCart = (id) => {
        let filterproducts = cartListItem.filter(item=>item.id !== id)
        let subTotalProd = cartListItem.find(item=>item.id === id)
        console.log("subTotalProd",subTotalProd);
        setSubTotal(subTotal-((subTotalProd.count)*(subTotalProd.price)));
        setCartListItem(filterproducts);
    }
    const clearAllCart = () => {
        setCartListItem([]);
        setCartListItem(0)
    }

    const data = {
        cartListItem,
        setCartListItem,
        addProductToCart,
        removeProductToCart,
        clearAllCart,
        subTotal,
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;
export {CartProvider};