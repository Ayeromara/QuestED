import React from 'react';

import style from './style';
import {useSelector} from 'react-redux';

const SingleCoursesItem = () => {
  const coursesItemInformation = useSelector(
    state => state.courses.selectedCoursesInformation,
  );
  console.log(coursesItemInformation);
  return null;
};

export default SingleCoursesItem;