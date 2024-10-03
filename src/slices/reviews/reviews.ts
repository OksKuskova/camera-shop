import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import { Review } from '../../types/review';
import { RequestStatus } from '../../const';
import { State } from '../../store/type';
import { fetchReviews } from '../../thunk-actions/reviews';

type ReviewsState = {
  reviews: Review[];
  requestStatus: RequestStatus;
}

const initialState: ReviewsState = {
  reviews: [],
  requestStatus: RequestStatus.Idle,
};

const reviewsSlice = createSlice({
  name: SliceName.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.requestStatus = RequestStatus.Failed;
      });
  },
});

export const getReviews = (state: State) => state[SliceName.Reviews].reviews;
export const getStatus = (state: State) => state[SliceName.Reviews].requestStatus;
// export const {} = counterSlice.actions;
export default reviewsSlice;
