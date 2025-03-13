import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import SingleCoursesItem from "../screens/SingleCoursesItem/SingleCoursesItem";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import Success from "../screens/Success/Success";

const Stack = createStackNavigator();

export const NonAuthenticated = () =>{
    return(
        <Stack.Navigator 
        initialRouteName={Routes.Login}
        screenOptions={{header: ()=> null, headerShown: true}}>
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.SignUP} component={SignUp} />
            <Stack.Screen name={Routes.Success} component={Success} />
        </Stack.Navigator>
    );
};

 export const Authenticated = () =>{
    return(
        <Stack.Navigator 
        initialRouteName={Routes.Home}
        screenOptions={{header: ()=> null, headerShown: true}}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.SingleCoursesItem} component={SingleCoursesItem} />
            <Stack.Screen name={Routes.Success} component={Success} />
        </Stack.Navigator>
    );
}
