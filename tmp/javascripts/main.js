var capitaliseFirstLetter = function (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var buildTwitterLink = function (text, url) {
  var encodedUrl = encodeURIComponent(url);
  var referrer = encodeURIComponent("http://communitybuildingguide.com");
  // var url = "http%3A%2F%2Fbook.discovermeteor.com%2Fstarter%3Futm_source%3Dstarter%26utm_medium%3Dtwitter%26utm_campaign%3Dstarter_tweet";
  return "https://twitter.com/intent/tweet?original_referer="+referrer+"&url="+encodedUrl+"&text="+encodeURIComponent(text)+"&hashtags=combuild&via=telescopeapp";
}

var updateTweetLink = function () {
  var text = $('.tweet-content').val();
  var url = encodeURIComponent("http://communitybuildingguide.com");
  var twitterLink = "https://twitter.com/intent/tweet?original_referer="+url+"&text="+encodeURIComponent(text);
  var charRemaining = 151 - text.length;
  $('.tweet-link').attr('href', twitterLink);
  $('.tweet-counter').text(charRemaining);
  charRemaining <= 0 ? $('.tweet-counter').addClass('danger') : $('.tweet-counter').removeClass('danger'); 
}

$(function(){
  $('body').addClass('animate');
  $(".video").fitVids();
	$('#origin').val(document.referrer);

  $('.post-content>p:first-of-type').html(function (i, html){
    return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<span class="dropcap" data-content="$1"><span>$1</span></span>');
  });
  // window.Dropcap.layout(document.querySelectorAll(".dropcap"), 3);

  // Elements to inject
  var mySVGsToInject = document.querySelectorAll('.svg');

  // Do the injection
  SVGInjector(mySVGsToInject);

  if ($('.tweet-content').length) {
    updateTweetLink();
    $('.tweet-content').keyup(function () {
      updateTweetLink();
    });
  }
  
  $('[href="#twitter"]').each(function () {

    var $link = $(this);
    var text = "“"+capitaliseFirstLetter($link.text())+"”";
    var url = "http://communitybuildingguide.com"+window.location.pathname+"?utm_source=combuild&utm_medium=twitter&utm_campaign=twitter_quotes"
    var twitterLink = buildTwitterLink(text, url);

    $link.addClass('twitter-link').attr('href', twitterLink).attr('target', '_blank');

  });

});
