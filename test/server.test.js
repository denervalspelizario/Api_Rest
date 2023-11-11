const supertest = require('supertest');

const request = supertest('http://www.localhost:3001'); //

test('Deve responder na porta 3001', () => {
  // acessar a url http/localhost:3001
  request.get('/').then((res) => expect(res.status).toBe(200)); // expectiva é que a rota www.localhost:3001/ retorna o status 200

  // verificar que a resposta foi 200
});
