import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, {useRef, useState} from "react";
import { Pressable, TextInput, View } from "react-native";
import style from "./style";
import { scaleFontSize } from "../../assets/styles/scaling";

const Search = () =>{
    const textInputRef = useRef (null);

    const handleFocus = () =>{
        textInputRef.current.focus();
    };

  

    return (
        <Pressable 
        style={style.searchContainer}
        onPress={handleFocus}>
            <TextInput placeholder="Search" ref={textInputRef} style={style.searchInput}
            />
            <FontAwesomeIcon size={scaleFontSize(20)} icon={faSearch}/>
        </Pressable>
    )
};


export default Search;