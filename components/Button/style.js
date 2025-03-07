import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    button:{
        backgroundColor: 'white',
        height: verticalScale(48),
        justifyContent: 'center',
        borderRadius: horizontalScale(10)
    },
    title:{
        color: '#FCFCFF',
        fontFamily: 'DMSans-Bold',
        fontSize: 16,
        lineHeight:scaleFontSize(19),
        textAlign:'center'
    },
    disabled:{
        opacity: 0.5
    }
});

export default style;