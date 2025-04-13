import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({

image:{
    width: verticalScale(300),
    height: verticalScale(300),
    borderRadius: 50,
    marginTop:verticalScale(48)
},
cont:{
    flexDirection:'column',
    alignItems:'center'
},
text:{
    fontFamily: 'DMSans-ExtraBold',
    fontSize: scaleFontSize(16),
    textAlign:'center',
    marginBottom:verticalScale(35)
}

});

export default style;