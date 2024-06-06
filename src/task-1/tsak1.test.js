const calculateFraction = require('./task-1.js');

describe('calculatePercentages', () => {
    test('calculates percentages correctly for normal case', () => {
        const params = ['1.5', '3', '6', '1.5'];
        const expected = ['12.500', '25.000', '50.000', '12.500'];
        expect(calculateFraction(params)).toEqual(expected);
    });

    test('calculates percentages correctly for all same values', () => {
        const params = ['2', '2', '2', '2'];
        const expected = ['25.000', '25.000', '25.000', '25.000'];
        expect(calculateFraction(params)).toEqual(expected);
    });

    test('calculates percentages correctly for a single value', () => {
        const params = ['10'];
        const expected = ['100.000'];
        expect(calculateFraction(params)).toEqual(expected);
    });

    test('calculates percentages correctly for a mix of integers and decimals', () => {
        const params = ['1', '2.5', '3.5', '5'];
        const expected = ['8.333', '20.833', '29.167', '41.667'];
        expect(calculateFraction(params)).toEqual(expected);
    });

    test('calculates percentages correctly for all value 0', () => {
        const params = ['0', '0', '0'];
        const expected = ['0.000', '0.000', '0.000'];
        expect(calculateFraction(params)).toEqual(expected);
    });

    test('empty array', () => {
        const params = [];
        const expected = [];
        expect(calculateFraction(params)).toEqual(expected);
    });
});