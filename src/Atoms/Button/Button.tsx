import { Pressable } from "react-native"
import Typography from "../Typography/Typography"
import React from "react"
const Button: React.FC<ButtonNS.IProps> = ({
    title,
    onClick,
    height,
    width,
    backgroundColor,
    fontSize = 14,
    fontWeight = '300',
    color

}) => {
    return (
        <Pressable
            style={{
                height: height,
                width: width,
                backgroundColor: backgroundColor,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent:'center'
            }}
            onPress={onClick}
        >
            <Typography
                fontSize={fontSize}
                fontWeight={fontWeight}
                text={title}
                color={color}


            />

        </Pressable>

    )
}
export default Button