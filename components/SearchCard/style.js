import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    pressable:{
        backgroundColor: '#FCFCFF',
        marginTop: verticalScale(15),
        borderRadius: 15,
        flexDirection: 'row',
        padding: horizontalScale(15),
        alignItems:'center',
    },
    Cardinfo:{
        backgroundColor: '#FF8181',
        borderRadius:20,
        height: horizontalScale(80),
        width: verticalScale(65),
    },
    inside:{
        flex:1,
        justifyContent: 'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:"center",
        gap: horizontalScale(13)
    
    },
    text:{
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