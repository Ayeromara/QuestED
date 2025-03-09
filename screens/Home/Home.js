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
import { useSelector } from "react-redux";

const Home = () =>{

    const user = useSelector((state) => state.user);
    console.log(user)
    return (
    <SafeAreaView style={[globalStyle.backgroundwhite, globalStyle.flex,]}>
        <Header title ={user.firstName + user.lastName}/>
    </SafeAreaView> 
    )
} 

export default Home;