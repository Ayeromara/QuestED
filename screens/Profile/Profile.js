import React, { useEffect, useId, useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import style from "./Style";
import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { resetToInitialState } from "../../redux/reducers/User";
import { logOut } from "../../api/user";
import { db } from "../../api/user";
import auth from '@react-native-firebase/auth'
import { query,collection,getDocs, orderBy } from "@react-native-firebase/firestore";

const Profile =({navigation}) =>{
    
const user = useSelector(state => state.user);
const dispatch = useDispatch();


const [points, setPoints] = useState(0);
const [leaderboard, setLeaderboard] = useState([]);
const [currentUserData, setCurrentUserData] = useState(null);

console.log(leaderboard)

const userId = auth().currentUser?.uid;

  // Fetch user points
useEffect(() => {
          const unsubscribe = db
            .collection('users')
            .doc(userId)
            .onSnapshot(documentSnapshot => {
              const userData = documentSnapshot.data();
              if (userData) {
                setPoints(userData.points || 0);
              }
            });
      
          // Cleanup listener when screen unmounts
          return () => unsubscribe();
}, []);



useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const q = query(collection(db, 'users'), orderBy('points', 'desc'));
        const snapshot = await getDocs(q);

        const leaderboardData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Sort and assign rank
        const sorted = leaderboardData.sort((a, b) => (b.points || 0) - (a.points || 0));
        const ranked = sorted.map((user, index) => ({
          ...user,
          rank: index + 1, // Rank starts from 1
        }));

        setLeaderboard(ranked);

        // Find current user
        const currentUser = ranked.find(user => user.id === userId);
        setCurrentUserData(currentUser);

      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);


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
                        
                        <Header type={3}title={user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}/>
                        <Text style={style.text}>{user.email}</Text>
                </View>

                <View style={style.bigCont}>

                        <View style={style.smallCont}>
                            <Header title={points} type={1}/>
                            <Text style={style.text}>Points</Text>
                        </View>
                        
                        <View style={style.smallCont}>
                            <Header title={currentUserData ? currentUserData.rank : '...'} type={1}/>
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
                <TouchableOpacity 
                style={style.row}
                onPress={async()=>{
                    dispatch(resetToInitialState());
                    await logOut();
                }}>
                    <Text style={style.lowertxt22}>Log Out</Text>
                </TouchableOpacity>

            </View>





        </View>

        </View>
    )
};

export default Profile;