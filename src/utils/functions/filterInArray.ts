export const filterObjectInArray = (array: any[], condition: string | null, action: any) => {
	return array.filter((item) => (condition ? item[condition] : item) !== action)
}
