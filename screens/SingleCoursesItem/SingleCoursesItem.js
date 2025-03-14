import React from 'react';
import style from './style';
import {useSelector} from 'react-redux';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/styles/globalStyles';
import BackButton from '../../components/BackButton/BackButton';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleCoursesItem = ({navigation, route}) => {
  const coursesItemInformation = useSelector(
    state => state.courses.selectedCoursesInformation,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex]}>

        <View style={{height:'40%'}}>
          <View style={style.topContainer}>

            <View style={style.CDetail}>

              <BackButton onPress={()=> navigation.goBack()}/>
                
                <View>
                  <Text style={style.text}>Course Detail</Text>
                </View>

            </View>

            <View style={style.header1}>
              <View style={style.header}><Header type={3} title={coursesItemInformation.name}/>
              </View>
            </View>

            <View style={style.header1}>
              <View style={style.header}>
                <Header type={1} title={coursesItemInformation.coursesTitle}/>
              </View>
            </View>
         </View>
        </View>

        <View style={[globalStyle.backgroundWhiteCurve, {height:'60%'} ]}>

          <View style={style.bottomContainer}>

            <Text style={style.description}>Description</Text>

            <Text style={style.description2}>{coursesItemInformation.description}</Text>

            <Text style={style.description3}>{coursesItemInformation.lectures}</Text>

            <Button title={'Start Learning'} type={2}/>
          </View>

        </View>


    </SafeAreaView>
  )
};

export default SingleCoursesItem;