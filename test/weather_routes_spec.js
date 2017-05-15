import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';

chai.use(chaiHttp);
const should = chai.should();

describe('routes : weather', () => {

  describe('GET /api/weather/:name', () => {
	  it('should GET weather info from Osasco', (done) => {
	  	chai.request(server)
		    .get('/api/weather/osasco')
		    .end((err, res) => {
		    	if (err) throw err;
		    	res.should.have.status(200);
					res.should.be.json;

					const body = res.body;
					body.should.be.a('object');
					body.should.have.property('period');
					body.should.have.property('locale');
					body.should.have.property('weather');
					
					const period = body.period;
					period.should.have.property('begin');
					period.should.have.property('end');

					const locale = body.locale;
					locale.should.have.property("id");
					locale.should.have.property("name");
					locale.name.should.equal("Osasco");
					locale.should.have.property("state");
					locale.should.have.property("latitude");
					locale.should.have.property("longitude");

					done();
		    });
	  });

	  it('should GET weather info from São Paulo', (done) => {
	  	chai.request(server)
		    .get('/api/weather/são paulo')
		    .end((err, res) => {
		    	if (err) throw err;
		    	res.should.have.status(200);
					res.should.be.json;

					const body = res.body;
					body.should.be.a('object');
					body.should.have.property('period');
					body.should.have.property('locale');
					body.should.have.property('weather');
					
					const period = body.period;
					period.should.have.property('begin');
					period.should.have.property('end');

					const locale = body.locale;
					locale.should.have.property("id");
					locale.should.have.property("name");
					locale.name.should.equal("São Paulo");
					locale.should.have.property("state");
					locale.should.have.property("latitude");
					locale.should.have.property("longitude");

					done();
		    });
	  });

	  it('should return 404 for inexistent locale name', (done) => {
	  	chai.request(server)
	    .get('/api/weather/rio de janeiro')
	    .end((err, res) => {
	    	res.should.have.status(404);
				res.should.be.json;
				res.body.should.be.a('object');
				res.body.should.have.property('message');
				done();
	    });
	  });

  });

});