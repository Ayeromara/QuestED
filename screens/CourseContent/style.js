import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    CDetail:{
        flexDirection:"row",
        alignItems:'center',
        height: verticalScale(40),
        gap: scaleFontSize(15),
        marginHorizontal:horizontalScale(15),
        marginTop:verticalScale(5)
    },

    text:{
        color:'white',
        fontFamily: 'DMSans-Regular',
        fontSize:scaleFontSize(14)
    },


});

export default style;