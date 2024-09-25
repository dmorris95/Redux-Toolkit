import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from './features/exerciseSlice';

export const store = configureStore({
    reducer: {
        exercises: exercisesReducer,
    },
});

export default store;