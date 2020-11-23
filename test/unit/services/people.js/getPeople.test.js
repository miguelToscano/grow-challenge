const nock = require('nock');
const peopleService = require('../../../../src/services/people');
const mocks = require('../../../mocks');

const SWAPI_API = 'https://swapi.dev/api';

describe('Services - getPeople', () => {

    it('Should return Swapi /people succesfully', async done => {

        nock(SWAPI_API)
          .get('/people')
          .reply(200, mocks.peopleSinglePageResponse);

        const response = await peopleService.getPeople();
        expect(response.length).toBe(mocks.peopleSinglePageResponse.results.length);
        done();
    });

    it('Should return Swapi /people with multiple pages succesfully', async done => {

        nock(SWAPI_API)
          .get('/people')
          .reply(200, mocks.peopleFirstPageResponse);

        nock(SWAPI_API)
          .get('/people?page=2')
          .reply(200, mocks.peopleSecondPageResponse);

        const response = await peopleService.getPeople();
        expect(response.length).toBe(mocks.peopleFirstPageResponse.results.length + mocks.peopleSecondPageResponse.results.length);
        done();
    });

    it('Should throw 502 error when Swapi /people fails', async done => {

        nock(SWAPI_API)
          .get('/people')
          .reply(404)

        try {
            const response = await peopleService.getPeople();
        } catch (error) {
            expect(error.statusCode).toBe(502);
            done()
        }
    });
})