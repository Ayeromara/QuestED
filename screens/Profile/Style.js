import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    backCont:{
        flexDirection:"row",
        alignItems:'center',
        height: verticalScale(40),
        gap: scaleFontSize(15),
        marginLeft: horizontalScale(20),
        marginTop:verticalScale(10),
    },
    text:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    image:{
        height: verticalScale(100),
        width:horizontalScale(100),
        borderRadius:scaleFontSize(100)
    },
    secCont:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: verticalScale(5),
        gap:verticalScale(10)
    },
    smallCont:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    bigCont:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap: horizontalScale(60),
        marginTop: verticalScale(15)
    },
    badge:{
        fontSize: 30
    },
    lowertxt1:{
        fontSize:scaleFontSize(10),
        fontFamily: 'DMSans-Regular',
        color:'#C8C9FF'
    },
    lowertxt2:{
        fontSize:scaleFontSize(14),
        fontFamily: 'DMSans-Regular',
        color:'#161719'
    },
    lowertxt22:{
        fontSize:scaleFontSize(14),
        fontFamily: 'DMSans-Bold',
        color:'#6360FF'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottom:{
        marginHorizontal: horizontalScale(20),
        marginVertical:verticalScale(20),
        flexDirection:'column',
        gap: verticalScale(15)
    }
})

export default style;