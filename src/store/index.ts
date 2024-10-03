import {combineReducers} from "redux";
import { configureStore, Tuple } from '@reduxjs/toolkit'
import reducers from "./reducers";

const rootReducer = combineReducers(reducers)

export const store = configureStore({
    reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;