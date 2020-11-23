const nock = require('nock');
const planetsService = require('../../../../src/services/planets');
const mocks = require('../../../mocks');

const SWAPI_API = 'https://swapi.dev/api';

describe('Services - getplanets', () => {

    it('Should return Swapi /planets succesfully', async done => {

        nock(SWAPI_API)
          .get('/planets')
          .reply(200, mocks.planetsSinglePageResponse);

        const response = await planetsService.getPlanets();
        expect(response.length).toBe(mocks.planetsSinglePageResponse.results.length);
        done();
    });

    it('Should return Swapi /planets with multiple pages succesfully', async done => {

        nock(SWAPI_API)
          .get('/planets')
          .reply(200, mocks.planetsFirstPageResponse);

        nock(SWAPI_API)
          .get('/planets?page=2')
          .reply(200, mocks.planetsSecondPageResponse);

        const response = await planetsService.getPlanets();
        expect(response.length).toBe(mocks.planetsFirstPageResponse.results.length + mocks.planetsSecondPageResponse.results.length);
        done();
    });

    it('Should throw 502 error when Swapi /planets fails', async done => {

        nock(SWAPI_API)
          .get('/planets')
          .reply(404)

        try {
            const response = await planetsService.getPlanets();
        } catch (error) {
            expect(error.statusCode).toBe(502);
            done()
        }
    });
})