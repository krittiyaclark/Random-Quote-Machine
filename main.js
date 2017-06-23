$(document).ready(function() {
  function randomQuote() {
      // Using jQuery
      $.ajax( {
          url: "https://api.forismatic.com/api/1.0/?",
          dataType: "jsonp",
          data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
          type: 'GET',
          success: function(json) {
             // do something with data
             // console.log(json);
             //data = json[0];
             $('#quotation').html('"'+json.quoteText+'"');
             $('#author').html('-- '+json.quoteAuthor+' --');
             $('a.twitter-share-button').attr('data-text',json.quoteText);
           },

      });

    ('#get-quote').click
    $('#share-quote').click(function() {
         var tweetQuote=$('#quotation').html();
         var tweetAuthor=$('#author').html();
         var url='https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetQuote+"\n"+tweetAuthor);
         window.open(url)
    });

  }

      $(function() {
        randomQuote();
      });

      $('#get-quote').click(function() {
        randomQuote();
      });
});
