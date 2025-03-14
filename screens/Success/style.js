import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    container:{
        backgroundColor: '#F1F1FA',
        width: horizontalScale(300),
        height: verticalScale(280),
        borderRadius: scaleFontSize(14),
        alignItems:'center'
    },
    cont:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    green:{
        backgroundColor: '#7DC579',
        width: horizontalScale(86),
        height: verticalScale(73),
        borderRadius: 50,
        marginVertical: verticalScale(25),

    },
    check:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    header:{
        marginBottom: verticalScale(15)
    },
    text:{
        fontFamily:'DMSans-Light',
        fontSize: scaleFontSize(18)
    },
    textcont:{
        marginBottom: verticalScale(20)
    }
})

export default style