import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    button:{
        backgroundColor: '#6360FF',
        height: verticalScale(48),
        justifyContent: 'center',
        borderRadius: horizontalScale(10),
        flex: 'row',
        alignItems:'center',
        width: horizontalScale(120)
    },
    btnContainer:{
        alignItems:'center',
        justifyContent: 'center',
        flex: 'row',
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