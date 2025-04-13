import React from "react";
import { Image, Text, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import style from "./style";
import Button from "../../components/Button/Button";
import auth from '@react-native-firebase/auth';
import { db } from "../../api/user";

const Result =({navigation,route}) =>{
    const {point} = route.params
    const {courseId} = route.params

    async function updateUserPoints(pointsEarned) {
        const userId = auth().currentUser?.uid;
        const userRef = db.collection('users').doc(userId);
      
        try {
          // First get the existing points
          const userDoc = await userRef.get();
          const currentPoints = userDoc.data()?.points || 0;
      
          // Update with new points
          await userRef.update({
            points: currentPoints + pointsEarned,
          });
      
          console.log('Points updated successfully!');
        } catch (error) {
          console.error('Error updating points: ', error);
        }
      }
    return (
        <View style={[globalStyle.backgroundwhite, globalStyle.flex]}>
            <View style={style.cont}>
             <Image source={require("../../assets/Result.jpg")} 
             resizeMode='contain'
            style={style.image}
             />

             <Text style={style.text}>Congratulation!! You Scored {point} Points</Text>

             <Button 
            onPress={()=> {
                navigation.navigate('CourseContent', {courseId: courseId});
                updateUserPoints(point)
            }}
             type={1} 
             title={'Proceed'}/>
            </View>
        </View>
    )
};

export default Result;