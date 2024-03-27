import {test, expect} from 'vitest';

test('Próximo (0) retorna 1', () => {
    expect(proximo(0)).toBe(1);
});
test('Próximo (1) retorna 3', () => {
    expect(proximo(1)).toBe(3);
});
test('Próximo (2) retorna 5', () => {
    expect(proximo(2)).toBe(5);
});
test('Próximo (3) retorna 4', () => {
    expect(proximo(3)).toBe(4);
});
test('Próximo (4) retorna 6', () => {
    expect(proximo(4)).toBe(6);
});