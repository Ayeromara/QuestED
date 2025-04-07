import React from "react";
import { Pressable, Text, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";


const SectionCard = (props) =>{
    return (

        <View style={style.cont}>
        <Pressable
        onPress={()=> {props.onPress(props.onPress())}} 
        style={style.pressable}>
            <View style={style.inside}>
                <Text style={style.text}>{props.text}</Text>
                <Text style={style.text2}>{props.text2}</Text>
            </View>
        </Pressable>
        </View>
    )
};

SectionCard.default ={
    onPress:()=>{},
};
SectionCard.propTypes ={
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

export default SectionCard;