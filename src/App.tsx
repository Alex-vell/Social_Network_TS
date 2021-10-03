import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Settings} from "./Components/Settings/Settings";

/*type PropsType = {
    //store: StoreType
    //dispatch: (action: ActionsTypes) => void
}*/

export const App: React.FC/*<PropsType>*/ = (props) => {
    console.log(React.version);
    return (
        <div className='app-wrapper'>
            < Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer //store={props.store}
                />}/>
                <Route path='/profile' render={() => <Profile //store={props.store}
                />}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

