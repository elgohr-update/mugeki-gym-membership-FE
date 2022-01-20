import { createStore } from "@reduxjs/toolkit";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";

const reducer = combineReducers({
	user: userSlice,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// const makeStore = () => createStore(reducer);
// export const wrapper = createWrapper(makeStore);

export { store, persistor };
