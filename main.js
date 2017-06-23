$(document).ready(function() {
  function randomQuote() {
    $('#get-quote').on('click', function(e){
      e.preventDefault();

      //document.getElementById("quotation").innerHTML = "Hello World";
      // Using jQuery
      $.ajax( {
          url: "http://quotes.stormconsultancy.co.uk/random.json",
          dataType: "jsonp",
          type: 'GET',
          success: function(json) {
             // do something with data
             console.log(json);
             data = json[0];
             $('#quotation').html('"'+json.quote+'"');
             $('#author').html('-- '+json.author+' --');
             $('a.twitter-share-button').attr('data-text',json.quote);
           },

      });

    });
    $('#share-quote').on('click', function() {
         var tweetQuote=$('#quotation').html();
         var tweetAuthor=$('#author').html();
         var url='https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetQuote+"\n"+tweetAuthor);
         window.open(url)
    });

  }
  randomQuote();
});
