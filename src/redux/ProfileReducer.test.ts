import ava from "assets/postAvatar.jpg"
import { addPostAC, deletePostAC, profifeReducer, setStatus } from "redux/ProfileReducer"

let state = {
	profile: null,
	status: "",
	posts: [
		{
			id: 1,
			message: "Hi, how are you?",
			likesCount: 5,
			avatar: ava,
		},
	],
}

it("new post should be added", () => {
	let action = addPostAC("new post")

	let newState = profifeReducer(state, action)

	expect(newState.posts.length).toBe(2)
	expect(newState.posts[1].message).toBe("new post")
})

it("after deleting message lenght posts should decremanted", () => {
	let action = deletePostAC(1)

	let newState = profifeReducer(state, action)

	expect(newState.posts.length).toBe(0)
})

it("with incorrect id lenght posts should unchange", () => {
	let action = deletePostAC(10)

	let newState = profifeReducer(state, action)

	expect(newState.posts.length).toBe(1)
})

it("status should changed", () => {
	let action = setStatus("new status")

	let newState = profifeReducer(state, action)

	expect(newState.status).toBe("new status")
})
