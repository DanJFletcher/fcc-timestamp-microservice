const { getTimeStamp } = require('../app.js')
describe('timestamp api', () => {

    it('returns correct unix timestamp with date string', () => {
        // given
        const req = {
            params: {
                date: '2015-12-25'
            }
        }
        let res
        // when
        getTimeStamp(req, {json: (data) => {res = data}})

        // expect
        expect(res).toStrictEqual({"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"})
    })

    it('returns correct date string given unix timestamp', () => {
        // given
        const req = {
            params: {
                date: 1451001600000
            }
        }
        let res
        // when
        getTimeStamp(req, {json: (data) => {res = data}})

        // expect
        expect(res).toStrictEqual({"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"})
    })

    it('An empty date parameter should return the current time in a JSON object with a unix key', () => {
        // given
        const req = {
            params: {}
        }
        const mockDate = new Date(1451001600000)
        const spy = jest
          .spyOn(global, 'Date')
          .mockImplementation(() => mockDate)

        // when
        let res
        getTimeStamp(req, {json: (data) => {res = data}})

        // expect
        expect(res).toStrictEqual({"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"})
    })
})