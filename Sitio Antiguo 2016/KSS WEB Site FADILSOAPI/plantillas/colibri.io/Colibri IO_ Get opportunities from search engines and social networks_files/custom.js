(function(){

    /* genral code from plugin vivaco shortcode */
    // Fix chrome issue
    jQuery('body').width(jQuery('body').width()+1).width('auto');

    // Parallax Backgrounds and VC CSS Animation
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        jQuery('.parallax-section').css({'background-attachment': 'scroll'});
        jQuery.each(jQuery('.wpb_animate_when_almost_visible'), function () { jQuery(this).removeClass('wpb_animate_when_almost_visible').attr('style', ''); });
    } else {
        jQuery('.parallax-section[id^="parallax-"]').parallax("50%", 0.4);
    }

    if($ === undefined) {
        $ = jQuery;
    }

    function vc_progress_bar() {
        if ( typeof $.fn.waypoint !== 'undefined' ) {
            $('.vsc_progress_bar').each(function (index) {
                $(this).waypoint(function () {
                    var $this = $(this),
                        bar = $this.find('.vsc_bar'),
                        val = bar.data('percentage-value');

                    setTimeout(function () {
                        bar.css({"width": val + '%'});
                    }, index * 10 );
                }, { offset:'95%' });
            });
        }
    }

    function smoothScroll() {
        !function(){function e(){var e=!1;e&&c("keydown",r),v.keyboardSupport&&!e&&u("keydown",r)}function t(){if(document.body){var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?o:t,w=t,e(),x=!0,top!=self)y=!0;else if(r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=!1,i=function(){a||o.scrollHeight==document.height||(a=!0,setTimeout(function(){o.style.height=document.height+"px",a=!1},500))};if(o.style.height="auto",setTimeout(i,10),S.offsetHeight<=n){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o,n){if(n||(n=1e3),d(t,o),1!=v.accelerationMax){var r=+new Date,a=r-C;if(a<v.accelerationDelta){var i=(1+30/a)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,o*=i)}C=+new Date}if(M.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(){for(var r=+new Date,a=0,i=0,c=0;c<M.length;c++){var s=M[c],d=r-s.start,f=d>=v.animationTime,h=f?1:d/v.animationTime;v.pulseAlgorithm&&(h=p(h));var m=s.x*h-s.lastX>>0,w=s.y*h-s.lastY>>0;a+=m,i+=w,s.lastX+=m,s.lastY+=w,f&&(M.splice(c,1),c--)}l?window.scrollBy(a,i):(a&&(e.scrollLeft+=a),i&&(e.scrollTop+=i)),t||o||(M=[]),M.length?E(u,e,n/v.frameRate+1):T=!1};E(u,e,0),T=!0}}function n(e){x||t();var n=e.target,r=l(n);if(!r||e.defaultPrevented||s(w,"embed")||s(n,"embed")&&/\.pdf/i.test(n.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return a||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(a)>1.2&&(a*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),o(r,-a,-i),e.preventDefault(),void 0)}function r(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var r,a=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-v.arrowScroll;break;case H.down:i=v.arrowScroll;break;case H.spacebar:r=e.shiftKey?1:-1,i=-r*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}o(u,a,i),e.preventDefault()}function a(e){w=e.target}function i(e,t){for(var o=e.length;o--;)z[N(e[o])]=t;return t}function l(e){var t=[],o=S.scrollHeight;do{var n=z[N(e)];if(n)return i(t,n);if(t.push(e),o===e.scrollHeight){if(!y||S.clientHeight+10<o)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,o){window.addEventListener(e,t,o||!1)}function c(e,t,o){window.removeEventListener(e,t,o||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(A);var t=D[0]==D[1]&&D[1]==D[2],o=h(D[0],120)&&h(D[1],120)&&h(D[2],120);return!(t||o)}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,o,n;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w,g={frameRate:150,animationTime:800,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=g,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=g,M=[],T=!1,C=+new Date,z={};setInterval(function(){z={}},1e4);var A,N=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),E=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L="onmousewheel"in document;L&&K&&(u("mousedown",a),u("mousewheel",n),u("load",t))}();
    }

    // Init global DOM elements, functions and arrays
    window.app              = {el : {}, fn : {}};
    app.el.window           = $(window);
    app.el.document         = $(document);
    app.el.loader           = $('#loader');
    app.el.mask             = $('#mask');

    app.fn.screenSize = function() {
        var width = window.innerWidth;
        if(width < 320) app.size = "Not supported";
        else if(width < 480) app.size = "Mobile portrait";
        else if(width < 768) app.size = "Mobile landscape";
        else if(width < 960) app.size = "Tablet";
        else app.size = "Desktop";
    };

    if ( typeof $.smoothScroll != 'undefined' ) smoothScroll();

    //Preloader
    app.el['loader'].delay(700).fadeOut();
    app.el['mask'].delay(1200).fadeOut("slow");

    setTimeout(function () {
        vc_progress_bar();
    }, 1200);

    // Resized based on screen size
    app.el.document.on('ready', function () { app.fn.screenSize(); });
    app.el.window.on('resize', function() { app.fn.screenSize(); });

    $('body').on('click', '.dropdown > a', function (event) {
        if ( window.innerWidth > 1024 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) return false;
        else if ( $(this).closest('.dropdown-menu').length ) { $(this).closest('.dropdown').toggleClass('open'); return false; }

        $(this).closest('.dropdown').find('.dropdown').removeClass('open');
    });

    //Flexislider for testimonials
    if($('.testimonials-slider').length != 0) {
        $('.testimonials-slider').flexslider({
            manualControls: '.flex-manual .switch',
            nextText: "",
            prevText: "",
            startAt: 1,
            slideshow: false,
            direction: "horizontal",
            animation: "slide"
        });
    };

    if ($('#portfolio-wrapper').length != 0) {
        $(".portfolio[data-pretty^='prettyPhoto[port_gal]']").prettyPhoto();
    }

    // Headhesive init
    var stickyMenu = (typeof themeOptions != 'undefined' && themeOptions.stickyMenu) ? + themeOptions.stickyMenu : false,
        counter = 0,
        offsetOption = (typeof themeOptions != 'undefined' && themeOptions.menuPosition) ? +themeOptions.menuPosition : 600,
        options = { // set options
            offset: offsetOption,
            classes: {
                clone:   'fixmenu-clone',
                stick:   'fixmenu-stick',
                unstick: 'fixmenu-unstick'
            },
            onStick: function() {
                if ( $('.navbar-collapse').not('.collapsed').length ) $('.navbar-collapse').not('.collapsed').closest('.navigation-header').find('.navigation-toggle').trigger('click');
            },
            onUnstick: function() {
                if ( $('.navbar-collapse').not('.collapsed').length ) setTimeout(function() {$('.navbar-collapse').not('.collapsed').closest('.navigation-header').find('.navigation-toggle').trigger('click');}, 100);
            }
        };

    if ( stickyMenu ) {
        var fixmenu = new Headhesive('.navigation-header', options); // init
    }

    if( $('.nav-tabs').length > 0 ) {
        $('.nav-tabs li:first-child a').trigger('click');
    }

    if ( window.location.pathname == '/' && window.location.search == '' ) {
        // Navigation Scroll
        $('.navigation-bar').onePageNav({
            currentClass: 'current',
            changeHash: true,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            easing: 'swing',

            begin: function() {
               //I get fired when the animation is starting
            },
            end: function() {
               //I get fired when the animation is ending
            }
        });
    }

    if ( window.innerWidth <= 1024 ) {
        $('.navigation-header .navbar-collapse').css({'height': $(window).height(), 'max-height': $(window).height()});
    }

    $('.navigation-toggle').on('click', function () {
        if ( window.innerWidth <= 1024 ) {
            var $btn = $(this),
                $menu = $btn.closest('.navigation-header').find('.navbar-collapse');

            counter = 0;

            if ( $menu.hasClass('collapsing') ) {
                return false;

            } else {
                if ( $menu.hasClass('collapsed') ) {
                    $menu.addClass('collapsing');
                    $menu.removeClass('collapsed');
                    $btn.closest('.navigation-header').addClass(' collapsed');
                    $('#main-content').addClass('collapsed');
                } else {
                    $menu.addClass('collapsing');
                    $menu.addClass('collapsed');
                    $btn.closest('.navigation-header').removeClass('collapsed');
                    $('#main-content').removeClass('collapsed');
                }

                setTimeout(function() { $menu.removeClass('collapsing'); }, 400)
            }
        }
    });

    $(window).on('scroll', function () {
        if ( $('.navbar-collapse').not('.collapsed').length ) {
            counter++;

            if ( counter > 10 ) {
                $('.navbar-collapse').not('.collapsed').closest('.navigation-header').find('.navigation-toggle').trigger('click');
                counter = 0;
            }
        }
    });

    $(window).on('resize', function () {
        if ( $('.navbar-collapse').not('.collapsed').length ) $('.navbar-collapse').not('.collapsed').closest('.navigation-header').find('.navigation-toggle').trigger('click');

        if ( window.innerWidth <= 1024 ) {
            $('.navigation-header .navbar-collapse').css({'height': $(window).height(), 'max-height': $(window).height()});
        } else {
            $('.navigation-header .navbar-collapse').css({'height': 'auto', 'max-height': 'auto'});
        }
    });


    if ( $('.nav-tabs').length ) $('.nav-tabs li:first-child a').trigger('click');

      // Disable animations on small desktop
    if ( window.innerWidth <= 1024 ) $('.animated').css('opacity', 1);

    // fade in .back-to-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });
    //Fix slider container padding
    $('.wpb_revslider_element').parents('.wpb_column').addClass('no-padding');

    //Fix one-page highlights
    //$('#menu-main li').removeClass('active');
    if ($('body').hasClass('page-template-page-home-php')) { $('.navigation-bar-left > li:first-child').addClass('current'); }

    //Fix fast registration form validation error
    if($('.form-register-small').length != ''){$('.wpcf7-response-output').addClass('alt-error');}
    $('.form-register-small .password').replaceWith($('.form-register-small .password').clone().attr('type', 'password'));

    // // count down timer
    // var futureDate = new Date();
    // // count down 10 days from today
    // futureDate.setDate( futureDate.getDate() + 10 );
    // // or set specific date in the future
    // futureDate = new Date(2014, 7, 26);
    // $('.countdown').countdown({
    //     until       : futureDate,
    //     compact     : true,
    //     padZeroes   : true,
    //     layout      : $('.countdown').html()
    // });

    var windowHeight = $(window).height()-55;
    // $('.navbar-collapse').css('max-height', windowHeight);

})();
