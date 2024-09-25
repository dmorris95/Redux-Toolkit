import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exercises: [], // exercise name, duration, calories burned
};

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        addExercise: (state, action) => {
            state.exercises.push(action.payload);
        },
        deleteExercise: (state, action) => {
            state.exercises = state.exercises.filter(
                (exercise) => exercise.id !== action.payload
            );
        },
    },
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;