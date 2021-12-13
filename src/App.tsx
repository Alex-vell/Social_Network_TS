import React, {ComponentType} from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LoginPage} from "./Components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {AppStateType, store} from "./redux/redux-store";
import {Preloader} from "./Components/general/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import {Error404} from "./Components/common/Error404/Error404";


class App extends React.Component<any> {

    componentDidMount() {
        this.props.initializeApp()

    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                < HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/404' render={() => <Error404/>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
    //isAuth: state.auth.isAuth
})

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const SocialNetworkApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

// FC using Hooks
/*import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
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


 const App = () => {

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
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/404' render={() => <h1>Error: PAGE NOT FOUND</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </div>
        </div>
    )
}

export default App;*/
