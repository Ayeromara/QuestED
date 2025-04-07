import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    pressable:{
        backgroundColor: '#FCFCFF',
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(25),
        paddingVertical: verticalScale(11),
        width: '100%',
        height: verticalScale(65),
    },
    inside:{
        flexDirection: 'column',
        width: horizontalScale(300),
        height: verticalScale(36),
        gap: horizontalScale(10),


    
    },
    text:{
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14),
        color: '#161719',
        width:horizontalScale(300)
    },
    text2:{
        color:'#C8C9FF',
        fontFamily: 'DMSans-Light',
        fontSize: scaleFontSize(12),
    },
    cont:{
        flexDirection:'column',
        alignItems:'center'
    }

})

export default style;