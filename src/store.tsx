import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { resumeReducer } from "./reducer/resumeReducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "app-storage",
  storage,
};

const rootReducer = combineReducers({
  tasks: resumeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
