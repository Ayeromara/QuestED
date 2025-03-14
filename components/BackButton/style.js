import {StyleSheet} from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;