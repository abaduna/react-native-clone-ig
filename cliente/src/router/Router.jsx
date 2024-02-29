import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { RouterStackParams } from "../types"
import Home from "../views/Home"
import sendfeed from "../views/sendfeed"


const Stack = createNativeStackNavigator()

const Routes =()=>{
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="sendfeed" component={sendfeed}/>
            </Stack.Navigator>
        </NavigationContainer>
}

export default Routes