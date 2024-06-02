import React from "react"
import { create, ReactTestInstance } from "react-test-renderer"
import { Paginator } from "./Paginator"

describe("Paginator component test", () => {
	test("pages in count should be equal pageSize - 1", () => {
		const paginator = create(<Paginator totalCount={1000} currentPage={5} pageSize={10} onPageChanged={() => {}} />)
		// eslint-disable-next-line
		let span: ReactTestInstance[] = paginator.root.findAllByType("span")
		expect(span.length).toBe(18)
	})
})
