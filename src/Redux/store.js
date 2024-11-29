import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/AuthSlice.js';
import courseSliceReducer from "./Slices/CourseSlice.js" 

const store = configureStore({
    reducer: {
        auth: authReducer,
        course:courseSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});
export default store;