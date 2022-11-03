const sum = require('../src/sum')

test('Properly count sum of 2 numbers', () => {
    expect(sum(1,2)).toBe(3)
})