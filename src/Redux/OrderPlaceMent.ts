import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState:OrderPlaceMentNS.IState={
    orderPlaceMentRelatedState:{
        orderList:[],
        totalQuantity:0
    }
}
const orderPlaceMentInfo=createSlice({
    name:"orderPlacementInfo",
    initialState,
    reducers:{
        addMenu(state,action:PayloadAction<OrderPlaceMentNS.IOrder>){
            const item=action.payload;
            const existingMenu=state.orderPlaceMentRelatedState.orderList.find((menu)=>menu.menuId===item.menuId)

            if(existingMenu){
                existingMenu.Quantity +=1;
                state.orderPlaceMentRelatedState.totalQuantity+=1;
            }
            

            

        },
        removeMenu(state,action:PayloadAction<OrderPlaceMentNS.IOrder>){
            const item=action.payload;
            const existingMenu=state.orderPlaceMentRelatedState.orderList.find((menu)=>menu.menuId===item.menuId)

            if(existingMenu && existingMenu.Quantity>0){
            existingMenu.Quantity -=1;
            state.orderPlaceMentRelatedState.totalQuantity-=1;
            }

        },
        setOrderPlaceMentRelatedState(state,action:PayloadAction<OrderPlaceMentNS.OrderPlaceMentRelatedState>){
            return{
                ...state,
                orderPlaceMentRelatedState:action.payload
            }
        }
        
    }
})
export const{addMenu,removeMenu,setOrderPlaceMentRelatedState}=orderPlaceMentInfo.actions;
export default orderPlaceMentInfo.reducer;