import React from "react";
import { TextInput  } from "react-native";
const Textinput:React.FC<TextInputNS.IProps>=({
    value,
    onChangeText,
    width=320,
    height=41,
    


})=>{
    return(
        <TextInput
          style={{
            width:width,
            height:height,
            borderRadius:8,
            alignItems:'center',
            borderWidth:1.2,
            borderColor:'#D7D7D7',
            textAlign:'left',
            paddingHorizontal:20
          }}
           value={value}
           onChangeText={(text)=>onChangeText(text)}
         />

    )

}
export default Textinput;