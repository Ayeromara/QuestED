import React from "react";
import style from "./style";
import { Text, View, Image, Alert} from "react-native";
import Button from "../Button/Button";

const Badge = () =>{
    return(
        <View style={style.body}>
            <View style={style.container}>

            <View style={style.btn}>
                <Button
                onPress={() => {
                    Alert.alert(
                      'Start Learning',          // Title
                      'Select a Course Bellow to get Started.',    // Message
                      [
                        { text: 'Cancel', style: 'cancel' },
                      ],
                      { cancelable: true }
                    );
                  }}
                 title={'Get Started'} 
                 type={1}/>
            </View>


                <View >
                    <Image source={require("../../assets/image.jpg")} 
                    resizeMode="contain"
                    style={style.image}
                    />
                </View>
            </View>
        </View>
    );

};


export default Badge;