import { Image, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

 const style = StyleSheet.create({
    body:{
        flex:'row',
        justifyContent:'center',
        marginTop: verticalScale(20)
    },
    container:{
        backgroundColor: '#C8C9FF',
        width: horizontalScale(297),
        height: verticalScale(140),
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:"center",
        borderRadius: 20,
        paddingHorizontal: horizontalScale(10)
    },
    image:{
        width: verticalScale(120),
        height: verticalScale(120),
        borderRadius: 14,

    },
    btn:{
        height:'100%',
        justifyContent:'flex-end',
        marginBottom: horizontalScale(25)
    }

 })

 export default style;