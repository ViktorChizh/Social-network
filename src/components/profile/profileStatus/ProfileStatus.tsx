import React, { Component } from "react"
import s from "../Profile.module.css"

type PropsType = {
	value: string
}

export class ProfileStatus extends Component<PropsType> {
	state = {
		editMode: false,
	}
	// стрелочная функция позволяет не байндить метод
	toggleEditMode = () => {
		// this.state.editMode = !this.state.editMode
		// this.forceUpdate()
		this.setState({
			editMode: !this.state.editMode,
		})
	}
	render() {
		return (
			<div className={s.statusBlock}>
				{!this.state.editMode ? (
					<div>
						<span onDoubleClick={this.toggleEditMode}>{this.props.value}</span>
					</div>
				) : (
					<div>
						<input onBlur={this.toggleEditMode} autoFocus value={this.props.value} />
					</div>
				)}
			</div>
		)
	}
}
