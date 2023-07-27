import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const countriesSlice = createSlice({
    name: 'countries',
    initialState: null,
    reducers: {
        setCountriesGlobal: (state, action) => action.payload
    }
})

export const {setCountriesGlobal} = countriesSlice.actions

export default countriesSlice.reducer

//Countries by Lenguage: Spanish
export const getCountriesLengThunk = () => (dispatch) => {
    const URL =  'https://restcountries.com/v3.1/lang/spanish'
    return axios.get(URL)
        .then(res => dispatch(setCountriesGlobal(res.data)))
        .catch(err => console.log(err))
}



