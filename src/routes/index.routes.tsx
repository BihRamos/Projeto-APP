import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import Layout from "../pages/layout";

export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:"#fff"
                }
            }}
        
        >

            <Stack.Screen name="Login"component={Login}/>
            <Stack.Screen name="BottomRoutes"component={BottomRoutes}/>
            <Stack.Screen name="Layout" component={Layout} /> 

        </Stack.Navigator>
    )
}