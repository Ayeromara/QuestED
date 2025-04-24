import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '../navigation/Routes';
import Home from './Home/Home';
import Courses from './Courses/Courses';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import Profile from './Profile/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay, faHouse, faPeopleRoof, faUser } from '@fortawesome/free-solid-svg-icons';

const Tabs = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tabs.Navigator 
    initialRouteName={Routes.Home}
    screenOptions={{
        header: ()=> null, 
        headerShown: true, 
        tabBarStyle:{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
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
  );
}
