import { useAppDispatch, useAppSelector } from "../../Redux/store"
import OrderPlaceMentTemp from "../../Templates/OrderPlacement/OrderPlaceMent"
import { addMenu,removeMenu, setOrderPlaceMentRelatedState } from "../../Redux/OrderPlaceMent";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const OrderPlaceMent=()=>{

    const dispatch=useAppDispatch();
    const menuList=useAppSelector(state=>state.menuInfo.MenuManageMentRelatedState.menuList)
    const orderPlaceMentState=useAppSelector(state=>state.orderinfo.orderPlaceMentRelatedState)
    useEffect(()=>{
        const fetorderList=async()=>{
            const newOrderList=menuList.map((item)=>({
                 ...item,
                 Quantity:0
                    
                 
            }
                
                
            )

                
            )
            await dispatch(setOrderPlaceMentRelatedState({
                ...orderPlaceMentState,
                orderList:newOrderList
            }))
        }
        fetorderList()
        
    },[dispatch])
    const onAddToCart=(item:OrderPlaceMentNS.IOrder)=>{
         dispatch(addMenu(item)
              
         )
    }

    const onPlaceOrder=async()=>{

        const updatedMenuList=orderPlaceMentState.orderList.filter((menu)=>(
            menu.Quantity>0
        ))
        dispatch(setOrderPlaceMentRelatedState({
            ...orderPlaceMentState,
            orderList:updatedMenuList
        }))
        await AsyncStorage.setItem('orderList',JSON.stringify(orderPlaceMentState.orderList))


    }

    const onRemoveFromCart=(item:OrderPlaceMentNS.IOrder)=>{
        dispatch(removeMenu(item))
    }
    console.log(orderPlaceMentState.orderList)
    return(
        <OrderPlaceMentTemp
          orderList={orderPlaceMentState.orderList}
          onAddToCart={onAddToCart}
          onPlaceOrder={onPlaceOrder}
          onRemoveFromCart={onRemoveFromCart}
          totalQuantity={orderPlaceMentState.totalQuantity}
        
        
        />
    )

}
export default OrderPlaceMent