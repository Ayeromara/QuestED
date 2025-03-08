import { Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

 const style = StyleSheet.create({
    body:{
        flex:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop: verticalScale(15)
    },
    container:{
        backgroundColor: '#C8C9FF',
        width: horizontalScale(297),
        height: verticalScale(140),
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:"center",
        borderRadius: 14,
        paddingHorizontal: horizontalScale(10)
    },
    image:{
        width: verticalScale(120),
        height: verticalScale(120),
        borderRadius: 14,

    },
    btn:{
        bottom: 1
    }

 })

 export default style;