(function() {
  //var clientSecret = "9708c4b45e81";
  var clientSecret = "76d12d0ddfaf";
  var clientId = "ghost-frontend";
  var api = "https://api.twitter.com/1.1/statuses/user_timeline.json";
  var screenName = "arranf";
  var count = "5";
  $.getJSON( api)
    .done(function( data ) {
      document.getElementById("test").innerHTML=data[0].title;
    });
})();
