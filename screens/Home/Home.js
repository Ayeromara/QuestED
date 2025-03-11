import React from "react";
import style from "./style";
import { useState,useEffect } from "react";
import { SafeAreaView, View , Text, Pressable, Image, FlatList} from "react-native";
import globalStyle from "../../assets/styles/globalStyles";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import SearchCard from "../../components/SearchCard/SearchCard";
import Badge from "../../components/Badge/Badge";
import { verticalScale } from "../../assets/styles/scaling";
import Search from "../../components/Search/Search";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import Tab from "../../components/Tabs/Tabs";
import { updateSelectedCategoryId } from "../../redux/reducers/Categories";
import { updateSelectedCoursesId } from "../../redux/reducers/Courses";
import { Routes } from "../../navigation/Routes";



const Home = ({navigation}) =>{

    const dispatch = useDispatch();
    // const categories = useSelector(state => state.categories);
    const user = useSelector(state => state.user);
    const courses = useSelector(state => state.courses);

    const [coursesItems, setCoursesItems] = useState([]);
    // const [categoryPage, setCategoryPage] = useState(1);
    // const [categoryList, setCategoryList] = useState([]);
    // const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    // const categoryPageSize = 4;
 
    console.log(coursesItems); 

    useEffect(()=>{
        const items = courses.items
          setCoursesItems(items);
    }, []);
  
    // useEffect(() => {
    //   setIsLoadingCategories(true);
    //   setCategoryList(
    //     pagination(categories.categories, categoryPage, categoryPageSize),
    //   );
    //   setCategoryPage(prev => prev + 1);
    //   setIsLoadingCategories(false);
    // }, []);
  
    // const pagination = (items, pageNumber, pageSize) => {
    //   const startIndex = (pageNumber - 1) * pageSize;
    //   const endIndex = startIndex + pageSize;
    //   if (startIndex >= items.length) {
    //     return [];
    //   }
    //   return items.slice(startIndex, endIndex);
    // };


    return (
    <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex,]}>

        <View style={[ style.okay,{height:'15%',}]}>
            <View style={style.header}>

            <Image source={require("../../assets/ProfileImage.jpg")} 
                resizeMode='contain'
                style={style.image}
                    />

                <View style={style.headertxtcontainer}>
                   
                    <Text style={style.headertxt}>Hello,</Text>
                    <Header title={user.lastName +' '+ user.firstName[0]}/>
                </View>



            </View>
        </View>

        <View style={[globalStyle.backgroundWhiteCurve,{height:'85%'}]}>
            <View style={style.lowercontainer}>

                <View style={style.badge}>
                    <Badge/>
                </View>

                <View style={style.recommend}>
                <Header title={'Select Course'} type={2}/>
                </View>

                {/* <FlatList 
                style={style.flatlist}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                if (isLoadingCategories) {
                    return;
                }
                console.log(
                    'User has reached the end and we are getting more data for page number ',
                    categoryPage,
                );
                setIsLoadingCategories(true);
                let newData = pagination(
                    categories.categories,
                    categoryPage,
                    categoryPageSize,
                );
                if (newData.length > 0) {
                    setCategoryList(prevState => [...prevState, ...newData]);
                    setCategoryPage(prevState => prevState + 1);
                }
                setIsLoadingCategories(false);
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                 data={categoryList} 
                 renderItem={({item})=>(
                 <View style={style.categoryItem} key={item.categoryId}>
                    <Tab 
                    tabId={item.categoryId}
                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                    title={item.name} 
                    isInactive={item.categoryId!== categories.selectedCategoryId}
                    />
                    </View> 
                )}
                /> */}
                <ScrollView showsVerticalScrollIndicator={false}>

                    {coursesItems.length>0 &&(
                <View style={style.coursesItemsContainer}>
                {coursesItems.map(value => (
              <SearchCard
                    onPress= {se}
                    coursesItemId={value.coursesItemId}
                    key={value.coursesItemId}
                    text={value.name}
                    text2={value.coursesTitle}
                    text3={value.year}
              />
            ))}
                </View>
                    )}
                </ScrollView>


            </View>

        </View>

    </SafeAreaView> 
    )
} 

export default Home;