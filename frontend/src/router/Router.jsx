import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Home from "../views/Home"
import SendFeed from "../views/SendFeed"


const Stack = createNativeStackNavigator()

const Routes =()=>{
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="sendfeed" component={SendFeed}/>
            </Stack.Navigator>
        </NavigationContainer>
}

export default Routes