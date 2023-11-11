const request = require('supertest');

const app = require('../src/app'); // importando app que contem a rota get

test('Deve responder na raiz', () => request(app).get('/') // rota 3001/  do tipo GET
  .then((res) => {
    expect(res.status).toBe(200); // expectativa é que o app na requisição get o status seja 200
  }));
