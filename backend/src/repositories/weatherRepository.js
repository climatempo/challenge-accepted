const { readFile } = require("fs").promises;
class WeatherRepository {
  constructor({ file }) {
    this.file = file;
  }

  async _currentContent() {
    return JSON.parse(await readFile(this.file));
  }

  async find(weatherId) {
    const all = await this._currentContent();
    if (!weatherId) return all;
    const weatherLocation = all.find(
      ({ locale }) =>
        weatherId ===
        locale.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/\s/g, "_")
    );
    return { weatherLocation };
  }
}

module.exports = WeatherRepository;
