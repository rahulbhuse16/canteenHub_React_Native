import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Authentication from "../Pages/Authentication/Authentication"
import TabNavigator from "./TabNavigator"
const Stack=createStackNavigator()
const Router=()=>{

    return(

        <NavigationContainer>

            <Stack.Navigator
            
            >
                <Stack.Screen
                  options={{headerShown:false}}
                  component={Authentication}
                  name="Authentication"
                >

                </Stack.Screen>
                <Stack.Screen
                  options={{headerShown:false}}
                  component={TabNavigator}
                  name="Home"
                >

                </Stack.Screen>

                
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Router