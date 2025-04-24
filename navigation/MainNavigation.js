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
import CourseContent from "../screens/CourseContent/CourseContent";
import QuizWelcome from "../screens/QuizWelcome/QuizWelcome";
import Quiz from "../screens/Quiz/Quiz";
import Result from "../screens/Result/Result";
import MainApp from "../screens/MainApp";


const Stack = createStackNavigator();

export const NonAuthenticated = () =>{
    return(
        <Stack.Navigator 
        initialRouteName={Routes.Login}
        screenOptions={{header: ()=> null, headerShown: false}}>
            <Stack.Screen name={Routes.Login} component={Login} />
            <Stack.Screen name={Routes.SignUP} component={SignUp} />
            <Stack.Screen name={Routes.Success} component={Success} />
        </Stack.Navigator>
    );
};

 export const Authenticated = () =>{
    return(
        <Stack.Navigator 
        initialRouteName={Routes.MainApp}
        screenOptions={{header: ()=> null, headerShown: false}}>
            <Stack.Screen name={Routes.SingleCoursesItem} component={SingleCoursesItem} />
            <Stack.Screen name={Routes.CourseContent} component={CourseContent} />
            <Stack.Screen name={Routes.QuizWelcome} component={QuizWelcome} />
            <Stack.Screen name={Routes.Quiz} component={Quiz} />
            <Stack.Screen name={Routes.MainApp} component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Result} component={Result} />
        </Stack.Navigator>
    );
}

