import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text, View } from "react-native";
import style from "./style";

const Button = (props) =>{
    const styleToApply = () =>{
        switch (props.type){
            case 1:
                return style.title1
            case 2:
                return style.title2
            default:
                return style.title1
        }
    }
    const style1ToApply = () =>{
        switch (props.type){
            case 1:
                return style.button1
            case 2:
                return style.button2
            default:
                return style.title1
        }
    }

    return(
        <View style={style.btnContainer}>
        <Pressable 
        onPress={()=> props.onPress()} 
        disabled={props.isDisabled} 
        style={[style1ToApply(), props.isDisabled && style.disabled]}>
            <Text style={styleToApply()}>{props.title}</Text>
        </Pressable>
        </View>
    );

};
Button.default ={
    isDisabled: false,
    onPress:()=>{},
    title:'',
    type: 1
};
Button.propTypes ={
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func,
    type: PropTypes.number,
};

export default Button;