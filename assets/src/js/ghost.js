$(document).on('ready', function(){
  $.get('http://blog.arranfrance.com/ghost/api/v0.1/posts/?client_id=my-app&client_secret=XWfmJKYYh9', function (json) {
    console.log('test', json);
  });
});
