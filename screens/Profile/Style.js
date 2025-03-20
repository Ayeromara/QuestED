import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    backCont:{
        flexDirection:"row",
        alignItems:'center',
        height: verticalScale(40),
        gap: scaleFontSize(15),
        marginLeft: horizontalScale(20),
        marginTop:verticalScale(10),
    },
    text:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    image:{
        height: verticalScale(100),
        width:horizontalScale(100),
        borderRadius:scaleFontSize(100)
    },
    secCont:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: verticalScale(5),
        gap:verticalScale(10)
    },
    smallCont:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    bigCont:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap: horizontalScale(60),
        marginTop: verticalScale(15)
    },
    badge:{
        fontSize: 30
    }
})

export default style;