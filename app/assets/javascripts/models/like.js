window.NewsReader.Models.Like = Backbone.Model.extend({
	urlRoot : "likes", 

	initialize: function(model, options) {
		console.log(options);
		this.model = model.model;
	}
});