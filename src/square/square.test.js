const square = require('./square')

describe('square', () => {
	// Перед каждым тестом
	beforeEach(() => {})

	// Один раз перед всеми тестами
	beforeAll(() => {})

	test('Корректное значение', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		square(2)
		expect(spyMathPow).toBeCalledTimes(1)
	})

	test('Input: 1', () => {
		const spyMathPow = jest.spyOn(Math, 'pow')
		square(1)
		expect(spyMathPow).toBeCalledTimes(0)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})
})
