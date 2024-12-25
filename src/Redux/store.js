import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/AuthSlice.js';
import courseSliceReducer from "./Slices/CourseSlice.js" 
import razorpayReducer from "./Slices/RezorpaySlice.js"
import lectureSliceReducer from './Slices/LectureSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        course:courseSliceReducer,
        razorpay:razorpayReducer,
        lecture: lectureSliceReducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
export default store;