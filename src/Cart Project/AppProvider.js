import React, { useContext, useState ,useEffect} from 'react'
import data from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [itemCount , setItemCount] = useState(data.length);
    const [products , setProducts] = useState(data);
    const [amount , setAmount ] = useState(10);
    const [showItem , setShowItem] = useState(true);

    useEffect(()=>{
        updateTotalPrice();
    },[products])

    const increaseAmount = (id)=>{
        const updatedProducts = products.map(item=>{
            if (item.id === id) {
                item.amount +=1;
            }
            return item;
        })
        setProducts(updatedProducts);
        setItemCount(itemCount=>itemCount+1);
    }

    const decreaseAmount = (id)=>{
        const updatedProducts = products.map(item=>{
            if (item.id === id) {
                item.amount -=1;
            }
            return item;
        }).filter(item=>item.amount !==0)
        setProducts(updatedProducts);
        setItemCount(itemCount=>itemCount-1);

    }

    const removeSingleProduct =(id)=>{
        const newProducts = products.filter(item=>item.id !== id);
        const deletedItem = products.find(item=>item.id === id);
        setItemCount(itemCount=>itemCount-deletedItem.amount);
        setProducts(newProducts);
    }

    const deleteCart = ()=>{
        setItemCount(0);
        setProducts([]);
        setShowItem(false);
    }

    const updateTotalPrice = ()=>{
        if (products.length === 0) {
            setShowItem(false);
            return;
        }
        // const totalPrice = products.map(item=>item.price * item.amount);
        // let sum=0;
        // totalPrice.forEach(num=>sum+=num);

        const {total} = products.reduce((cartTotal , cartItem)=>{
            const {amount , price} = cartItem;
            const totalPrice = price * amount;
            cartTotal.total += totalPrice;
            return cartTotal;
        },
        {
            total:0
        })
        setAmount(parseFloat(total.toFixed(2)));
    }

  return (
    <AppContext.Provider value={
        {
            itemCount,
            products,
            amount,
            showItem,
            increaseAmount,
            decreaseAmount,
            removeSingleProduct,
            deleteCart
        }
    }>
        {children}
    </AppContext.Provider>
  )
}

const useGlobalContextHook = ()=>{
    return(
        useContext(AppContext)
    )
}
export default useGlobalContextHook;
export  {AppProvider , AppContext}