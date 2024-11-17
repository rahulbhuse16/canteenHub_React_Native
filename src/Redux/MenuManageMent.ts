import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState:MenuManageMentNS.IState={
    MenuManageMentRelatedState:{
        menuId:'',
        menuList:[],
        menuName:'',
        quantity:0,
        isAddItemOpen:false
    }
}
const menuInfo=createSlice({
    name:"menuInfo",
    initialState,
    reducers:{
        setMenuManageMentRelatedState(state,action:PayloadAction<MenuManageMentNS.MenuManageMentRelatedState>){
            return{
                ...state,
                MenuManageMentRelatedState:action.payload
            }
        }
    }
})
export const {setMenuManageMentRelatedState}=menuInfo.actions;
export default menuInfo.reducer;