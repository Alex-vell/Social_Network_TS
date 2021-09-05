import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type DialogsType = {
    id: number
    name: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type MessagesType = {
    id: number
    message: string
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type DialogPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
type StatePropsType = {
    state: StateType
    addPost: (postMessage: string) => void
}

const App: React.FC<StatePropsType> = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  addPost={props.addPost}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
