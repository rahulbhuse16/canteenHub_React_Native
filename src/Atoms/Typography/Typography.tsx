import React from "react";
import { Text } from "react-native";
const Typography: React.FC<TypographyNS.IProps> = ({
    text,
    color,
    fontSize,
    fontWeight

}) => {
    return (
        <Text style={{
            fontSize:fontSize,
            color:color,
            fontWeight:fontWeight,
            
        }}>
            {text}

        </Text>

    )
}
export default Typography;
