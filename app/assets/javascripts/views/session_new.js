window.NewsReader.Views.NewSession = Backbone.View.extend({
  template: JST['session/new'],
  
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "submit #new-session": "createSession"
  },
  
  createSession: function(event) {
    event.preventDefault();
    var form = $("#new-session").serializeJSON();
    var session = new NewsReader.Models.Session();
    session.set(form);
    session.save({}, {
      success: function(model, resp) {
        var username = resp.username;
        $(".userDisplay").html(username);
        Backbone.history.navigate("#/", { trigger: true });
      },
      error: function(model,resp) {
        console.log(resp);
        $(".errors").html(resp.responseText);
      }
    })
  }
});