import React from "react";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View, FlatList } from "react-native";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faCrown } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../api/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaderboard } from "../../redux/reducers/Leaderboard";
import auth from '@react-native-firebase/auth'

const LeaderBoard =({navigation}) =>{

const dispatch = useDispatch();
const { leaderboard, loading, error } = useSelector((state) => state.leaderboard);

const topThree = leaderboard.slice(0, 3);
const rest = leaderboard.slice(3);



const userId = auth().currentUser?.uid;

const currentUserData = leaderboard.find(user => user.id === userId);



useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;






const renderItem = ({ item }) => (
    <View style={style.children}>
        <View style={style.iono}>
            <Text style={style.text4}>{item.rank}</Text>
            <Image source={require("../../assets/ProfileImage.jpg")} 
            resizeMode='contain'
            style={style.image4}/>
            <Text style={style.text4}>{item.name}</Text>
        </View>

        <Text style={style.text4}>{item.points} pts</Text>

</View>
  );
  


    return (
    <View style={style.container}>

        <View style={style.topCont}>
            <View style={style.backCont}>
                <Pressable 
                onPress={()=> navigation.goBack()}
                style={style.backIcon}>
                    <FontAwesomeIcon color="#4F4F4F" icon={faArrowLeft}/>
                </Pressable>

                <View style={style.leadTxt}>
                    <Text style={style.text}>Leaderboard</Text>
                </View>
            </View>

            <View>
                        <View style={style.children4}>
                        <View style={style.iono}>
                            <Text style={style.text5}>{currentUserData.rank}</Text>
                            <Image source={require("../../assets/ProfileImage.jpg")} 
                            resizeMode='contain'
                            style={style.image4}/>
                            <Text style={style.text5}>You</Text>
                        </View>
                
                        <Text style={style.text5}>{currentUserData.points} pts</Text>
                
                </View>
            </View>

        </View>


        <View style={style.bottomCont}>
                    <View>
                    {topThree.map((user, index) => (
                        <View  key={user.id}>
                            {
                            index === 0 &&
                            <View style={style.children1}>
                            <View style={style.iono}>
                                <Text style={style.text4}>{user.rank}</Text>
                                <Image source={require("../../assets/ProfileImage.jpg")} 
                                resizeMode='contain'
                                style={style.image4}/>
                                <Text style={style.text4}>{user.name}</Text>
                            </View>
        
                            <Text style={style.text4}>{user.points} pts</Text>
        
                        </View>
                             }
                            {
                            index === 1 &&
                            <View style={style.children2}>
                            <View style={style.iono}>
                                <Text style={style.text4}>{user.rank}</Text>
                                <Image source={require("../../assets/ProfileImage.jpg")} 
                                resizeMode='contain'
                                style={style.image4}/>
                                <Text style={style.text4}>{user.name}</Text>
                            </View>
        
                            <Text style={style.text4}>{user.points} pts</Text>
        
                        </View>
                             }
                            {
                            index === 2 &&
                            <View style={style.children3}>
                            <View style={style.iono}>
                                <Text style={style.text4}>{user.rank}</Text>
                                <Image source={require("../../assets/ProfileImage.jpg")} 
                                resizeMode='contain'
                                style={style.image4}/>
                                <Text style={style.text4}>{user.name}</Text>
                            </View>
        
                            <Text style={style.text4}>{user.points} pts</Text>
        
                        </View>
                             }

                </View>
                    ))}
                </View>

            <FlatList
            data={rest}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            />


            
        </View>

    </View>
)
};

export default LeaderBoard;