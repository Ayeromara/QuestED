import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    bottomContainer:{
        flex: 1,
        marginTop: verticalScale(35),
    },
    signupredir:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop: verticalScale(20),

    },
    topContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height: verticalScale(80),
        width:horizontalScale(162)
    },
    error:{
        fontFamily:'DMSans-Medium',
        fontSize: scaleFontSize(16),
        color:'#ff0000',
        marginBottom: verticalScale(15)
    },
    success:{
        fontFamily:'DMSans-Medium',
        fontSize: scaleFontSize(16),
        color:'#28a745',
        marginBottom: verticalScale(15)
    },
    errorCont:{
        flexDirection:'row',
        justifyContent:'center'
    }
});

export default style;