import React from 'react';

import style from './style';
import {Pressable, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
const BackButton = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon color='white' icon={faChevronLeft} />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
