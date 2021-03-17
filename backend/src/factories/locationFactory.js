const LocationRepository = require('../repositories/locationRepository')
const LocationService = require('../services/locationService')

const { join } = require('path')
const filename = join(__dirname, '../database', 'locales.json')

const locationInstance = () => {
  const locationRepository = new LocationRepository({
    file: filename
  })
  const locationService = new LocationService({
    locationRepository
  })

  return locationService
}

module.exports = { locationInstance }
