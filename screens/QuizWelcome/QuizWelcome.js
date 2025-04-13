import React from "react";
import { Image, Text, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import style from "./style";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";

const QuizWelcome =({navigation, route}) =>{
    const { sectionId, courseId } = route.params;
    console.log(courseId)
    
    return (
    <View>
      <View style={[ globalStyle.backgroundPrimary, {height:'6%'}]}>
        
      <View style={style.CDetail}>

            <BackButton onPress={()=> navigation.goBack()}/>
            
            <View>
                <Text style={style.text}>Quiz</Text>
            </View>
      </View>
      </View>
      
      
      <View style={[globalStyle.backgroundwhite,{height:'94%'}]}>
        <View style={style.inside}>
            <View>
            <Image source={require("../../assets/quizimg.jpg")} 
                resizeMode='contain'
                style={style.image}
                    />
            </View>

            <View>
                <Text style={style.text1}>Instructions</Text>
            </View>

            <View style={style.descCont}>
                <View style={style.textcont}>
                <Text style={style.text2}>Each Quiz Has Four Options Quiz Progress will be shown At Top Score and Point would be shown at the End</Text>
                </View>
            </View>

            <View style={style.btn}>
                <Button 
                onPress={() => navigation.navigate("Quiz", { sectionId, courseId })}
                type={1} 
                title={'Start'}/>
            </View>
        </View>
        
                
        </View>
    </View>
)
};

export default QuizWelcome;