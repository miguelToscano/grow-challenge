const utils = require('../../../src/utils');

describe('Services - getPeople', () => {

    it('Should return person name by url succesfully', done => {

        const people = [{ name: 'Luke', url: 'luke.com'}];
        const url = 'luke.com';

        const response = utils.getPersonNameByUrl(people, url);

        expect(response).toBe(people[0].name);
        done();
    });

    it('Should return null when url doesnt match succesfully', done => {

        const people = [{ name: 'Luke', url: 'luke.com'}];
        const url = 'anakin.com';

        const response = utils.getPersonNameByUrl(people, url);

        expect(response).toBe(undefined);
        done();
    });
})