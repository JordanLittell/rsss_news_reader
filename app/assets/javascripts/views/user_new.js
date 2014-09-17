window.NewsReader.Views.NewUser = Backbone.View.extend({
  template: JST["user/new"],
  
  events: {
    "submit #new-user": "createUser"
  },
  
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  createUser: function(event) {
    event.preventDefault();
    var form = $("#new-user").serializeJSON();
    var user = new NewsReader.Models.User();
    user.set(form);
    user.save({}, {
      success: function(model, resp) {
        console.log(resp);
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
  
})