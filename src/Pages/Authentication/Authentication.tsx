import AuthenticationTemp from "../../Templates/Authentication/Authentication"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import { setAuthRelatedState } from "../../Redux/Authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Authentication=()=>{
    const authState=useAppSelector(state=>state.authInfo.authRelatedState);
    const Navigation=useNavigation()
    const dispatch=useAppDispatch();
    const setUserName=(name:string)=>{
        dispatch(setAuthRelatedState({
            ...authState,
            userName:name
        }))

    }
    const setPassword=(password:string)=>{
        dispatch(setAuthRelatedState({
            ...authState,
            password:password
        }))
    }
    console.log(authState)
    const onRegister=async()=>{
        const user={
            userName:authState.userName,
            password:authState.password,
            role:authState.role

        }
        console.log("saved")
        dispatch(setAuthRelatedState({
            ...authState,
            ...user
        }))
        Navigation.navigate('Home')
        await AsyncStorage.setItem('user',JSON.stringify(user));


    }
    const onSelectRole=(role:AuthenticationNS.IRole)=>{
        if(role==='ADMIN'){
            dispatch(setAuthRelatedState({
                ...authState,
                role:'ADMIN'
            }))
        }
        else if(role=='STUDENT'){
            dispatch(setAuthRelatedState({
                ...authState,
                role:'STUDENT'
            }))
        }
    }       
            
        
    

    
      

    return(
        <AuthenticationTemp

          userName={authState.userName}
          password={authState.password}
          setPassword={setPassword}
          setUserName={setUserName}
          onSelectRole={onSelectRole}
          onRegister={onRegister}
        
        />
        
    )
}
export default Authentication