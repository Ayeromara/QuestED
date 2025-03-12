import React, {useState} from "react";
import { Image, Pressable, SafeAreaView, View } from "react-native";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Routes } from "../../navigation/Routes";



const SignUp = ({navigation})=>{

    const [fullName, setFullName] = useState('')
    const [matricNo, setMatricNo] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex]}>



                <View style={{height:'35%'}}>
                    <View style={style.topContainer}> 

                    <Image source={require("../../assets/Questedlogo.png")} 
                    resizeMode="contain"
                    />


                    </View>

                </View>


                <View  style={[globalStyle.backgroundWhiteCurve,{height:'65%'}]}>

                <View style={style.bottomContainer}>

                    <Input 
                    type={3} 
                    placeholder={'First & Last Name'} onChangeText={(value) => setFullName(value)}/>
                    <Input 
                    keyboardType = {'numeric'}
                    type={1} 
                    placeholder={'Matriculation No'} onChangeText={(value) => setMatricNo(value)}/>

                    <Input 
                    secureTextEntry= {true}
                    type={2} 
                    placeholder={'Password'}
                    onChangeText={(value) => setPassword(value)}/>

    
                <Button type={2} title={'Sign Up'}/>

                <Pressable  onPress={()=>{navigation.navigate(Routes.Login)}}>
                        <View style={style.signupredir}>
                    <Header type={4} title={"Alreadys have an account?"}/>
                    </View>
                </Pressable>

                </View>
                </View>



        </SafeAreaView>
    )
};

export default SignUp;