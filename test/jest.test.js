/* eslint-disable linebreak-style */

test('Devo conhecer as principais assertivas do jest', () => {
  // teste 1
  let number = null; // number será null
  expect(number).toBeNull(); // exprectativa sera que numero seja nulo

  // teste 2
  number = 12; // numero 12
  expect(number).not.toBeNull(); // expectativa NAO seja nulo

  // teste 2
  expect(number).toBe(12); // exprectativa que number seja o valor de 12
});
