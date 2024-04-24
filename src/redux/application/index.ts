import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ApplicationState = {
  onboardingSuccess: boolean;
};

const initialState: ApplicationState = {
  onboardingSuccess: false,
};

const application = createSlice({
  name: 'application',
  initialState,
  reducers: {
    init: () => {
      // do nothing
    },
    onboardingSuccess: (state, action: PayloadAction<boolean>) => {
      state.onboardingSuccess = action.payload;
    },
  },
});

export const {init, onboardingSuccess} = application.actions;

export default application.reducer;
