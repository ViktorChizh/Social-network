import React from "react"
import { Provider } from "react-redux"
import { store } from "redux/_Store-Redux"
import { TextareaWithButton, TextForm } from "components/common/textareaWithButton/TextareaWithButton"

export default {
	title: "TextareaWithButton",
	component: TextareaWithButton,
}

export const TextareaWithButtonDemo = () => {
	const addText = (formData: TextForm) => {}
	return (
		<Provider store={store}>
			<TextareaWithButton buttonName="ADD POST" onSubmit={addText} placeholder="add post" name="newPost" />
		</Provider>
	)
}
