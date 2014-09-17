window.NewsReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/new": "feedNew",
    "users/new": "userNew",
    "session/new": "sessionNew",
    "feeds/:id": "feedShow"
  },
  
  initialize: function(options){
    this.$rootEl = options.$rootEl
  },
  
  feedIndex: function() {
    NewsReader.Collections.feeds.fetch();
    
    var view = new NewsReader.Views.FeedIndex({
      collection: NewsReader.Collections.feeds
    });
    this.swapView(view);
  }, 
  
  userNew: function() {
    var view = new NewsReader.Views.NewUser();
    this.swapView(view);
  },
  
  sessionNew: function() {
    var view = new NewsReader.Views.NewSession();
    this.swapView(view);
  },
  
  feedShow: function(id) {
    var entries = NewsReader.Collections.feeds.getOrFetch(id).entries()
    entries.fetch();
    var view = new NewsReader.Views.FeedShow({
      collection: entries
    });
    
    this.swapView(view);
  },
  
  feedNew: function () {
    var view = new NewsReader.Views.FeedNew();
    
    this.swapView(view);
  },
  
  swapView: function(view) {
    if(this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    
    this.$rootEl.html(this._currentView.render().$el);
    return this._currentView;
  }
})