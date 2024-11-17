import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState:AuthenticationNS.IState={
    authRelatedState:{
        userName:'',
        password:'',
        role:'OTHER'
    }
}
const authInfo=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAuthRelatedState(state,action:PayloadAction<AuthenticationNS.authRelatedState>){
            return{
                ...state,
                authRelatedState:action.payload
            }
        }
    },
    

})
export const {setAuthRelatedState}=authInfo.actions;
export default authInfo.reducer;
