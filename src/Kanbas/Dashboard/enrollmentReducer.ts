import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
    _id: string;
    user: any;
    course: any;
}

const initialState = {
    enrollments: [] as Enrollment[], 
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enrollCourse: (state, { payload: { courseId, userId } }) => {
            if (!state.enrollments.some((enrollment) => enrollment.course === courseId && enrollment.user === userId)) {
                state.enrollments.push({ _id: `${state.enrollments.length + 1}`, user: userId, course: courseId });
            }
        },
        unenrollCourse: (state, { payload: { courseId, userId } }) => {
            state.enrollments = state.enrollments.filter(
                (enrollment) => !(enrollment.course === courseId && enrollment.user === userId)
            );
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;