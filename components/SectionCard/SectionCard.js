import React from "react";
import { Pressable, Text, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";


const SectionCard = (props) =>{

      const styleToApply = () =>{
        switch (props.type){
            case 1:
                return style.back
            default:
                return style.pressable
        }
    }
      const styleToApply1 = () =>{
        switch (props.type){
            case 1:
                return style.text22
            default:
                return style.text2
        }
    }
      const styleToApply2 = () =>{
        switch (props.type){
            case 1:
                return style.text1
            default:
                return style.text
        }
    }

    return (

        <View style={style.cont}>
        <Pressable
        onPress={()=> {props.onPress(props.onPress())}} 
        style={styleToApply()}>
            <View style={style.inside}>
                <Text style={styleToApply2()}>{props.text}</Text>
                <Text style={styleToApply1()}>{props.text2}</Text>
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