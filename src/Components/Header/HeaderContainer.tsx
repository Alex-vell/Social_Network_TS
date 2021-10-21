import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";


type ResponseAuthType = {
    resultCode: number
    messages: string
    data: DataType
    isAuth: boolean
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get<ResponseAuthType>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    // let {id, email, login, isAuth} = response.data.data
                    this.props.setAuthUserData(response.data.data,
                        response.data.data.id,
                        response.data.data.email,
                        response.data.data.login,
                        response.data.isAuth)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    setAuthUserData: (data: DataType, id: number | null,
                      email: string | null,
                      login: string | null,
                      isAuth: boolean) => void

}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)