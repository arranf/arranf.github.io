(function() {
  var api = "https://api.github.com/orgs/BricksandMortar/repos";
  $.getJSON( api)
  .done(function( data ) {

    $(data).each(function() {
      if(this.name != "bricksandmortar.github.io") {
        var output = "<a class='list-group-item' href='" +this.html_url+ "'>" + "<div class='row'><div class='col-sm-12'><i class='fa fa-3x fa-github pull-left'></i><h4 class='list-group-item-heading'>" + this.name + "</h4><p class='list-group-item-text'>" + this.description + "</p></div></div></a>";
        $('#github-append').append(output);
}

    });
  });
})();
