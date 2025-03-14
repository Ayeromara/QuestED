import React from "react";
import style from "./style";
import { useState,useEffect } from "react";
import { SafeAreaView, View , Text, Image,} from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import Header from "../../components/Header/Header";
import SearchCard from "../../components/SearchCard/SearchCard";
import Badge from "../../components/Badge/Badge";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { updateSelectedCoursesId } from "../../redux/reducers/Courses";
import { Routes } from "../../navigation/Routes";



const Home = ({navigation}) =>{


    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const courses = useSelector(state => state.courses);

    const [coursesItems, setCoursesItems] = useState([]);


    useEffect(()=>{
        const items = courses.items
          setCoursesItems(items);
    }, []);
  


    return (
    <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex,]}>

        <View style={[ style.okay,{height:'15%',}]}>
            <View style={style.header}>

            <Image source={require("../../assets/ProfileImage.jpg")} 
                resizeMode='contain'
                style={style.image}
                    />

                <View style={style.headertxtcontainer}>
                   
                    <Text style={style.headertxt}>Hello,</Text>
                    <Header title={user.displayName + '👋'}/>
                </View>



            </View>
        </View>

        <View style={[globalStyle.backgroundWhiteCurve,{height:'85%'}]}>
            <View style={style.lowercontainer}>

                <View style={style.badge}>
                    <Badge/>
                </View>

                <View style={style.recommend}>
                <Header title={'Select Course'} type={2}/>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    {coursesItems.length>0 &&(
                <View style={style.coursesItemsContainer}>
                {coursesItems.map(value => (
              <SearchCard
                    onPress= {selectedCoursesId=>{
                        dispatch(updateSelectedCoursesId(selectedCoursesId));
                         
                        navigation.navigate(Routes.SingleCoursesItem)
                    }}
                    coursesItemId={value.coursesItemId}
                    key={value.coursesItemId}
                    text={value.name}
                    text2={value.coursesTitle}
                    text3={value.year}
              />
            ))}
                </View>
                    )}
                </ScrollView>


            </View>

        </View>

    </SafeAreaView> 
    )
} 

export default Home;