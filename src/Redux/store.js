import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/AuthSlice.js';
import courseSliceReducer from "./Slices/CourseSlice.js" 
import razorpayReducer from "./Slices/RezorpaySlice.js"
import lectureSliceReducer from './Slices/LectureSlice.js'
import statSliceReducer from './Slices/StatSlice.js';


const store = configureStore({
    reducer: {
        auth: authReducer,
        course:courseSliceReducer,
        razorpay:razorpayReducer,
        lecture: lectureSliceReducer,
        stat: statSliceReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
export default store;