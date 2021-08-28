import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Natali'},
    {id: 3, name: 'Anna'}
]
let messages = [
    {id: 1, message: 'I am a developer'},
    {id: 2, message: 'bla bla'},
    {id: 3, message: 'la la'}
]
let posts = [
    {id: 1, message: 'Hey la lay', likesCount: 15},
    {id: 2, message: 'Bla bla', likesCount: 11}
]


ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs}
             messages={messages}
             posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
