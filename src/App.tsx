import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

type PropsType = {
    store: StoreType
}

export const App: React.FC<PropsType> = (props) => {

    return (
        <div className='app-wrapper'>
            < Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                />}/>
                <Route path='/profile' render={() => <Profile store={props.store}
                />}/>
            </div>
        </div>
    )
}

