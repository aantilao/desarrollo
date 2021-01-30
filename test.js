let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url = "localhost:3000/fibonacci";
describe('obtener n-esimo', () => {
    it('El numero deberia ser', (done) => {
        chai.request(url)
        .get('/3')
        .end(function(err,res) {
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    })
});
describe('obtener n-esimo', () => {
    it('El numero deberia ser', (done) => {
        chai.request(url)
        .get('/0')
        .end(function(err,res) {
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    })
});
describe('obtener n-esimo', () => {
    it('El numero deberia ser', (done) => {
        chai.request(url)
        .get('/sdaknldsakn')
        .end(function(err,res) {
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    })
});