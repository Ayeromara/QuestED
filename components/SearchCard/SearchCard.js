import React from "react";
import { Pressable, Text, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";

const SearchCard = (props) =>{
    return (
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