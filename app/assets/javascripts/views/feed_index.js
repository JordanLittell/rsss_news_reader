window.NewsReader.Views.FeedIndex = Backbone.View.extend({
  template: JST['feed/index'],
  
  events: {
    "click button.delete-feed": "deleteFeed"
  },
  
  initialize: function () {
    this.listenTo(this.collection, "add sync destroy", this.render);
  },
  
  render: function () {
    var renderedContent = this.template({
      feeds: this.collection
    });
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  deleteFeed: function (event) {
    var id = $(event.currentTarget).data("feed-id");
    this.collection.get(id).destroy();
  }
})