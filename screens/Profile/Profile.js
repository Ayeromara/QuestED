import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import style from "./Style";
import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { resetToInitialState } from "../../redux/reducers/User";
import { logOut } from "../../api/user";
import { Routes } from "../../navigation/Routes";

const Profile =({navigation}) =>{

        const user = useSelector(state => state.user);
        const dispatch = useDispatch();

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
                        <Text style={style.text}>{user.email}</Text>
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

            <View style={style.bottom}>
                <Text style={style.lowertxt1}>Account Settings</Text>

                <View style={style.row}>
                    <Text style={style.lowertxt2}>Account Security</Text>
                     <FontAwesomeIcon color="#C8C9FF" icon={faChevronRight}/>
                </View>
                <View style={style.row}>
                    <Text style={style.lowertxt2}>Edit Account</Text>
                     <FontAwesomeIcon color="#C8C9FF" icon={faChevronRight}/>
                </View>
                <View style={style.row}>
                    <Text style={style.lowertxt2}>Learning Reminders</Text>
                     <FontAwesomeIcon color="#C8C9FF" icon={faChevronRight}/>
                </View>

                <Text style={style.lowertxt1}>Support</Text>

                <View style={style.row}>
                    <Text style={style.lowertxt2}>About QuestED</Text>
                     <FontAwesomeIcon color="#C8C9FF" icon={faChevronRight}/>
                </View>
                <View style={style.row}>
                    <Text style={style.lowertxt2}>frequently asked questions</Text>
                     <FontAwesomeIcon color="#C8C9FF" icon={faChevronRight}/>
                </View>
                <Pressable 
                style={style.row}
                onPress={async()=>{
                    dispatch(resetToInitialState());
                    await logOut();
                }}>
                    <Text style={style.lowertxt22}>Log Out</Text>
                </Pressable>

            </View>





        </View>

        </View>
    )
};

export default Profile;