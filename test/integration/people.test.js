/**
* @jest-environment node
*/

const nock = require('nock');
const request = require('supertest');
const app = require('../../app');
const mocks = require('../mocks');

const SWAPI_API = 'https://swapi.dev/api';

describe('GET /people', () => {

    it('Should return single person succesfully', async done => {
        nock(SWAPI_API)
          .get('/people')
          .reply(200, mocks.peopleSinglePageResponse);
      
        const response = await request(app).get('/people');

        expect(response.body.length).toBe(1);
        expect(response.status).toBe(200);
        done();
    });

    it('Should return full page of people succesfully', async done => {
        nock(SWAPI_API)
          .get('/people')
          .reply(200, mocks.peopleFullPageResponse);
      
        const response = await request(app).get('/people');

        expect(response.body.length).toBe(10);
        expect(response.status).toBe(200);
        done();
    });

    it('Should return 2 pages of people succesfully', async done => {
        nock(SWAPI_API)
          .get('/people')
          .reply(200, mocks.peopleFirstPageResponse);
        
        nock(SWAPI_API)
          .get('/people?page=2')
          .reply(200, mocks.peopleSecondPageResponse);  
      
        const response = await request(app).get('/people');

        expect(response.body.length).toBe(20);
        expect(response.status).toBe(200);
        done();
    });

    it('Should fail when Swapi external API fails', async done => {

        nock(SWAPI_API)
        .get('/people')
        .reply(404);

        const response = await request(app).get('/people');

        expect(response.status).toBe(502);
        expect(response.body.message).toBe('https://swapi.dev/api/people request failed.');
        done();
    });

    it('Should fail when receiving invalid sortBy param', async done => {
        const response = await request(app).get('/people?sortBy=jgerkfl');

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid sortBy param');
        done();
    });

    it('Should fail when receiving invalid order param', async done => {
        const response = await request(app).get('/people?sortBy=name&order=ksdjflka');

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid order param');
        done();
    });
});