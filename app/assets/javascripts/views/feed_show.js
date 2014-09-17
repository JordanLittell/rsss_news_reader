window.NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST["feed/show"],
  
  events: {
    "click button.refresh": "refresh"
  },
  
  render: function () {
    var renderedContent = this.template({
      entries: this.collection
    });
    this.$el.html(renderedContent);
    
    var that = this;
    
    this.collection.each(function (entry) {
      var view = new NewsReader.Views.ShowEntry({
        model: entry
      });
      
      that.$el.append(view.render().$el);
    });
    
    return this;
  },
  
  initialize: function () {
    var entries = this.collection;
    this.listenTo(entries, "sync add", this.render);
  },
  
  refresh: function () {
    this.collection.fetch();
    this.render();
  }
  
});