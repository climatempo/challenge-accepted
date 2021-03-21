const { readFile } = require("fs/promises");
class LocationRepository {
  constructor({ file }) {
    this.file = file;
  }

  async _currentContent() {
    return JSON.parse(await readFile(this.file));
  }

  async find(locationName) {
    const all = await this._currentContent();
    if (!locationName) return all;

    return all.find(
      ({ name }) =>
        locationName ===
        name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/\s/g, "_")
    );
  }
}

module.exports = LocationRepository;
