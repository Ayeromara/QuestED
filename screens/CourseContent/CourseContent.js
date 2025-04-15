import { useEffect, useState } from "react";
import { ActivityIndicator, Linking } from "react-native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { db } from "../../api/user";
import globalStyle from "../../assets/styles/globalStyles";
import SectionCard from "../../components/SectionCard/SectionCard";
import style from "./style";
import BackButton from "../../components/BackButton/BackButton";
import { collection, getDocs, query } from '@react-native-firebase/firestore';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


const CourseContent = ({ route, navigation }) => {
  const { courseId } = route.params;
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(sections)



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
    }finally {
      setLoading(false);
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
      
      
      <View style={{height:'90%'}} >
      {loading ? (
  <><ActivityIndicator size="large" color="#0000ff" /><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#000" />
          </View></>) : (
              <FlatList
                  data={sections}
                  showsVerticalScrollIndicator={false}
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


                  )} 
                  ListEmptyComponent={
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                      <Text style={{ fontSize: 16, color: 'gray' }}>
                        No content available for this course.
                      </Text>
                    </View>
                  }
                  />
                )}
                
          </View></>
  );
};



export default CourseContent;
