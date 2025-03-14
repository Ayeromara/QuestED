import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    topContainer:{
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(20),
    },
    header:{
        width: horizontalScale(288),

    },
    header1:{
        flexDirection:'column',
        alignItems:"center"
    },
    CDetail:{
        flexDirection:"row",
        alignItems:'center',
        height: verticalScale(40),
        gap: scaleFontSize(15)
    },
    headercont:{
        gap:scaleFontSize(20),
        marginTop: verticalScale(25)
    },
    text:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    bottomContainer:{
        flex:1,
        marginTop:verticalScale(20),
        marginHorizontal: horizontalScale(30),
        flexDirection:'column',
        gap: verticalScale(15)
    },
    description:{
        color:'#8183FD',
        fontFamily: 'DMSans-Regular',
        fontSize: scaleFontSize(12)
    },
    description2:{
        color:'#161719',
        fontFamily: 'DMSans-Regular',
        fontSize: scaleFontSize(14),
        letterSpacing: scaleFontSize(0.7)
    },
    description3:{
        color:'#BBBBFF',
        fontFamily: 'DMSans-Medium'
    }
});

export default style;