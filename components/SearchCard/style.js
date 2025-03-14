import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    pressable:{
        backgroundColor: '#FCFCFF',
        marginTop: verticalScale(15),
        borderRadius: scaleFontSize(15),
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(15),
        paddingVertical: verticalScale(15),
        alignItems:'center',
        width:horizontalScale(300),
        height: verticalScale(85),
    },
    Cardinfo:{
        backgroundColor: '#FF8181',
        borderRadius: scaleFontSize(15),
        height: horizontalScale(75),
        width: verticalScale(60),
    },
    inside:{
        flexDirection: 'row',
        alignItems:"center",
        gap: horizontalScale(15),
        width:horizontalScale(270),
        height: verticalScale(75),

    
    },
    text:{
        fontFamily: 'DMSans-Medium',
        fontSize:scaleFontSize(12),
        color: '#161719',
        width: horizontalScale(175),
        height:verticalScale(32),
    },
    text2:{
        color:'#161719',
        fontFamily: 'DMSans-Bold',
        fontSize: scaleFontSize(12),
        width: horizontalScale(200),
        height:verticalScale(16),
    },

    text3:{
        color:'#C8C9FF',
        fontSize: scaleFontSize(10),
        width: horizontalScale(200),
        height:verticalScale(15),
    },

    textContainer:{
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems:"left",
        width: horizontalScale(185),
        height:verticalScale(60),
    }

})

export default style;