import React from "react"
import { Pressable, View } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Typography from "../../Atoms/Typography/Typography";
const ProfilTemp:React.FC<ProfileNS.IProps>=({
    userName,
    userRole,
    onLogout
})=>{

    return(
       <View>
        <View style={{
            flexDirection:'row',
            gap:10,
            paddingHorizontal:20,
            marginHorizontal:20,
            marginVertical:20,
            paddingVertical:20,
            borderRadius:6,
            backgroundColor:'#F3E6F4',
            borderWidth:1,
            borderColor:'#870091',
            alignItems:'center'

        }}>
        <MaterialIcons name="account-circle" size={104} color="black" />
        <View style={{
            gap:4,
            alignItems:"center",
            justifyContent:"center"
        }}>
        <Typography 
          text={userName}
          color="black"
          fontSize={16}
          fontWeight="bold"
        />
        <Typography 
          text={'+917666054838'}
          color="black"
          fontSize={16}
          fontWeight="bold"
        />
        <Typography 
          text={userRole}
          color="black"
          fontSize={16}
          fontWeight="bold"
        />
        
        </View>
        
       

        </View>
        <View style={
            {
                paddingHorizontal:20,
                paddingVertical:20,
                backgroundColor:'#F3E6F4',
                flexDirection:'row',
                justifyContent:'space-between',
                borderRadius:4,
                marginHorizontal:20,
                marginVertical:210
            }
        }>
            <Typography
              color="#870091"
              text='Logout'
              fontSize={16}
              fontWeight="bold"
            />
           <Pressable onPress={onLogout}>
           <MaterialIcons name="logout" size={24} color="#870091" />
           </Pressable>
           
        

        </View>
        </View>
        
    )

}
export default ProfilTemp