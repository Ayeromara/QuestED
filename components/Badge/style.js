import { Image, StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

 const style = StyleSheet.create({
    body:{
        flex:'row',
        justifyContent:'center',
        marginTop: verticalScale(20)
    },
    container:{
        backgroundColor: '#C8C9FF',
        width: horizontalScale(297),
        height: verticalScale(120),
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:"center",
        borderRadius: 20,
        paddingHorizontal: horizontalScale(7)
    },
    image:{
        width: verticalScale(110),
        height: verticalScale(110),
        borderRadius: scaleFontSize(14),

    },
    btn:{
        flex:1,
        height:verticalScale(110),
        justifyContent:'flex-end',
        marginBottom: horizontalScale(25),
    }

 })

 export default style;