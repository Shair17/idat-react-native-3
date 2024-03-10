import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/slices';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
