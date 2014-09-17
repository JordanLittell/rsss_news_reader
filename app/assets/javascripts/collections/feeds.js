window.NewsReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,
  
  url: "api/feeds",
  
  getOrFetch: function (id) {
    var model = this.get(id);
    var feeds = this;
    if(!model) {
      model = new NewsReader.Models.Feed({id: id});
      model.fetch({
        success: function() { feeds.add(model); }
      }); 
    }
    return model;
  }
});

window.NewsReader.Collections.feeds = new window.NewsReader.Collections.Feeds();