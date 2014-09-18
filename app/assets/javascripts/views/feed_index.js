window.NewsReader.Views.FeedIndex = Backbone.View.extend({
  template: JST['feed/index'],
  
  events: {
    "click button.delete-feed": "deleteFeed",
    "click button#button-like": "likeFeed"
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
  },

  likeFeed: function()  {
    console.log("you really like this?");
    var that = this;
    var id = $("#button-like").data("feed-id");
    var feed = NewsReader.Collections.feeds.get(id);

    console.log(feed.likes());
    var like = new NewsReader.Models.Like({"model": feed});
    feed.likes().create({"feed-id": id}, {
      success: function () {
        console.log('like submitted');
      },error: function() {
        console.log(like);
      }
    });
  }
})