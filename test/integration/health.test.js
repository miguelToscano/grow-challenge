/**
* @jest-environment node
*/

const request = require('supertest');
const app = require('../../app');

describe('GET /people', () => {

    it('Should return single person succesfully', async done => {      
        const response = await request(app).get('/health');

        expect(response.status).toBe(200);
        done();
    });
});