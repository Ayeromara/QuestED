import { useEffect, useId, useState } from "react";
import { View, Text, TouchableOpacity, Alert, Pressable } from "react-native";
import { db } from "../../api/user";
import auth from '@react-native-firebase/auth'
import { query,collection,getDoc,doc,getDocs } from "@react-native-firebase/firestore";
import globalStyle from "../../assets/styles/globalStyles";
import style from "./style";
import BackButton from "../../components/BackButton/BackButton";
import { horizontalScale } from "../../assets/styles/scaling";
import Button from "../../components/Button/Button";
import * as Progress from 'react-native-progress'

const Quiz = ({ navigation,route }) => {
    const { sectionId, courseId } = route.params;
    const [quiz, setQuiz] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setisCorrect] = useState(null);
    const [point, setPoint] = useState(null);
    const [userData, setUserData] = useState(null);
    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

    const progress = [currentQuestionIndex + 1] / quiz.length;
    console.log(userData)

    const userId = auth().currentUser?.uid;


   const handleNext =()=>{
    if (currentQuestionIndex === quiz.length-1){
        // return;
        navigation.navigate('Result', {point: point, courseId:courseId} )
    }else{
        setcurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setisCorrect(null);
    }
   }




      const fetchQuiz = async () => {
        try{
        const q = query(collection(db, "Courses1", courseId, "sections", sectionId, "quiz"))

        const quizSnapshot = await getDocs(q);
        const quizData = quizSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setQuiz(quizData);
      }
     catch (error) {
        console.error("Error fetching sections:", error);
      }
    }
  

    

    const fetchUserData = async () => {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists) {
          setUserData(userSnap.data());
        }
      }

      useEffect(() => {
      fetchQuiz();
      fetchUserData();
    }, [courseId, sectionId, userId]);

    const handleOptionPress = async (pressedOption)=>{
        setSelectedOption(pressedOption);
    
        const isAnswerCorrect = quiz[currentQuestionIndex].answer === pressedOption
    
        setisCorrect(isAnswerCorrect)
    
        if(isAnswerCorrect){
            setPoint(prevPoint => prevPoint + 5)
        }
       }
    
    return (
        <><View style={[globalStyle.backgroundPrimary, globalStyle.backgroundPrimary, { height: '6%' }]}>

            <View style={style.CDetail}>

                <BackButton onPress={() => navigation.goBack()} />

                <View>
                    <Text style={style.text}>Quiz</Text>
                </View>
            </View>
        </View>
        
        <View style={[globalStyle.backgroundwhite,{ height: '94%' } ]}>
            
            <View style={{marginHorizontal:horizontalScale(20)}}>
                <View style={style.progress}>
                    <View style={style.progressb}>
            <Progress.Bar progress={progress} width={null} height={20} color="#6360FF"/>
            </View>
            </View>

            {quiz && quiz.length > 0 ? (
                <>
                <View style={style.header}>
                                <Text style={style.headertxt}>{quiz[currentQuestionIndex].question}</Text></View>
                {quiz[currentQuestionIndex].options.map((option, index) => (
                    <Pressable 
                    onPress={()=> handleOptionPress(option)}
                    style={[
                        style.ansCont,
                        selectedOption === option && (
                            isCorrect ? style.correctOpt : style.wrongOpt
                        )
                    ]} 
                    key={index}
                    disabled={!!selectedOption}>
                        <Text
                        style={[
                        style.text3,
                        selectedOption === option && (
                            isCorrect ? style.text1 : style.text2
                        )
                    ]} 
                        >{option}</Text>
                    </Pressable>
                ))}
                </>
            ): (
                <Text>No quiz data available.</Text>
        )}

        <Button 
        onPress={handleNext}
        type={1} 
        title={currentQuestionIndex === quiz.length-1 ? 'Finish' : 'Next'}/>
            </View>
            </View></>
)
};

export default Quiz; 