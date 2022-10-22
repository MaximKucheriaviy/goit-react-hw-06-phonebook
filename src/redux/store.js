import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./slices";

export const store = configureStore({
    reducer:{
        contacts: contactsSlice.reducer
    }
})