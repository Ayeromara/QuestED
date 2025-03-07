import React from "react";
import style from "./style";
import { SafeAreaView, View , Text} from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SearchCard from "../../components/SearchCard/SearchCard";

const Home = () =>{
    return (
    <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex]}>
        <Header title ={'Poetri Lazuardi'} type={1}/>
        <Button title={'Start Learning'} onPress={()=>{console.log('pressed')}}/>
        <SearchCard 
        text={'Declarative interfaces for any Apple Devices'}
        text2={'CSC 401'}
        text3={'⭐  400Level'}/>

    </SafeAreaView> 
    )
}

export default Home;