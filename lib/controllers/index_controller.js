base = require('./base');

this.build = function(info){
	
	var data = {
		doc: info,
		model: 'index',
		restricted: false
	}
	
	base.build(data, function(){
		base.run(function(){
			// do stuff here
		});
	});
}

this.model_data = base.model_data;