import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    pressable:{
        backgroundColor: '#FCFCFF',
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(25),
        paddingVertical: verticalScale(11),
        width: '100%',
        height: verticalScale(69),
        marginBottom:scaleFontSize(1)
    },
    inside:{
        flexDirection: 'column',
        justifyContent:'center',
        width: horizontalScale(300),
        height: verticalScale(45),
        gap: horizontalScale(10),
    },
    text:{
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14),
        color: '#161719',
        width:horizontalScale(300)
    },
    text1:{
        fontFamily: 'DMSans-SemiBold',
        fontSize:scaleFontSize(14),
        color: '#6360FF',
        width:horizontalScale(300)
    },
    text2:{
        color:'#C8C9FF',
        fontFamily: 'DMSans-Light',
        fontSize: scaleFontSize(13),
    },
    text22:{
        color:'#C8C9FF',
        fontFamily: 'DMSans-Light',
        fontSize: scaleFontSize(13),
    },
    cont:{
        flexDirection:'column',
        alignItems:'center'
    },
    back:{
        backgroundColor: '#E6E6FF',
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(25),
        paddingVertical: verticalScale(11),
        width: '100%',
        height: verticalScale(69),
        marginBottom:scaleFontSize(1)
    }

})

export default style;