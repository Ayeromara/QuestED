import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";
import categoryReducer from "./reducers/Categories";
import coursesReducer from "./reducers/Courses";
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer, persistStore} from "redux-persist"


const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    courses: coursesReducer,
})

const configuration ={
    key: 'root',
    storage: AsyncStorage,
    version:1,
}
const persistedReducer = persistReducer(configuration, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>{
        return getDefaultMiddleware({
            serializableCheck: false,
        })
        // .concat(logger);
    }
})

export default store;   
export const persistor = persistStore(store);
persistor.purge();