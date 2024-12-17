import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/AuthSlice.js';
import courseSliceReducer from "./Slices/CourseSlice.js" 
import razorpayReducer from "./Slices/RezorpaySlice.js"

const store = configureStore({
    reducer: {
        auth: authReducer,
        course:courseSliceReducer,
        razorpay:razorpayReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
export default store;