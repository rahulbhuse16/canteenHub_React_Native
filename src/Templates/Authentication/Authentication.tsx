import { StyleSheet, View } from "react-native";
import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Textinput from "../../Atoms/Textinput/Textinput";
import Button from "../../Atoms/Button/Button";
import Typography from "../../Atoms/Typography/Typography";
const AuthenticationTemp: React.FC<AuthenticationNS.IProps> = ({
    userName,
    password,
    onLogin,
    onRegister,
    setPassword,
    setUserName,
    onSelectRole



}) => {
    return (
        <View style={styles.container}>


            <View style={styles.loginInfoContainer}>
                <View style={{

                    justifyContent: "center",
                    alignSelf: 'center'
                }}>
                    <FontAwesome name="user" size={54} color="black" />
                </View>

                <View style={{
                    gap: 4
                }}>
                    <Typography
                        text="UserName"
                        color="black"
                    />
                    <Textinput
                        value={userName}
                        onChangeText={setUserName}
                        width={300}
                    />
                </View>
                <View style={{
                    gap: 4
                }}>
                    <Typography
                        text="Password"
                        color="black"
                    />
                    <Textinput
                        value={password}
                        onChangeText={setPassword}
                        width={300}
                    />
                </View>
                <View style={{
                    flexDirection: "row",

                    gap: 6
                }}>
                    <Button
                        onClick={() => { onSelectRole('STUDENT') }}
                        title="Student"
                        backgroundColor={'#F3E6F4'}
                        width={150}
                        height={42}
                        color="#870091"
                        fontSize={16}
                        fontWeight="400"
                    />

                    <Button
                        width={150}
                        backgroundColor={'#F3E6F4'}
                        color="#870091"
                        fontSize={16}
                        fontWeight="400"
                        onClick={() => { onSelectRole('ADMIN') }}
                        title="Admin" />


                </View>
                <Button
                    backgroundColor={"#373E41"}
                    onClick={onRegister}
                    title="SignUP"
                    color="white"
                    height={40}
                    fontSize={16}
                    fontWeight="400"
                />





            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    loginInfoContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 2,
        gap: 10,
        borderWidth: 0.1,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: 'black',

        marginHorizontal: 20,
        marginVertical: 120
    },
    loginField: {
        gap: 4
    }
})
export default AuthenticationTemp;