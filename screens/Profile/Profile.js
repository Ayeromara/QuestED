import React from "react";
import { Image, Text, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import style from "./Style";
import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";

const Profile =({navigation}) =>{

        const user = useSelector(state => state.user);

    return (
        <View  style={[globalStyle.backgroundPrimary, globalStyle.flex,]}>

        <View style={{height:'50%'}}>

                <View style={style.backCont}>
                        <BackButton onPress={()=> navigation.goBack()}/>
                        
                        <View>
                        <Text style={style.text}>Account</Text>
                        </View>
                </View>

                <View style={style.secCont}>
                        <Image source={require("../../assets/ProfileImage.jpg")} 
                        resizeMode='contain'
                        style={style.image}
                            />
                        
                        <Header type={3}title={user.displayName}/>
                        <Text style={style.text}>ok</Text>
                </View>

                <View style={style.bigCont}>

                        <View style={style.smallCont}>
                            <Header title={102} type={1}/>
                            <Text style={style.text}>Points</Text>
                        </View>
                        
                        <View style={style.smallCont}>
                            <Text style={style.badge}>🏅</Text>
                        </View>

                        <View style={style.smallCont}>
                            <Header title={102} type={1}/>
                            <Text style={style.text}>Ranking</Text>
                        </View>


                </View>

        </View>
            
            
         <View style={[globalStyle.backgroundWhiteCurve, {height:'50%'}]}>

        </View>

        </View>
    )
};

export default Profile;