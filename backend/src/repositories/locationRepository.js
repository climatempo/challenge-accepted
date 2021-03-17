const { readFile } = require('fs/promises')
class LocationRepository {
  constructor({ file }) {
    this.file = file
  }

  async _currentContent() {
    return JSON.parse(await readFile(this.file))
  }

  async find(locationId) {
    const all = await this._currentContent()
    if (!locationId) return all

    return all.find(({ id }) => locationId === id)
  }
}

module.exports = LocationRepository