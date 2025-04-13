import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../api/user';
import { collection, getDocs, orderBy, query } from '@react-native-firebase/firestore';

// Async thunk to fetch courses from Firestore
       export  const fetchLeaderboard = createAsyncThunk('leaderboard/fetchLeaderboard', async (_, { rejectWithValue }) => {
            try {
        
              const q = query(collection(db,'users'), orderBy('points', 'desc'));
                const snapshot = await getDocs(q)
                const leaderboard = snapshot.docs.map((doc, index) => ({ id: doc.id,
                  rank: index + 1,
                     ...doc.data() ,
                    }));
               return leaderboard;
            }  catch (error) {
                return rejectWithValue(error.message);
            }
        });

const initialState = {
  leaderboard:[],
  loading: false,
  error: null,
};


const leaderboardSlice  = createSlice({
  name: 'leaderboard',
  initialState: initialState,
  reducers: {
    resetLeaderboardData: () => initialState
},
extraReducers: (builder) => {
  builder
    .addCase(fetchLeaderboard.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchLeaderboard.fulfilled, (state, action) => {
      state.loading = false;
      state.leaderboard = action.payload;
    })
    .addCase(fetchLeaderboard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
},
});
export const {resetLeaderboardData} = leaderboardSlice.actions;
export default leaderboardSlice.reducer;