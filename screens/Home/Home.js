import React from "react";
import style from "./style";
import { SafeAreaView, View , Text} from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SearchCard from "../../components/SearchCard/SearchCard";
import Badge from "../../components/Badge/Badge";
import { verticalScale } from "../../assets/styles/scaling";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import Search from "../../components/Search/Search";

const Home = () =>{
    return (
    <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex,]}>
        <View style={{height:'15%'}}>
            <Search />
        </View>
        <View style={[globalStyle.backgroundWhiteCurve, {height:'85%'}]}>


        </View>

    </SafeAreaView> 
    )
}

export default Home;