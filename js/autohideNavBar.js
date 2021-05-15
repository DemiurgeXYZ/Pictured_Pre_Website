
// function isMobileDevice() {
//     return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// };

// function isMobileDevice2(){
//     if( navigator.userAgent.match(/Android/i)
//  || navigator.userAgent.match(/webOS/i)
//  || navigator.userAgent.match(/iPhone/i)
//  || navigator.userAgent.match(/iPad/i)
//  || navigator.userAgent.match(/iPod/i)
//  || navigator.userAgent.match(/BlackBerry/i)
//  || navigator.userAgent.match(/Windows Phone/i))
//  {
//      return true
//  } else { return false}
// }


// document.addEventListener("DOMContentLoaded", function(){
//     if(isMobileDevice() || isMobileDevice2()){
//     el_autohide = document.querySelector('.autohide');


    
//     // add padding-top to bady (if necessary)
//     // navbar_height = document.querySelector('.navbar').offsetHeight;
//     // document.body.style.paddingTop = navbar_height + 'px';
  
//     if(el_autohide){
//       var last_scroll_top = 0;
//       window.addEventListener('scroll', function() {
//             let scroll_top = window.scrollY;
//            if(scroll_top < last_scroll_top) {
//                 el_autohide.classList.remove('scrolled-down');
//                 el_autohide.classList.add('scrolled-up');
//             }
//             else {
//                 el_autohide.classList.remove('scrolled-up');
//                 el_autohide.classList.add('scrolled-down');
                
//             }
//             last_scroll_top = scroll_top;
//       }); 
//       // window.addEventListener
//     }
//     // if
// }
//   }); 
//   // DOMContentLoaded  end