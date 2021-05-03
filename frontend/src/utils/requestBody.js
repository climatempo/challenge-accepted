export default {
  query: `
  query {
    locales {
      _id
      name
      state
      latitude
      longitude
    }

    weathers {
      period {
        begin
        end
      }
      locale_id
      weather {
        date
        text
        temperature {
          min
          max
        }
        rain {
          probability
          precipitation
        }
      }
    }
  }
  `,
};
