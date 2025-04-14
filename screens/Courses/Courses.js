import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import SearchCard from '../../components/SearchCard/SearchCard';
import { Routes } from '../../navigation/Routes';
import globalStyle from '../../assets/styles/globalStyles';
import BackButton from '../../components/BackButton/BackButton';

const Courses = ({navigation}) => {
  const [startedCourses, setStartedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = auth().currentUser?.uid;

  console.log(startedCourses)

  useEffect(() => {
    const fetchStartedCourses = async () => {
      try {
        const userDoc = await firestore().collection('users').doc(userId).get();
        const userData = userDoc.data();

        if (userData && userData.startedCourses  && userData.startedCourses.length > 0) {
            const coursePromises = userData.startedCourses.map(async (courseId) => {
                const courseDoc = await firestore().collection('Courses1').doc(courseId).get();
                return { id: courseDoc.id, ...courseDoc.data() };
              });
    
              const coursesData = await Promise.all(coursePromises);
          setStartedCourses(coursesData);
        } else {
          setStartedCourses([]);
        }
      } catch (error) {
        console.error('Error fetching started courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStartedCourses();
  }, []);

  const renderCourse = ({ item }) => (
    <View style={style.coursesItemsContainer}>
    <SearchCard
    onPress= {()=>navigation.navigate(Routes.SingleCoursesItem, { course: item })
    }
    text={item.name}
    text2={item.coursesTitle}
    text3={item.year}
/>
</View>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (startedCourses.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No courses started yet.</Text>
      </View>
    );
  }

  return (

    <View style={[globalStyle.backgroundPrimary, globalStyle.flex,]}>

        <View style={style.top}>
                <View style={style.CDetail}>

                    <BackButton onPress={()=> navigation.goBack()}/>
                    
                    <View>
                        <Text style={style.text}>My Courses</Text>
                    </View>

                </View >
        </View>

        <View style={style.bottom}>
            <View style={style.textView}>
                <Text style={style.text1}>In Progress</Text>
            </View>

            
            <View style={{marginTop:-17}}>
            <FlatList
        data={startedCourses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourse}
        showsVerticalScrollIndicator={false}
      />
            </View>
        </View>
    </View>

  );
};

export default Courses;
