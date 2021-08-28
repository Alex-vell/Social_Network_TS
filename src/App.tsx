import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type dialogsPropsType = {
    id: number
    name: string
}
type messagesPropsType = {
    id: number
    message: string
}
type postsPropsType = {
    id: number
    message: string
    likesCount: number
}

type propsType = {
    dialogs: Array<dialogsPropsType>
    messages: Array<messagesPropsType>
    posts: Array<postsPropsType>
}

const App: React.FC<propsType> = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
