import React from "react";
import style from "./style";
import { Text, View } from "react-native";
import Button from "../../components/Button/Button";
import globalStyle from "../../assets/styles/globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import { Routes } from "../../navigation/Routes";


const Success =({navigation}) =>{
    return (
        <View style={[globalStyle.backgroundPrimary, globalStyle.flex]}>
            <View style={style.cont}>
                <View style={style.container}>


                    <View style={style.green}>
                        <View style={style.check}>
                         <FontAwesomeIcon size={50} color="white" icon={faCheck}/>
                        </View>
                    </View>




                    <View style={style.header}>
                        <Header type={2} title={'Success'}/>
                    </View>

                    <View style={style.textcont}>
                        <Text style={style.text}>Congratulations, you have</Text>
                        <Text style={style.text}>completed your registration!</Text>
                    </View>

                    <Button 
                    onPress ={()=> {navigation.navigate(Routes.Login)}}
                    type={3}title={'Done'}/>

                </View>
            </View>
        </View>
    )
}

export default Success;