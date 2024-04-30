export const required = (value: string) => {
	if (value) return undefined
	return "Field is required"
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
	if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
	return undefined
}

export const minLengthCreator = (minLength: number) => (value: string) => {
	if (value && value.length < minLength) return `Min length is ${minLength} symbols`
	return undefined
}

export const emailValidator = (value: string) => {
	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return `Invalid email address`
	return undefined
}
