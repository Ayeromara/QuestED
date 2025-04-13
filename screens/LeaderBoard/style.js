import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        flex:1
    },
    backCont:{
        flexDirection:'row',
        textAlign:'center',
        paddingTop:20,
    },
    icon:{
        width:horizontalScale(44),
        height:verticalScale(44)
    },
    leadTxt:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    backIcon:{
    height:verticalScale(30),
    width:horizontalScale(30),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10
    },
    text:{
        fontFamily: 'DMSans-Bold',
        fontSize:scaleFontSize(16),
        color:'#4F4F4F'
    },
    image1:{
        width:horizontalScale(70),
        height:verticalScale(70),
        borderWidth:4,
        borderRadius:50,
        borderColor:'#FF8181'
    },
    image2:{
        width:horizontalScale(70),
        height:verticalScale(70),
        borderWidth:4,
        borderRadius:50,
        borderColor:'#6360FF'
    },
    image3:{
        width:horizontalScale(70),
        height:verticalScale(70),
        borderWidth:4,
        borderRadius:50,
        borderColor:'#FFC960'
    },
    imgCont:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:30
    },
    num1:{
        paddingTop:90,
        flexDirection:'column',
        alignItems:'center'
    },
    num2:{
        paddingTop:0,
        flexDirection:'column',
        alignItems:'center'
    },
    num3:{
        paddingTop:90,
        flexDirection:'column',
        alignItems:'center'
    },
    rank1:{
        backgroundColor:'#6360FF',
        width: horizontalScale(20),
        height:verticalScale(20),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        top:-15
    },
    rank2:{
      backgroundColor:'#FF8181',
      width: horizontalScale(20),
      height:verticalScale(20),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:30,
      top:-15
    },
    rank3:{
      backgroundColor:'#FFC960',
      width: horizontalScale(20),
      height:verticalScale(20),
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:30,
      top:-15
    },
    text1:{
        fontFamily: 'DMSans-Bold',
        fontSize:scaleFontSize(13),
        color:'white'
    },
    crown:{
        bottom:-7
    },
    text2:{
        fontFamily: 'DMSans-SemiBold',
        fontSize:scaleFontSize(14),
    },
    text3:{
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14),
    },
    bottomCont:{
        backgroundColor:'#C8C9FF',
        height:'100%',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        flexDirection:'column',
        alignItems:'center',
        paddingTop:20
        
    },
    topCont:{
        height:'23%',
    },
    children:{
        backgroundColor:'white',
        width: '95%',
        height:verticalScale(48),
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(20),
        marginTop:verticalScale(10),
        marginHorizontal:horizontalScale(9)
    },
    children1:{
        backgroundColor:'#FFFFFf',
        width: '95%',
        height:verticalScale(48),
        borderRadius:15,
        borderColor:'#6360FF',
        borderWidth:4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(20),
        marginTop:verticalScale(10),
        marginHorizontal:horizontalScale(9)
    },
    children2:{
        backgroundColor:'#FFffff',
        borderColor:'#FF8181',
        borderWidth:4,
        width: '95%',
        height:verticalScale(48),
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(20),
        marginTop:verticalScale(10),
        marginHorizontal:horizontalScale(9)
    },
    children3:{
        backgroundColor:'#FFffff',
        borderColor:'#FFC960',
        borderWidth:4,
        width: '95%',
        height:verticalScale(48),
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(20),
        marginTop:verticalScale(10),
        marginHorizontal:horizontalScale(9)
    },
    children4:{
        backgroundColor:'#6360FF',
        width: '95%',
        height:verticalScale(48),
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:horizontalScale(20),
        marginTop:verticalScale(10),
        marginHorizontal:horizontalScale(9)
    },
    image4:{
        width:horizontalScale(30),
        height:verticalScale(30),
        borderWidth:0.7,
        borderRadius:50,
        borderColor:'#4F4F4F'
    },
    iono:{
        flexDirection:'row',
        alignItems:'center',
        gap:15
    },
    text4:{
        fontFamily: 'DMSans-SemiBold',
        fontSize:scaleFontSize(14),
        color: '#4F4F4F'
    },

    text5:{
        fontFamily: 'DMSans-SemiBold',
        fontSize:scaleFontSize(14),
        color: '#ffffff'
    }
})

export default style;