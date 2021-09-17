const { getTimeStamp } = require('../app.js')
describe('timestamp api', () => {

    it('returns a unix timestamp', () => {
        // given
        const req = {
            params: {
                time: '2015-12-25'
            }
        }
        let res
        // when
        getTimeStamp(req, {json: (data) => {res = data}})

        // expect
        expect(res).toStrictEqual({unix: '1451001600', utc: 'Fri, 25 Dec 2015 00:00:00 GMT'})
    })
})