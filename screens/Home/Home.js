import React from "react";
import style from "./style";
import {useEffect } from "react";
import { SafeAreaView, View , Text, Image, ActivityIndicator, FlatList, TouchableOpacity,} from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import Header from "../../components/Header/Header";
import SearchCard from "../../components/SearchCard/SearchCard";
import Badge from "../../components/Badge/Badge";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../redux/reducers/Courses";
import { Routes } from "../../navigation/Routes";



const Home = ({navigation}) =>{
    
    const dispatch = useDispatch();

    const user = useSelector(state => state.user);
    const {courses, loading, error} = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(fetchCourses());
      }, [dispatch]);

      if (loading) return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          );

      if (error) return <Text>Error: {error}</Text>;

    return (
    <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex,]}>

        <View style={[ style.okay,{height:'15%',}]}>
            <View
             style={style.header}>

            <Image source={require("../../assets/ProfileImage.jpg")} 
                resizeMode='contain'
                style={style.image}
                    />

                <View style={style.headertxtcontainer}>
                   
                    <Text style={style.headertxt}>Hello,</Text>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate(Routes.Profile)} >
                    <Header type={1} title={user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1) + '👋'}/>
                    </TouchableOpacity>
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
                </View >


                    {courses && courses.length>0 &&
                        <FlatList 
                        showsVerticalScrollIndicator ={false}
                        data={courses}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={style.coursesItemsContainer}>
                            <SearchCard 
                            onPress= {()=>navigation.navigate(Routes.SingleCoursesItem, { course: item })
                            }
                            text={item.name}
                            text2={item.coursesTitle}
                            text3={item.year}
                      />
                      </View>
                        )}
                      />}




            </View>

        </View>

    </SafeAreaView> 
    )
} 

export default Home;