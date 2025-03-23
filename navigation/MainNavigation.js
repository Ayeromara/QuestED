import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import SingleCoursesItem from "../screens/SingleCoursesItem/SingleCoursesItem";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import Success from "../screens/Success/Success";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlay, faHouse, faPeopleRoof, faUser } from "@fortawesome/free-solid-svg-icons";
import Courses from "../screens/Courses/Courses";
import LeaderBoard from "../screens/LeaderBoard/LeaderBoard";
import Profile from "../screens/Profile/Profile";
import { verticalScale } from "../assets/styles/scaling";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

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
            <Stack.Screen name={Routes.SingleCoursesItem} component={SingleCoursesItem} />
            <Stack.Screen name={Routes.Home} component={TabNavigator} />
        </Stack.Navigator>
    );
}

const TabNavigator = () =>{
    return( 
    <Tabs.Navigator 
    screenOptions={{
        header: ()=> null, 
        headerShown: true, 
        tabBarStyle:{
            borderTopLeftRadius: 30,
<<<<<<< HEAD
            borderTopRightRadius: 30,
            alignItems:'center'
=======
            borderTopRightRadius: 30
>>>>>>> parent of e07fa35 (ok)
            }}}>
        <Tabs.Screen 
        name={Routes.Home} 
        component={Home}
        options={{tabBarIcon:({focused})=>(<FontAwesomeIcon color={focused? '#FF8181': 'gray' } size={20} icon={faHouse}/>),
        tabBarActiveTintColor: '#FF8181',
        tabBarInactiveTintColor: 'gray'
        }}
        />
        <Tabs.Screen 
        name={Routes.Courses} 
        component={Courses}
        options={{tabBarIcon:({focused})=>(<FontAwesomeIcon color={focused? '#FF8181': 'gray' } size={20} icon={faCirclePlay}/>),
        tabBarActiveTintColor: '#FF8181',
        tabBarInactiveTintColor: 'gray'
        }}
        />
        <Tabs.Screen 
        name={Routes.LeaderBoard} 
        component={LeaderBoard}
        options={{tabBarIcon:({focused})=>(<FontAwesomeIcon color={focused? '#FF8181': 'gray' } size={20} icon={faPeopleRoof}/>),
        tabBarActiveTintColor: '#FF8181',
        tabBarInactiveTintColor: 'gray'
        }}
        />
        <Tabs.Screen 
        name={Routes.Profile} 
        component={Profile}
        options={{tabBarIcon:({focused})=>(<FontAwesomeIcon color={focused? '#FF8181': 'gray' } size={20} icon={faUser}/>),
        tabBarActiveTintColor: '#FF8181',
        tabBarInactiveTintColor: 'gray'
        }}
        />


    </Tabs.Navigator>
    )}
