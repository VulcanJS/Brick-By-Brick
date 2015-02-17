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

});
