import React from "react";
import { useEffect, useState } from "react";
import { Image, Pressable, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../api/user";
import auth from '@react-native-firebase/auth'
import { collection, getDocs, orderBy, query } from "@react-native-firebase/firestore";


const LeaderBoard =({navigation}) =>{


const [leaderboard, setLeaderboard] = useState([]);
const [loading, setLoading] = useState(true);
const [currentUserData, setCurrentUserData] = useState(null);


const topThree = leaderboard.slice(0, 3);
const rest = leaderboard.slice(3);



useEffect(() => {
    const userId = auth().currentUser?.uid;

    const fetchLeaderboard = async () => {
      try {
        const q = query(collection(db,'users'), orderBy('points', 'desc'));
        const snapshot = await getDocs(q)
        const leaderboarddata = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),

        }));

            // Sort users by points descending
    const sorted = leaderboarddata.sort((a, b) => (b.points || 0) - (a.points || 0));

    // Assign rank to each user
    const ranked = sorted.map((user, index) => ({
      ...user,
      rank: index + 1, // 1-based rank
    }));

        setLeaderboard(ranked)


        // Find the current user's rank and data
        const currentUserdata = ranked.find(user => user.id === userId);
        setCurrentUserData(currentUserdata)

        setLoading(false);
      } catch (error) {
        const realError = error instanceof Error ? error : new Error(JSON.stringify(error));
        console.error('Error fetching leaderboard:', realError);
        setLoading(false);
      }
    };



    fetchLeaderboard();
  }, []);


console.log(currentUserData)






  if (loading) return 
  (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
        </View>)







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
                <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                style={style.backIcon}>
                    <FontAwesomeIcon color="#4F4F4F" icon={faArrowLeft}/>
                </TouchableOpacity>

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
            showsVerticalScrollIndicator={false}
            data={rest}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            />


            
        </View>

    </View>
)
};

export default LeaderBoard;