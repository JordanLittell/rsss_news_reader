window.NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "api/feeds",
  parse: function(serverData){
    if(serverData.latest_entries){
      //set the entries collection, 
      this.entries().set(serverData.latest_entries, {parse: true});
      //delete latest_entries from serverData   
      delete serverData.latest_entries; 
    }
    return serverData;
  },
  entries: function () {
    if (this._entries) {
      return this._entries;
    }
    this._entries = new NewsReader.Collections.Entries({}, { feed: this })
    return this._entries;
  }
})