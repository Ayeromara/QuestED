import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { version } from "react";

const style = StyleSheet.create({
    container:{
        backgroundColor:'#FCFCFF',
        borderRadius: scaleFontSize(10),
        width: horizontalScale(310),
        height: verticalScale(40),
        fontSize:scaleFontSize(15),
        flexDirection:'row',
        alignItems:'center',
        gap:horizontalScale(10),
        marginBottom: verticalScale(20)
    },
    cont:{
        justifyContent:"center",
        flexDirection:'row'
    }

})

export default style;