import React from "react";
import { Pressable, Text, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import { horizontalScale } from "../../assets/styles/scaling";

const SearchCard = (props) =>{
    return (

        <View style={{marginHorizontal: horizontalScale(15)}}>
        <Pressable
        onPress={()=> props.onPress()} 
        style={style.pressable}>
            <View style={style.inside}>
                <View  style={style.Cardinfo}></View>
                <View style={style.textContainer}>
                <Text style={style.text}>{props.text}</Text>
                <Text style={style.text2}>{props.text2}</Text>
                <Text style={style.text3}>{props.text3}</Text>
                </View>
            </View>
        </Pressable>
        </View>
    )
};

SearchCard.default ={
    onPress:()=>{},
};
SearchCard.propTypes ={
    text: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

export default SearchCard;