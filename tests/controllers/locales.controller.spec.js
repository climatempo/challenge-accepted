import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinonStubsPromise from 'sinon-stub-promise';
import sinon from 'sinon';
import { mockReq, mockRes } from 'sinon-express-mock';
import fs from 'fs';
import LocalesController from '../../src/controllers/locales.controller';

chai.use(sinonChai);
sinonStubsPromise(sinon);

describe('LocalesController', () => {
  describe('Smoke test', () => {
    it('should exist LocalesCOntroller class', () => {
      expect(LocalesController).to.be.exist;
    });
    it('should exist index method', () => {
      expect(LocalesController).to.respondsTo('index');
    });
  });

  describe('methods tests', () => {

    let req;
    let res;

    before(() => {
      req = new mockReq();
      res = new mockRes();
    });

    context('index method', () => {
      it('should index method return json of locales', (done) => {
        res.json.callsFake((result) => {
          expect(result).to.be.exist;
          expect(result).to.be.an.instanceof(Array);
          expect(result.length).not.to.be.eq(0);
          expect(result[0]).to.have.property('name');
          expect(result[0]).to.have.property('state');
          done();
        });
        new LocalesController().index(req, res);
      });

      it('should call 500 error when fails read file', (done) => {
        let stub = sinon.stub(fs, 'readFile');
        stub.callsFake((path, callback) => {
          callback(new Error('Facke error'));
        });
        res.status.callsFake((status) => {
          expect(status).to.be.eq(500);
          stub.restore();
          done();
          return res;
        });
        new LocalesController().index(req, res);
      });
    });
  });
});
