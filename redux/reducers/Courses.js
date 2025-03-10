import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      name: 'Software Configuration Management and Maintenance',
      coursesTitle: 'CSE 401',
      description:
        'CSE 401 focuses on the principles and practices of software configuration management (SCM) and maintenance throughout the software development lifecycle. This course covers key concepts such as version control, change management, build processes, and deployment strategies. Students will learn to manage software configurations effectively, ensuring that systems are properly maintained and that changes are documented and controlled.',
      coursesItemId: 1,
      categoryIds: [1],
      year: '400 Level First Semester',
    },
    {
      name: 'Software Engineering Project Management',
      coursesTitle:'CSE403',
      description:
        'CSE 403 delves into the methodologies and techniques for managing software engineering projects effectively. This course provides students with a comprehensive understanding of project management principles tailored to software development, including planning, execution, monitoring, and closure. Emphasis is placed on both traditional and agile project management approaches, as well as the tools and skills necessary to lead software teams successfully.',
      coursesItemId: 2,
      categoryIds: [1],
      year: '400 Level First Semester',
    },
    {
      name: 'Software Engineering Professional Practice',
      coursesTitle:'CSE 407',
      description:
        'CSE 407 explores the ethical, legal, and professional aspects of software engineering. This course prepares students to navigate the complexities of the software industry, emphasizing the importance of professional conduct, ethical decision-making, and adherence to industry standards. Students will engage in case studies and discussions that highlight real-world challenges faced by software engineers.',
      coursesItemId: 3,
      categoryIds: [1],
      year: '400 Level First Semester',
    },
    {
      name: 'Software Engineering Security',
      coursesTitle:'CSE 409',
      description:
        'CSE 409 focuses on the critical aspects of security in software engineering. This course equips students with the knowledge and skills needed to design, develop, and maintain secure software systems. Emphasizing both theoretical foundations and practical applications, the course covers security principles, threat modeling, secure coding practices, and risk assessment methodologies.',
      coursesItemId: 4,
      categoryIds: [1],
      year: '400 Level First Semester',
    },
    {
      name: 'Research Methodology',
      coursesTitle:'CSE 405',
      description:
        'CSE 405 provides students with a comprehensive overview of research methodologies applicable to computer science and software engineering. The course covers various research approaches, techniques for data collection and analysis, and the ethical considerations involved in conducting research. Through practical exercises and projects, students will develop the skills necessary to design, conduct, and present research effectively.',
      coursesItemId: 5,
      categoryIds: [1],
      year: '400 Level First Semester',
    },
    {
      name: 'Artificial Intelligence',
      coursesTitle:'CSE 413',
      description:
        'CSE 413 introduces students to the fundamental concepts and techniques in artificial intelligence (AI). The course covers a range of topics, including machine learning, natural language processing, robotics, and expert systems. Students will explore both theoretical foundations and practical applications of AI, preparing them to develop intelligent systems that can solve complex problems.',
      coursesItemId: 6,
      categoryIds: [1],
      year: '400 Level First Semester',
    },

  ],
  selectedCoursesId: null,
};

const Courses = createSlice({
  name: 'courses',
  initialState: initialState,
  reducers: {
    resetCourses: () => {
      return initialState;
    },
    updateSelectedCoursesId: (state, action) => {
      state.selectedCoursesId = action.payload;
    },
  },
});
export const {resetCourses, updateSelectedCoursesId} = Courses.actions;
export default Courses.reducer;