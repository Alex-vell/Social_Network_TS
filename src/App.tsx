import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LoginPage} from "./Components/Login/LoginPage";
import {connect} from "react-redux";
import {getAuthUser} from "./redux/auth-reducer";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";


class App extends React.Component<any> {

    componentDidMount() {
        this.props.getAuthUser()
    }

    render() {
        return (
            <div className='app-wrapper'>
                < HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {getAuthUser}))(App)


// FC with Hooks
/*import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LoginPage} from "./Components/Login/LoginPage";
import {connect, useDispatch, useSelector} from "react-redux";
import {getAuthUser} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./Components/general/Preloader/Preloader";


export const App = () => {

    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>
            < HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
            </div>
        </div>
    )
}*/
