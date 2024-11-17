import { useNavigation } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "../../Redux/store"
import ProfilTemp from "../../Templates/Profile/Profile"
import { setAuthRelatedState } from "../../Redux/Authentication"

const Profile=()=>{
    const appState=useAppSelector(state=>state.authInfo.authRelatedState)
    const Navigation=useNavigation();
    const dispatch=useAppDispatch();
    const onLogout=()=>{
        dispatch(setAuthRelatedState({
            ...appState,
            userName:'',
            password:'',
            role:'OTHER'

        }))
        Navigation.navigate('Authentication')

    }
    return(
        <ProfilTemp
          userName={appState.userName}
          userRole={appState.role}
          onLogout={onLogout}
        />
          
    )
}
export default Profile