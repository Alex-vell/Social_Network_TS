import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialog-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./store";

const reducers = combineReducers({
    profilePage: dialogReducer,
    dialogsPage: profileReducer,
    sidebar: sidebarReducer
})

export const store: StoreType = createStore(reducers)
