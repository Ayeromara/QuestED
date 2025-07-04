import React, {useState} from "react";
import { Image, Pressable, SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import style from "./style";
import globalStyle from "../../assets/styles/globalStyles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Routes } from "../../navigation/Routes";
import { loginUser } from "../../api/user";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/reducers/User";


const Login = ({navigation})=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch();

    
    return (
        <SafeAreaView style={[globalStyle.backgroundPrimary, globalStyle.flex]}>



                <View style={{height:'50%'}}>
                    <View style={style.topContainer}> 

                    <Image 
                    style={style.image}
                    source={require("../../assets/Questedlogo.png")} 
                    resizeMode="contain"
                    />


                    </View>

                </View>


                <View  style={[globalStyle.backgroundWhiteCurve,{height:'50%'}]}>

                <View style={style.bottomContainer}>

                    <Input 
                    type={4} 
                    placeholder={'Matric number'} onChangeText={(value) => setEmail(value)}/>

                    <Input 
                    secureTextEntry= {true}
                    type={2} 
                    placeholder={'Password'}
                    onChangeText={(value) => setPassword(value)}/>

                    <View style={style.errorCont}>
                        {error.length >0 && <Text style={style.error}>{error}</Text>}
                    </View>

                <Button 
                onPress={async ()=> {let user = await loginUser(email, password);
                    if (!user.status){
                        setError(user.error);
                    }
                    else {
                        setError('')
                        dispatch(logIn(user.data))
                        navigation.navigate(Routes.MainApp, { screen: (Routes.Home) });

                    }
                }}
                type={2} 
                title={'Login'}
                isDisabled ={email.length < 5 || password.length< 8}
                />



                <TouchableOpacity onPress={()=>{navigation.navigate(Routes.SignUP)}}>
                        <View style={style.signupredir}>
                    <Header type={4} title={"Don't have an account?"}/>
                    </View>
                </TouchableOpacity>


                </View>
                </View>



        </SafeAreaView>
    )
};

export default Login;