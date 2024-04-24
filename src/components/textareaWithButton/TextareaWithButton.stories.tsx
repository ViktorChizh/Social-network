import React from "react"
import { Provider } from "react-redux"
import { store } from "redux/_Store-Redux"
import { TextareaWithButton, TextFormType } from "./TextareaWithButton"

export default {
	title: "TextareaWithButton",
	component: TextareaWithButton,
}

export const TextareaWithButtonDemo = () => {
	const addText = (formData: TextFormType) => {}
	return (
		<Provider store={store}>
			<TextareaWithButton buttonName="ADD POST" onSubmit={addText} placeholder="add post" name="newPost" />
		</Provider>
	)
}
