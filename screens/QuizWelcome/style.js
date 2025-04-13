import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    CDetail:{
        flexDirection:"row",
        alignItems:'center',
        height: verticalScale(25),
        gap: scaleFontSize(15),
        marginHorizontal:horizontalScale(15),
        marginTop:verticalScale(5)
    },

    text:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    image:{
        width: verticalScale(280),
        height: verticalScale(200),
        borderRadius: 50,
        marginTop:verticalScale(48)
    },
    inside:{
        flexDirection:'column',
        alignItems:'center'
    },
    text1:{
        fontFamily: 'DMSans-Bold',
        fontSize:scaleFontSize(20),
        marginTop:verticalScale(38)
    },
    descCont:{
        backgroundColor:'#6360FF',
        width: horizontalScale(300),
        height: verticalScale(135),
        borderRadius: scaleFontSize(15),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:verticalScale(15)
    },
    text2:{
        color:'white',
        fontFamily: 'DMSans-Bold',
        fontSize: scaleFontSize(20),
        textAlign:'center'
    },
    textcont:{
        width: horizontalScale(255),
        height: verticalScale(104),
    },
    btn:{
        marginTop:verticalScale(15)
    }

});

export default style;