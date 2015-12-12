(function() {
  //var clientSecret = "9708c4b45e81";
  var clientSecret = "76d12d0ddfaf";
  var clientId = "ghost-frontend";
  var api = "http://localhost:2368/ghost/api/v0.1/posts?client_id=ghost_frontend&client_secret="+clientSecret;
  $.getJSON( api)
    .done(function( data ) {
      document.getElementById("test").innerHTML=data[0].title;
    });
})();
