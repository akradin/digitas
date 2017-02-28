'use strict';
const $ = require('jQuery');

let topScroll = () => {
  // scroll to top
  $('a[href="#top"]').on('click',function (e) {
     e.preventDefault();

     let target = this.hash;
     let $target = $('#top');

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 1100, 'swing', function () {
         $(window).location.hash = target;
     });
   });
};

$(()=>{
  topScroll();
});
