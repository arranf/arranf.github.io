(function() {
  //var clientSecret = "9708c4b45e81"; //real
//var clientSecret = "76d12d0ddfaf";
  //var clientId = "ghost-frontend";
  $.get('http://blog.arranfrance.com/ghost/api/v0.1/posts?client_id=my-app&client_secret=XWfmJKYYh9', function(json) {
        alert("data.posts[0].title");
  }, "json");

  /*$.getJSON('http://blog.arranfrance.com/ghost/api/v0.1/posts?client_id=my-app&client_secret=XWfmJKYYh9', function(data){
      alert("data.posts[0].title")
    //document.getElementById("test").innerHTML=data.posts[0].title;
  });*/

})();
