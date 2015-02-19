var updateTweetLink = function () {
  var contents = $('.tweet-content').val();
  var url = "http%3A%2F%2Fbook.discovermeteor.com%2Fstarter%3Futm_source%3Dstarter%26utm_medium%3Dtwitter%26utm_campaign%3Dstarter_tweet";
  var twitterLink = "https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fbook.discovermeteor.com&url="+url+"&text="+encodeURIComponent(contents);
  var charRemaining = 118 - contents.length;
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

  updateTweetLink();
  $('.tweet-content').keyup(function () {
    updateTweetLink();
  });
  
});
