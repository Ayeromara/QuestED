import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import { horizontalScale } from "../../assets/styles/scaling";

const SearchCard = (props) =>{
    return (

        <View>
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=> {props.onPress(props.onPress())}} 
        style={style.pressable}>
            <View style={style.inside}>
                <View style={style.textContainer}>
                <Text style={style.text}>{props.text}</Text>
                <Text style={style.text2}>{props.text2}</Text>
                <Text style={style.text3}>{props.text3}</Text>
                </View>
                <View  style={style.Cardinfo}></View>
            </View>
        </TouchableOpacity>
        </View>
    )
};

SearchCard.default ={
    onPress:()=>{},
};
SearchCard.propTypes ={
    coursesItemId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

export default SearchCard;