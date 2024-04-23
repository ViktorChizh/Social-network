import React, { ChangeEvent, Component, KeyboardEvent } from "react"
import s from "../Profile.module.css"

type PropsType = {
	status: string
	isOwnStatus: boolean
	updateStatus: (status: string) => void
}
type Statetype = {
	editMode: boolean
	status: string
}
export class ProfileStatus extends Component<PropsType> {
	state: Statetype = {
		editMode: false,
		status: this.props.status,
	}

	toggleEditMode = () => {
		// так работает, но делать так не желательно:
		// this.state.editMode = !this.state.editMode
		// this.forceUpdate()
		if (this.props.isOwnStatus) {
			this.setState({
				editMode: !this.state.editMode,
				status: this.props.status,
			})
			this.props.updateStatus(this.state.status)
		}
	}
	onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: e.currentTarget.value,
		})
	}
	onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter" || e.code === "NumpadEnter") this.toggleEditMode()
	}

	componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<Statetype>) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			})
		}
	}
	render() {
		return (
			<div className={s.statusBlock}>
				{!this.state.editMode ? (
					<div>
						<span onDoubleClick={this.toggleEditMode}>{this.props.status || "empty status"}</span>
					</div>
				) : (
					<div>
						<input
							autoFocus
							value={this.state.status}
							onBlur={this.toggleEditMode}
							onChange={(e) => this.onChangeHandler(e)}
							onKeyDown={(e) => this.onKeyDownHandler(e)}
						/>
					</div>
				)}
			</div>
		)
	}
}
