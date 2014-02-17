App = Ember.Application.create();

App.Router.map(function() {
    this.resource("about");
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return App.RedditLink.findAll('aww');
    }
});


// Create the controller so you can trap the input action and act on it
App.IndexController = Ember.ObjectController.extend( {
    subredditHeader: "aww"
});

// Our RedditLink model
App.RedditLink = Ember.Object.extend({

    thumbnailUrl: function() {
        var thumbnail = this.get('thumbnail');
        return (thumbnail === 'default') ? null : thumbnail;
    }.property('thumbnail')

});

App.RedditLink.reopenClass({

    findAll: function(subreddit) {
        var links = [];
        $.getJSON("http://www.reddit.com/r/" + subreddit + "/.json?jsonp=?").then(function(response)
        {
            response.data.children.forEach(function (child)
            {
                    links.pushObject(App.RedditLink.create(child.data));
            });
        });
        console.log( links );
        return links;
    }

});

