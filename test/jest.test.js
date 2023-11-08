/* eslint-disable linebreak-style */

test('Devo conhecer as principais assertivas do jest', () => {
  // teste 1
  let number = null; // number será null
  expect(number).toBeNull(); // exprectativa sera que numero seja nulo

  // teste 2
  number = 12; // numero 12
  expect(number).not.toBeNull(); // expectativa NAO seja nulo
  expect(number).toBe(12); // exprectativa que number seja o valor de 12
  expect(number).toEqual(12); // expectativa que seja igual a 12
  expect(number).toBeGreaterThan(11); // espectativa que seja maior que 11
  expect(number).toBeLessThan(13); // expectativa que seja menor que 13
});

test('Devo saber tabalhar com objetos', () => {
  const obj = { name: 'Dener', mail: 'dener@email.com' };

  expect(obj).toHaveProperty('name'); // expectativa que tenha name no objeto obj

  expect(obj).toHaveProperty('name', 'Dener'); // expectativa que tenha name e Dener no objeto obj

  expect(obj.name).toBe('Dener'); // expectativa que tenha Dener no name do obj

  const obj2 = { name: 'Dener', mail: 'dener@email.com' };

  expect(obj).toEqual(obj2); // expectativa que obj seja igual a obj2
});
