import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import SingleCoursesItem from "../screens/SingleCoursesItem/SingleCoursesItem";

const Stack = createStackNavigator();

const MainNavigation = () =>{
    return(
        <Stack.Navigator screenOptions={{header: ()=> null, headerShown: true}}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.SingleCoursesItem} component={SingleCoursesItem} />
        </Stack.Navigator>
    )
}
 

export default MainNavigation;