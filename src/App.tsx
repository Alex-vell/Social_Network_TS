import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='app-container'>
            < Header/>
            <Navbar/>
            <div className='app-container-content'>
                {/*<Dialogs/>*/}
                <Profile/>
            </div>
        </div>
    )
}

export default App;
