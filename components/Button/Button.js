import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text, View } from "react-native";
import style from "./style";

const Button = (props) =>{
    return(
        <View style={style.btnContainer}>
        <Pressable 
        onPress={()=> props.onPress()} 
        disabled={props.isDisabled} 
        style={[style.button, props.isDisabled && style.disabled]}>
            <Text style={style.title}>{props.title}</Text>
        </Pressable>
        </View>
    );

};
Button.default ={
    isDisabled: false,
    onPress:()=>{},
};
Button.propTypes ={
    title: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func
};

export default Button;