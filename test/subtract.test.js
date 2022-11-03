const subtract = require('../src/subtract')

test('Properly subtract 2 numbers', () => {
    expect(subtract(1,2)).toBe(-1)
})