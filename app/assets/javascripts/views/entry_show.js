window.NewsReader.Views.ShowEntry =  Backbone.View.extend({
  template: JST["entries/show"],
  render: function() {
    var renderedContent = this.template({
      entry: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
})