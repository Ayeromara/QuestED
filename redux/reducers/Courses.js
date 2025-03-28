import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../api/user';

// Async thunk to fetch courses from Firestore
export const fetchCourses = createAsyncThunk('Courses1/fetchCourses', async (_, { rejectWithValue }) => {
    try {
        const snapshot = await db.collection('Courses1').get();
        const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return courses;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const initialState = {
  courses:[],
  selectedCoursesInformation: null,
  selectedCoursesId: null
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
      state.selectedCoursesInformation = state.courses.find(item => item.coursesItemId === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchCourses.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCourses.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = action.payload;
        })
        .addCase(fetchCourses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
}
});
export const {resetCourses, updateSelectedCoursesId} = Courses.actions;
export default Courses.reducer;