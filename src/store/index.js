import { configureStore } from "@reduxjs/toolkit";
import countries from './slices/countries.slice'

export default configureStore({
    reducer: {
        countries
    }
})