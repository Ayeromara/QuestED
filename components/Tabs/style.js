import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#6360FF',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(25),
  },
  inactiveTab: {
    backgroundColor: '#C8C9FF',
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#7171A5',
  },
});

export default style;