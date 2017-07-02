Template.locales.onCreated(function() {
    HTTP.call('POST', 'http://localhost:5000/locales', {
        headers: {"x-token": "337151E12583F45493AC7CD9A37A2"}
    }, (error, result) => {
        Session.set('locales', result.data.result);
    });
});

Template.locales.helpers({
    locales: function() {
        return Session.get('locales');
    }
});

Template.locales.events({
  'change #selectLocation': function(e){
      e.preventDefault()
      
      let id = $('#selectLocation').val();
      HTTP.call('POST', 'http://localhost:5000/weather', {
          headers: {"x-token": "337151E12583F45493AC7CD9A37A2"},
          data: {
              id: id
          },
      }, (error, result) => {
          Session.set('forecast', result.data.result);
      });
  }
});
