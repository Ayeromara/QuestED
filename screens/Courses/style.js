import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    coursesItemsContainer:{
        flexDirection:'column',
        alignItems:'center'
    },
    top:{
        height:'10%',
        paddingHorizontal:horizontalScale(20),
        paddingVertical:verticalScale(9)
    },
    bottom:{
        height:'90%',
        backgroundColor:'#F1F1FA',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    CDetail:{
        flexDirection:"row",
        alignItems:'center',
        height: verticalScale(40),
        gap: scaleFontSize(15)
    },
    text:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    text1:{
        fontFamily: 'DMSans-Bold',
        fontSize:scaleFontSize(14)
    },
    textView:{
        padding:25,
        paddingHorizontal:horizontalScale(55)
    }
})

export default style;