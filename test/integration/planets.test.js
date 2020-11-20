/**
* @jest-environment node
*/

const nock = require('nock');
const request = require('supertest');
const app = require('../../app');
const mocks = require('../mocks');

describe('GET /planets', () => {


    it('Should return single planet succesfully', async done => {
        nock('https://swapi.dev/api')
          .get('/people')
          .reply(200, mocks.peopleSinglePageResponse);

        nock('https://swapi.dev/api')
          .get('/planets')
          .reply(200, mocks.planetsSinglePageResponse);
      
        const response = await request(app).get('/planets');

        expect(response.body.length).toBe(1);
        expect(response.body[0].residents[0]).toBe(mocks.peopleSinglePageResponse.results[0].name);
        expect(response.status).toBe(200);
        done();
    });

    it('Should return full page of planets succesfully', async done => {
        nock('https://swapi.dev/api')
          .get('/people')
          .reply(200, mocks.peopleFullPageResponse);

        nock('https://swapi.dev/api')
          .get('/planets')
          .reply(200, mocks.planetsFullPageResponse);
          
        const response = await request(app).get('/planets');

        expect(response.body.length).toBe(10);
        expect(response.status).toBe(200);

        response.body.forEach(planet => {

            planet.residents.forEach(resident => {

                if (resident) {

                    const person = mocks.peopleFullPageResponse.results.find(result => result.name === resident);

                    expect(person.name).toBeDefined();
                    expect(person.name).toBe(resident);
                }
                
            });
        });

        done();
    });

    it('Should return 2 pages of planets succesfully', async done => {
        nock('https://swapi.dev/api')
          .get('/people')
          .reply(200, mocks.peopleFullPageResponse);
        
        nock('https://swapi.dev/api')
          .get('/planets')
          .reply(200, mocks.planetsFirstPageResponse);  
      

        nock('https://swapi.dev/api')
          .get('/planets?page=2')
          .reply(200, mocks.planetsSecondPageResponse);  
      
        const response = await request(app).get('/planets');

        expect(response.body.length).toBe(20);
        expect(response.status).toBe(200);

        response.body.forEach(planet => {

            planet.residents.forEach(resident => {

                if (resident) {

                    const person = mocks.peopleFullPageResponse.results.find(result => result.name === resident);

                    expect(person.name).toBeDefined();
                    expect(person.name).toBe(resident);
                }
                
            });
        });

        done();
    });
});