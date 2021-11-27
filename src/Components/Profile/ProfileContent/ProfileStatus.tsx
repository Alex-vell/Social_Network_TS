import React, {ChangeEvent} from "react";

type profileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<profileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {

            this.setState(
                {
                    editMode: true,
                }
            )

    }

    deActivateEditMode = () => {

        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<profileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} onBlur={this.deActivateEditMode} autoFocus={true}
                           value={this.state.status}/>
                </div>
                }


            </div>
        )
    }


}
