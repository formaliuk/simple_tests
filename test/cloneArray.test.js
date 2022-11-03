const cloneArray = require('../src/cloneArray')

test('Check if array is cloned', () => {
    expect(cloneArray([1, 4, 6, 8])).toEqual([1, 4, 6, 8])
    expect(cloneArray([1, 4, 6, 8])).not.toBe([1, 4, 6, 8])
})