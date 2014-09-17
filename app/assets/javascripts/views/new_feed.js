window.NewsReader.Views.FeedNew = Backbone.View.extend({
  template: JST["feed/new"],
  
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "submit #new-feed-form": "createFeed"
  },
  
  createFeed: function (event) {
    event.preventDefault();
    var formContents = $('#new-feed-form').serializeJSON();
    NewsReader.Collections.feeds.create(formContents, {
      success: function () {
        Backbone.history.navigate("#/", { trigger: true })
      }
    });
  }
})