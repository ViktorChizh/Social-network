export const updateObjectInArray = (array: any[], condition: string, action: any, object: object) => {
	return array.map((item) => (item[condition] === action ? { ...item, ...object } : item))
}
