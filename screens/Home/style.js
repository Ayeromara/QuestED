import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    header:{
        backgroundColor:'',
        width: horizontalScale(325),
        height: verticalScale(40),
        flexDirection:'row',
        gap: horizontalScale(20),
        paddingHorizontal:horizontalScale(15)
    },
    okay:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headertxt:{
        fontFamily: 'DMSans-Medium',
        fontSize: scaleFontSize(15),
        color:'#FCFCFF'

    },
    headertxt2:{
        fontFamily: 'DMSans-Bold',
        fontSize: scaleFontSize(20),
        color:'#FCFCFF'
    },
    headertxtcontainer:{
        flexDirection:'column',
        gap:horizontalScale(4)
    },
    image:{
        width: verticalScale(40),
        height: verticalScale(40),
        borderRadius: 50,
    },
    lowercontainer:{
        backgroundColor:'',
        height: '100%',
    },
    recommend:{
        marginHorizontal: horizontalScale(30),
        marginTop: verticalScale(20),
        paddingBottom: verticalScale(10)
    }
})

export default style;