import {addMessageAC, addNewMessageTextAC, InitialStateDialogReducerType} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: InitialStateDialogReducerType
}
type MapDispatchToPropsType = {
    addMessageCallback: (newMessageText: string) => void
    onChangeMessageCallback: (content: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessageCallback: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        },
        onChangeMessageCallback: (content: string) => {
            dispatch(addNewMessageTextAC(content))
        }
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
