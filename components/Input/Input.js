import React, { useRef, useState }  from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import PropTypes from "prop-types"
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faIdCardClip, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";

const Input =(props)=>{
        const textInputRef = useRef (null);

    const handleFocus = () =>{
        textInputRef.current.focus();
    };
    const [value, setValue] = useState('');
    const style1ToApply = () =>{
        switch (props.type){
            case 1:
                return faIdCardClip
            case 2:
                return faLock
            case 3:
                return faUser
            case 4:
                return faEnvelope
            default:
                return style.title1
        }
    }


    return (
        <View>
            <View style={style.cont}>
                <Pressable 
                style={style.container}
                onPress={handleFocus}>
                <FontAwesomeIcon style={{marginLeft: horizontalScale(20)}}color="#6360FF" size={scaleFontSize(20)} icon={style1ToApply()}/>
                <TextInput 
                secureTextEntry={props.secureTextEntry}
                keyboardType= {props.keyboardType}
                ref={textInputRef} 
                style={style.textInput}
                placeholder={props.placeholder} 
                value={value} 
                onChangeText ={(val)=> {setValue(val); props.onChangeText(val)}}/>
                </Pressable>
            </View>
        </View>
    )
}
Input.defaultProps ={
    onChangeText:()=>{},
    keyboardType: 'default',
    secureTextEntry: false
}

Input.propTypes={
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.number,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool

}

export default Input;