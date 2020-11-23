const utils = require('../../../src/utils');

describe('Services - getPeople', () => {

    it('Should return sorted by ascending name people array succesfully', done => {

        const people = [{ name: 'cccc'}, { name: 'bbbb' }, { name: 'aaaa'}];
        const sortBy = 'name';
        const order = 'asc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response.length).toBe(people.length);
        expect(response[0]).toEqual(people[2]);
        expect(response[1]).toEqual(people[1]);
        expect(response[2]).toEqual(people[0]);
        done();
    });

    it('Should return sorted by ascending (by default) name people array succesfully', done => {

        const people = [{ name: 'cccc'}, { name: 'bbbb' }, { name: 'aaaa'}];
        const sortBy = 'name';

        const response = utils.sortPeopleBy(people, sortBy);

        expect(response.length).toBe(people.length);
        expect(response[0]).toEqual(people[2]);
        expect(response[1]).toEqual(people[1]);
        expect(response[2]).toEqual(people[0]);
        done();
    });

    it('Should return sorted by descending name people array succesfully', done => {

        const people = [{ name: 'aaaa'}, { name: 'bbbb' }, { name: 'cccc'}];
        const sortBy = 'name';
        const order = 'desc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response.length).toBe(people.length);
        expect(response[0]).toEqual(people[2]);
        expect(response[1]).toEqual(people[1]);
        expect(response[2]).toEqual(people[0]);
        done();
    });

    it('Should return sorted by ascending mass people array succesfully', done => {

        const people = [{ mass: '1,000'}, { mass: '500' }, { mass: '100'}];
        const sortBy = 'mass';
        const order = 'asc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response.length).toBe(people.length);
        expect(response[0].mass).toEqual(100);
        expect(response[1].mass).toEqual(500);
        expect(response[2].mass).toEqual(1000);
        done();
    });

    it('Should return sorted by ascending (by deafault) mass people array succesfully', done => {

        const people = [{ mass: '1,000'}, { mass: '500' }, { mass: '100'}];
        const sortBy = 'mass';

        const response = utils.sortPeopleBy(people, sortBy);

        expect(response.length).toBe(people.length);
        expect(response[0].mass).toEqual(100);
        expect(response[1].mass).toEqual(500);
        expect(response[2].mass).toEqual(1000);
        done();
    });

    it('Should return sorted by descending mass people array succesfully', done => {

        const people = [{ mass: '100'}, { mass: '500' }, { mass: '1,000'}];
        const sortBy = 'mass';
        const order = 'desc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response.length).toBe(people.length);
        expect(response[0].mass).toEqual(1000);
        expect(response[1].mass).toEqual(500);
        expect(response[2].mass).toEqual(100);
        done();
    });

    it('Should return sorted by ascending height people array succesfully', done => {

        const people = [{ height: '1,000'}, { height: '500' }, { height: '100'}];
        const sortBy = 'height';
        const order = 'asc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response.length).toBe(people.length);
        expect(response[0].height).toEqual(100);
        expect(response[1].height).toEqual(500);
        expect(response[2].height).toEqual(1000);
        done();
    });

    it('Should return sorted by ascending (by default) height people array succesfully', done => {

        const people = [{ height: '1,000'}, { height: '500' }, { height: '100'}];
        const sortBy = 'height';

        const response = utils.sortPeopleBy(people, sortBy);

        expect(response.length).toBe(people.length);
        expect(response[0].height).toEqual(100);
        expect(response[1].height).toEqual(500);
        expect(response[2].height).toEqual(1000);
        done();
    });

    it('Should return sorted by descending height people array succesfully', done => {

        const people = [{ height: '100'}, { height: '500' }, { height: '1,000'}];
        const sortBy = 'height';
        const order = 'desc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response.length).toBe(people.length);
        expect(response[0].height).toEqual(1000);
        expect(response[1].height).toEqual(500);
        expect(response[2].height).toEqual(100);
        done();
    });

    it('Should return sorted by ascending height people array succesfully', done => {

        const people = [{ height: '1,000'}, { height: '500' }, { height: '100'}];
        const sortBy = 'height';
        const order = 'asc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response.length).toBe(people.length);
        expect(response[0].height).toEqual(100);
        expect(response[1].height).toEqual(500);
        expect(response[2].height).toEqual(1000);
        done();
    });

    it('Should return unsorted array when providing invalid sortBy param', done => {

        const people = [{ height: '1,000'}, { height: '500' }, { height: '100'}];
        const sortBy = 'heigokgpsdfht';
        const order = 'asc';

        const response = utils.sortPeopleBy(people, sortBy, order);

        expect(response[0]).toEqual(people[0]);
        expect(response[1]).toEqual(people[1]);
        expect(response[2]).toEqual(people[2]);
        done();
    });
})