(function($) {
'use strict';

  function init() {
    $('#fullpage').fullpage({
      anchors: ['1', '2', '3', '4'],
      navigation:true,
      responsiveHeight: 400,
      loopBottom: true,
      afterLoad: function(anchorLink, index){
        if(index == 1){
          $('.menu-wrapper').css('color', '#fff');
        }
        if(index == 2){
          $('.menu-wrapper').css('color', '#000');
        }
        if(index == 3){
          $('.menu-wrapper').css('color', '#fff');
        }
        if(index == 4){
          $('.menu-wrapper').css('color', '#000');
        }
      }
    });
  }

  var asd = '600';
  function windowSize(){
    if ($(window).width() <= asd){
      console.log(1);
      $.fn.fullpage.destroy('all');
    } else {
      init();
    }
  }

  $(window).on('load resize',windowSize);

  var overlay = $('#overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, #overlay');
  var modal = $('.modal_div');
  open_modal.click( function(event){
   event.preventDefault();
   var div = $(this).attr('data-href');
   overlay.fadeIn(400,
     function(){
       $(div)
       .css('display', 'table').css('z-index', '1000')
       .animate({opacity: 1, top: '30px'}, 200);
     });
 });
  close.click( function(){
    modal
    .animate({opacity: 0, top: '45%'}, 200,
     function(){
       $(this).css('display', 'none').css('z-index', '0');
       overlay.fadeOut(400);
     }
     );
  });

$('.form-control').mask("99 999-99-99");
})(jQuery);
