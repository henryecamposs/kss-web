(function(){var c=$(".dash-navbar-left"),e=$(".dnl-btn-toggle"),d=$(".dnl-btn-collapse"),a=$(".content-wrap"),b=a.data("effect"),i=$(window).height()-61;function g(){c.addClass("dnl-show").removeClass("dnl-hide");a.addClass(b);e.find("span").removeClass("fa-bars").addClass("fa-arrow-left")}function f(){c.removeClass("dnl-show").addClass("dnl-hide");a.removeClass(b);e.find("span").removeClass("fa-arrow-left").addClass("fa-bars")}c.addClass("dnl-hide");e.click(function(){if(c.hasClass("dnl-hide")){g()}else{f()}});d.click(function(j){j.preventDefault();if(c.hasClass("dnl-collapsed")){c.removeClass("dnl-collapsed");a.removeClass("dnl-collapsed");$(this).find(".dnl-link-icon").removeClass("fa-arrow-right").addClass("fa-arrow-left")}else{c.addClass("dnl-collapsed");a.addClass("dnl-collapsed");$(this).find(".dnl-link-icon").removeClass("fa-arrow-left").addClass("fa-arrow-right")}});$(".navbar-toggle").click(function(){if($(this).hasClass("collapsed")){f()}});e.click(function(){$(".navbar-toggle").addClass("collapsed");$(".navbar-collapse").removeClass("in")});function h(){try{document.createEvent("TouchEvent");return true}catch(j){return false}}if(h()==true){$(window).swipe({swipeRight:function(){g();$(".navbar-collapse").removeClass("in")},swipeLeft:function(){f()},threshold:75})}$(".dnl-nav > li > a").click(function(){$(document).find("ul .in").collapse("hide")});$(".dash-navbar-left").mouseenter(function(){$(this).removeClass("dnl-tiny")});$(".dash-navbar-left").one("click mouseenter",function(){$(this).addClass("dnl-tiny-first")});$(".dash-navbar-left").click(function(j){if(j.target.nodeName!="A"&&j.target.nodeName!="SPAN"){$(this).removeClass("dnl-tiny")}});$(".dash-navbar-left").mouseleave(function(){if(!$(this).hasClass("dnl-pinned")&&$(this).hasClass("dnl-tiny-first")){$(this).addClass("dnl-tiny")}});$(".content-wrap, .dash-navbar-top").click(function(j){if(!c.hasClass("dnl-pinned")){c.addClass("dnl-tiny")}});$(".dnl-pin-btn").click(function(){var k=!$(this).hasClass("dnl-pinned");var l=GetUrl("User")+"SetMainMenuIsPinned";Nutcache.Ajax.TryAjaxCall({url:l,contentType:"application/json; charset=utf-8",type:"POST",data:JSON.stringify({isPinned:k}),dataType:"json",success:function(m){},error:ManageAjaxError});var j=$("#bottom-action");if($("#bottom-action").length>0){j.hide()}if($(this).hasClass("dnl-pinned")){$(".content-wrap").removeClass("dnl-pinned");c.removeClass("dnl-pinned").addClass("dnl-tiny");$(this).removeClass("dnl-pinned").addClass("unpinned");$(".dnl-expand-btn").removeClass("dnl-pinned")}else{$(".content-wrap").addClass("dnl-pinned");c.addClass("dnl-pinned").removeClass("dnl-tiny-first");$(this).addClass("dnl-pinned").removeClass("unpinned");$(".dnl-expand-btn").addClass("dnl-pinned")}if($("#bottom-action").length>0){setTimeout(function(){j.show()},500)}});$(".dnl-expand-btn").click(function(j){j.preventDefault();if(!$(this).hasClass("dnl-pinned")){if($(this).hasClass("dnl-expanded")){c.removeClass("dnl-tiny");$(this).removeClass("dnl-expanded")}else{c.addClass("dnl-tiny");$(this).addClass("dnl-expanded")}}})})();