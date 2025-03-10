import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      categoryId: 1,
      name: 'Compulsory',
    },
    {
      categoryId: 2,
      name: 'Elective',
    },
    {
      categoryId: 3,
      name: 'Computer Sci',
    },
    {
      categoryId: 4,
      name: 'Extras',
    },
  ],
  selectedCategoryId: 1,
};

export const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;