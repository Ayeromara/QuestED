import { useEffect, useState } from "react";
import { Linking } from "react-native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { db } from "../../api/user";
import globalStyle from "../../assets/styles/globalStyles";
import SectionCard from "../../components/SectionCard/SectionCard";
import style from "./style";
import BackButton from "../../components/BackButton/BackButton";
import { collection, getDocs, query } from '@react-native-firebase/firestore';


const CourseContent = ({ route, navigation }) => {
  const { courseId } = route.params;
  const [sections, setSections] = useState([]);





  const getSections = async () => {
    try {
        const q = query(collection(db,'Courses1', courseId, 'sections'))
      const sectionsSnapshot =await getDocs(q)
  
      const sections = sectionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSections(sections)
      
      

    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  
  useEffect(() => {
    getSections();
  },[]);

  
  return (
    
    <>
      <View style={[globalStyle.backgroundPrimary, globalStyle.backgroundPrimary, {height:'9%'}]}>
        
      <View style={style.CDetail}>

            <BackButton onPress={()=> navigation.navigate('Home')}/>
            
            <View>
                <Text style={style.text}>Course Content</Text>
            </View>
      </View>
      </View>
      
      
      <View>
        
              <FlatList
                  data={sections}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (


                            <><SectionCard
                          onPress={() => null}
                          type={1}
                          text={item.section} 
                          text2 ={'3 Content'}
                          />

                          
                          
                          <SectionCard
                              onPress={() => Linking.openURL(item.videoURL)}
                              text={item.title}
                              text2 ={'Video'}
                              
                              />

                              

                            <SectionCard
                              onPress={() => Linking.openURL(item.Document)}
                              text={'Section Material'} 
                              text2 ={'Text Document '}
                              />
                              
                          <SectionCard
                              onPress={() => navigation.navigate("QuizWelcome", { sectionId: item.id, courseId })}
                              text={'Quiz'} 
                              text2 ={'Earn Points'}
                              />

                              </>


                  )} />
                
          </View></>
  );
};



export default CourseContent;
