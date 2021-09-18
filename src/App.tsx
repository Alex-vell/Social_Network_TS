import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, StoreType} from "./redux/state";


type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            < Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}
                                                              dispatch={props.dispatch}
                                                              newMessageText={state.dialogsPage.newMessageText}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                              dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    )
}

