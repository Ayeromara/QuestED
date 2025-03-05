import React from "react";
import style from "./style";
import { SafeAreaView, View , Text} from "react-native";
import globalStyle from "../../assets/styles/globalStyles";

const Home = () =>{
    return (
    <SafeAreaView style = {[globalStyle.backgroundPrimary, globalStyle.flex]}>
        <View>
        <Text>Hello World</Text>
        </View>
    </SafeAreaView> 
    )
}

export default Home;