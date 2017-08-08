import moment from "moment/moment";

Template.forecast.onCreated(function() {
    HTTP.call('POST', 'http://localhost:5000/weather', {
        headers: {"x-token": "337151E12583F45493AC7CD9A37A2"},
        data: { id: null }
    }, (error, result) => {
        Session.set('forecast', result.data.result);
    });
});

Template.forecast.helpers({
    forecast: function() {
        return Session.get('forecast');
    }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD/MM/YYYY');
});