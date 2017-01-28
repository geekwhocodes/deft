(function(){
    'use strict';

    console.log("This is App");
    !function(n){n.fn.Panel=function(){return this.each(function(){var o=n(this),t=o.find(".ms-Panel-main");n(".js-togglePanel").on("click",function(){t.css({display:"block"}),o.toggleClass("is-open")}),t.on("animationend webkitAnimationEnd MSAnimationEnd",function(o){"fadeOut"===o.originalEvent.animationName&&n(this).css({display:"none"})})})}}(jQuery),$.fn.Panel&&$(".ms-Panel").Panel(),$(".newer-posts").addClass("ms-Button ms-Button--command ").addClass("colorWhite"),$(".older-posts").addClass("ms-Button ms-Button--command colorWhite"),$(".page-number").addClass("ms-Button ms-Button--command colorWhite");
    // var BreadcrumbHTML = document.querySelector('.ms-Breadcrumb');
    // var Breadcrumb = new fabric['Breadcrumb'](BreadcrumbHTML);
})();