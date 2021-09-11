import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addNewMessageText, addNewPostText, addPost, StateType, subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallback={addPost} addNewPostTextCallback={addNewPostText}
                 addMessageCallback={addMessage} addNewMessageTextCallBack={addNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
