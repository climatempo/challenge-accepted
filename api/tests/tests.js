const chai = require('chai');
const fetch = require('node-fetch');

describe('[API]', () => {
  it('Should retrieve all locales', () => {
    fetch('http://localhost:3030/locales')
      .then(async (result) => {
        const json = await result.json();
        chai.expect(json.data).to.exist;
        chai.expect(json.data.length).to.be.greaterThan(0);
      });
  });

  it('Should retrieve all cities from SP State', () => {
    fetch('http://localhost:3030/state?state=SP')
      .then(async (result) => {
        const json = await result.json();
        chai.expect(json.data).to.exist;
        chai.expect(json.data[0].state).to.be.equal('SP');
        chai.expect(json.data.length).to.be.greaterThan(0);
      });
  });

  it('Should retrieve EMPTY array from a not covered State', () => {
    fetch('http://localhost:3030/state?state=RJ')
      .then(async (result) => {
        const json = await result.json();
        chai.expect(json.data).to.be.empty;
      });
  });

  it('Should retrieve a city by name', () => {
    fetch('http://localhost:3030/locale?name=Osasco')
      .then(async (result) => {
        const json = await result.json();
        chai.expect(json.data).to.exist;
        chai.expect(json.data.name).to.be.equal('Osasco');
        chai.expect(json.data.state).to.be.equal('SP');
      });
  });

  it('Should retrieve EMPTY from a not covered city', () => {
    fetch('http://localhost:3030/locale?name=Curitiba')
      .then(async (result) => {
        const json = await result.json();
        chai.expect(json).to.be.empty;
      });
  });

  it('Should retrieve weather data from a covered City', () => {
    fetch('http://localhost:3030/weather?locale=3735')
      .then(async (result) => {
        const json = await result.json();
        chai.expect(json.data).to.exist;
        chai.expect(json.data.locale.name).to.be.equal('Osasco');
        chai.expect(json.data.locale.state).to.be.equal('SP');
        chai.expect(json.data.weather.length).to.be.greaterThan(0);
      });
  });

  it('Should retrieve EMPTY weather data from a not covered City', () => {
    fetch('http://localhost:3030/weather?locale=0001')
      .then(async (result) => {
        const json = await result.json();
        chai.expect(json).to.be.empty;
      });
  });
});
