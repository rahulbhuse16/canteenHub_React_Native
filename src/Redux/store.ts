import { configureStore } from "@reduxjs/toolkit";
import authInfo from './Authentication'
import menuInfo from './MenuManageMent'
import orderinfo from './OrderPlaceMent'
import { useDispatch, useSelector } from "react-redux";
const store=configureStore({
    reducer:{
        authInfo:authInfo,
        menuInfo:menuInfo,
        orderinfo:orderinfo

    }
})
export default store;
// Define RootState and AppDispatch types
type RootState=ReturnType<typeof store.getState>;
type AppDispatch=typeof store.dispatch;

export const useAppDispatch=useDispatch.withTypes<AppDispatch>()
export const useAppSelector=useSelector.withTypes<RootState>()
