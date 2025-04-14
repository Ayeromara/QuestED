import React from 'react';
import style from './style';
import {useSelector} from 'react-redux';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyles';
import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Routes } from '../../navigation/Routes';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SingleCoursesItem = ({navigation, route}) => {

  const { course } = route.params;

  const handleStartLearning = async (course) => {
    const userId = auth().currentUser?.uid;
    try {
      const userRef = firestore().collection('users').doc(userId);
  
      await userRef.set({
        startedCourses: firestore.FieldValue.arrayUnion(course),
      }, { merge: true });
  
      console.log('Course added to started courses');
    } catch (error) {
      console.error('Error adding course to startedCourses:', error);
    }
  };


  return (
    <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex]}>

        <View style={{height:'40%'}}>
          <View style={style.topContainer}>

            <View style={style.CDetail}>

              <BackButton onPress={()=> navigation.goBack()}/>
                
                <View>
                  <Text style={style.text}>Course Detail</Text>
                </View>

            </View >

                  <View style={style.headercont}>
                    <View style={style.header1}>
                      <View style={style.header}><Header type={3} title={course.name}/>
                      </View>
                    </View>

                    <View style={style.header1}>
                      <View style={style.header}>
                        <Header type={1} title={course.coursesTitle}/>
                      </View>
                    </View>
                </View>
            </View>
        </View>

        <View style={[globalStyle.backgroundWhiteCurve, {height:'60%'} ]}>

          <View style={style.bottomContainer}>

              <Text style={style.description}>Description</Text>

              <Text style={style.description2}>{course.description}</Text>

              <Text style={style.description3}>{course.lectures}</Text>

              <Button title={'Start Learning'} type={2} onPress={() => 
                navigation.navigate(Routes.CourseContent, { courseId: course.id },
                  handleStartLearning(course.id)

                )}/>
          </View>

        </View>


    </SafeAreaView>
  )
};

export default SingleCoursesItem;