import React from "react";

type profileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<profileStatusType> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        debugger
        this.setState(
            {
                editMode: true
            }
        )
    }

    deActivateEditMode = () => {
        debugger
        this.setState(
            {
                editMode: false
            }
        )
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deActivateEditMode} autoFocus={true} value={this.props.status}/>
                </div>
                }


            </div>
        )
    }


}
