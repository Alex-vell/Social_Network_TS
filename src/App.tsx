import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


export const App = () => {
    console.log(React.version);
    return (
        <div className='app-wrapper'>
            < HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer //store={props.store}
                />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer //store={props.store}
                />}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}

