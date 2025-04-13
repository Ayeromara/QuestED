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
    text3:{
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    text1:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    text2:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },
    headertxt:{
        color:'black',
        fontFamily: 'DMSans-SemiBold',
        fontSize:scaleFontSize(20)
    },
    header:{
        marginTop: verticalScale(30),
        width: horizontalScale(306),
        height:verticalScale(66),
        flexDirection:'row',
        alignItems:'center'
    },
    ansCont:{
        width: horizontalScale(320),
        height: verticalScale(50),
        paddingVertical: 10,
        paddingHorizontal:15,
        borderColor: '#33333',
        borderWidth:1,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        marginBottom: verticalScale(15)

    },
    correctOpt:{
        backgroundColor:'#7DC579',
    },
    wrongOpt:{
        backgroundColor:'red',

    },
    progress:{
        flexDirection:'row',
        marginTop:verticalScale(20)
    },
    progressb:{
        flex:1
    }

});

export default style;