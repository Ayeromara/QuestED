import React from "react";
import style from "./style";
import { SafeAreaView, View , Text, Pressable, Image} from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SearchCard from "../../components/SearchCard/SearchCard";
import Badge from "../../components/Badge/Badge";
import { verticalScale } from "../../assets/styles/scaling";
import Search from "../../components/Search/Search";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";



const Home = () =>{

    console.log(user)
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

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
                    <Header title={user.lastName +' '+ user.firstName[0]}/>
                </View>



            </View>
        </View>

        <View style={[globalStyle.backgroundWhiteCurve,{height:'85%'}]}>
            <View style={style.lowercontainer}>

                <View>
                    <Badge/>
                </View>

                <View style={style.recommend}>
                <Header title={'Recommendation'} type={2}/>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                    <SearchCard text={'Declarative interfaces for any Apple Devices'} text2={'CSC 401'} text3={'400 level First Semester'}/>
                </ScrollView>

            </View>

        </View>

    </SafeAreaView> 
    )
} 

export default Home;