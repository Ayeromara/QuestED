import { Pressable, StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    pressable:{
        backgroundColor: '#FCFCFF',
        marginTop:25,
        borderRadius: 10,
        flexDirection: 'row',
        padding: horizontalScale(20),
        alignItems:'center',
    },
    Cardinfo:{
        backgroundColor: '#FF8181',
        borderRadius:20,
        height: horizontalScale(80),
        width: verticalScale(70),
    },
    inside:{
        flex:1,
        justifyContent: 'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:"center"
    
    },
    text:{
        color: 'red',
        fontFamily: 'DMSans-Medium',
        fontSize:scaleFontSize(15),
        color: '#161719',
    },
    text3:{
        color:'#C8C9FF'
    },
    text2:{
        color:'#161719',
        fontFamily: 'DMSans-Bold',
        fontSize: scaleFontSize(15)
    },

    textContainer:{
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems:"left",
        gap:verticalScale(5),
        width: horizontalScale(205)
    }

})

export default style;