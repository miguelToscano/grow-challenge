/**
* @jest-environment node
*/

const nock = require('nock');
const request = require('supertest');
const app = require('../../app');
const mocks = require('../mocks');
const adapter = require('axios/lib/adapters/http')

describe('First test', () => {


    it('Should return single person succesfully', async done => {
        nock('https://swapi.dev/api')
          .get('/people')
          .reply(200, mocks.peopleSinglePageResponse);
      
        const response = await request(app).get('/people');

        expect(response.body.length).toBe(1);
        expect(response.status).toBe(200);
        done();
    });

    it('Should return full page of people succesfully', async done => {
        nock('https://swapi.dev/api')
          .get('/people')
          .reply(200, mocks.peopleFullPageResponse);
      
        const response = await request(app).get('/people');

        expect(response.body.length).toBe(10);
        expect(response.status).toBe(200);
        done();
    });

    it('Should return 2 pages of people succesfully', async done => {
        nock('https://swapi.dev/api')
          .get('/people')
          .reply(200, mocks.peopleFirstPageResponse);
        
        nock('https://swapi.dev/api')
          .get('/people?page=2')
          .reply(200, mocks.peopleSecondPageResponse);  
      
        const response = await request(app).get('/people');

        expect(response.body.length).toBe(20);
        expect(response.status).toBe(200);
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

// const request = require('supertest');
// const app = require('../../app');
// const { properGetPeopleResponse } = require('../testUtils/schemasExamples/swapiServiceSchemas');
// const { mockGetPeople } = require('../testUtils/mocks');
// const sort = require('../../app/utils/sort');

// describe('GET /people', () => {
//   describe('No query params', () => {
//     let response = null;
//     beforeAll(async done => {
//       mockGetPeople();
//       response = await request(app).get('/people');
//       return done();
//     });

//     it('status is 200', () => {
//       expect(response.status).toBe(200);
//     });
//     it('response has count and people properties', () => {
//       expect(response.body).toMatchObject({
//         count: properGetPeopleResponse.results.length,
//         people: properGetPeopleResponse.results
//       });
//     });
//   });

//   describe('Sorting by string desc', () => {
//     let response = null;
//     const sortBy = 'name';
//     const sortOrder = 'desc';
//     beforeAll(async done => {
//       mockGetPeople();
//       response = await request(app)
//         .get('/people')
//         .query({ sortBy, sortOrder });
//       return done();
//     });

//     it('status is 200', () => {
//       expect(response.status).toBe(200);
//     });
//     it('response has count and people properties', () => {
//       expect(response.body).toMatchObject({
//         count: properGetPeopleResponse.results.length,
//         people: sort(properGetPeopleResponse.results, sortBy, 'string', sortOrder)
//       });
//     });
//   });

//   describe('Sorting by string asc', () => {
//     let response = null;
//     const sortBy = 'name';
//     const sortOrder = 'asc';
//     beforeAll(async done => {
//       mockGetPeople();
//       response = await request(app)
//         .get('/people')
//         .query({ sortBy, sortOrder });
//       return done();
//     });

//     it('status is 200', () => {
//       expect(response.status).toBe(200);
//     });
//     it('response has count and people properties', () => {
//       expect(response.body).toMatchObject({
//         count: properGetPeopleResponse.results.length,
//         people: sort(properGetPeopleResponse.results, sortBy, 'string', sortOrder)
//       });
//     });
//   });

//   describe('Sorting by number desc', () => {
//     let response = null;
//     const sortBy = 'mass';
//     const sortOrder = 'desc';
//     beforeAll(async done => {
//       mockGetPeople();
//       response = await request(app)
//         .get('/people')
//         .query({ sortBy, sortOrder });
//       return done();
//     });

//     it('status is 200', () => {
//       expect(response.status).toBe(200);
//     });
//     it('response has count and people properties', () => {
//       expect(response.body).toMatchObject({
//         count: properGetPeopleResponse.results.length,
//         people: sort(properGetPeopleResponse.results, sortBy, 'number', sortOrder)
//       });
//     });
//   });

//   describe('Sorting by number asc', () => {
//     let response = null;
//     const sortBy = 'mass';
//     const sortOrder = 'asc';
//     beforeAll(async done => {
//       mockGetPeople();
//       response = await request(app)
//         .get('/people')
//         .query({ sortBy, sortOrder });
//       return done();
//     });

//     it('status is 200', () => {
//       expect(response.status).toBe(200);
//     });
//     it('response has count and people properties', () => {
//       expect(response.body).toMatchObject({
//         count: properGetPeopleResponse.results.length,
//         people: sort(properGetPeopleResponse.results, sortBy, 'number', sortOrder)
//       });
//     });
//   });
// });
