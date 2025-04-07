import { useEffect, useState } from "react";
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

            <BackButton onPress={()=> navigation.goBack()}/>
            
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
                          text={item.section} 
                          text2 ={'3 Content'}
                          />
                          
                          <SectionCard
                              onPress={() => navigation.navigate("VideoPlayer", { videoUrl: item.videoUrl, sectionId: item.id, courseId })}
                              text={item.title}
                              text2 ={'Video'}
                              />

                          <SectionCard
                              onPress={() => navigation.navigate("Quiz", { sectionId: item.id, courseId })}
                              text={'Quiz'} 
                              text2 ={'Earn Points'}
                              />
                          <SectionCard
                              onPress={() => navigation.navigate("CourseDocument", { section: item })}
                              text={'Section Material'} 
                              text2 ={'Text Document '}
                              />
                              </>


                  )} />
          </View></>
  );
};

export default CourseContent;
