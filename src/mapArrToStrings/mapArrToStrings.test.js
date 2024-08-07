const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings function', () => {
	test('Корректное значение', () => {
		expect(mapArrToStrings([1, 2, 3, 4])).toEqual(['1', '2', '3', '4'])
	})
	test('Мешанина', () => {
		expect(mapArrToStrings([1, 2, 3, 4, null, undefined, 'asdsadsad'])).toEqual(
			['1', '2', '3', '4']
		)
	})
	test('Пустой массив', () => {
		expect(mapArrToStrings([])).toEqual([])
	})
	test('Отрицание', () => {
		expect(mapArrToStrings([1, 2])).not.toEqual(['1', '2', '3'])
	})
})
