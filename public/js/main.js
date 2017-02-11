$(function() {
	var url = "../../locale";
	var locales = {};
	$.ajax({
	    type: "GET",
	    url: url,
	    success: function(data){
	    	var len = data.length;
	    	for(var i =0; i < len; i++){
	    		console.log(data[i].name);
	    		locales[data[i].name] = null;
	    	}
	    }
	});
	console.log(locales);
    $('input.autocomplete').autocomplete({
        data: {
        	"Osasco" : null,
        	"São Paulo" : null
        }
    });
});