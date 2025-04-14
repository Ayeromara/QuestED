import React, {useEffect, useState} from "react";
import { Image, Pressable, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Routes } from "../../navigation/Routes";
import { createUser } from "../../api/user";



const SignUp = ({navigation})=>{

    const [fullName, setFullName] = useState('')
    const [matricNo, setMatricNo] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

   
    return (
        <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex]}>



                <View style={{height:'35%'}}>
                    <View style={style.topContainer}> 


                    <Image 
                    style={style.image}
                    source={require("../../assets/Questedlogo.png")} 
                    resizeMode="contain"
                    />


                    </View>

                </View>


                <View  style={[globalStyle.backgroundWhiteCurve,{height:'65%'}]}>

                <View style={style.bottomContainer}>

                    <Input 
                    type={3} 
                    placeholder={'First & Last Name'} 
                    onChangeText={(value) => setFullName(value)}/>

                    <Input 
                    keyboardType={'email-address'}
                    type={4} 
                    placeholder={'Email'}
                    onChangeText={(value) => setEmail(value)}/>     

                    <Input 
                    keyboardType = {'numeric'}
                    type={1} 
                    placeholder={'Matriculation No'} onChangeText={(value) => setMatricNo(value)}/>

                    <Input 
                    secureTextEntry= {true}
                    type={2} 
                    placeholder={'Password'}
                    onChangeText={(value) => setPassword(value)}
                    />

                    <View style={style.errorCont}>
                        {error.length >0 && <Text style={style.error}>{error}</Text>}
                    </View>
                    <View style={style.errorCont}>
                        {success.length >0 && <Text style={style.success}>{success}</Text>}
                    </View>

                    


                <Button 
                isDisabled ={
                    fullName.length <= 2 || email.length <= 5 || matricNo.length <= 10 || password.length <= 8}
                type={2} 
                title={'Sign Up'} 
                onPress={async ()=> {
                    let user = await createUser(fullName, email, password, matricNo);
                    if (user.error){
                        setError(user.error);
                    }
                    else {
                        setError('')
                        navigation.navigate(Routes.Success)
                        
                    }
                    }}
                    
                />




                <TouchableOpacity  onPress={()=>{navigation.navigate(Routes.Login)}}>
                        <View style={style.signupredir}>
                    <Header type={4} title={"Alreadys have an account?"}/>
                    </View>
                </TouchableOpacity>

                </View>
                </View>



        </SafeAreaView>
    )
};

export default SignUp;