class LocationService {
  constructor({ locationRepository }) {
    this.locationRepository = locationRepository
  }

  async find(itemId) {
    return this.locationRepository.find(itemId)
  }
}

module.exports = LocationService