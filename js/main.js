$(function(){
    $('.menu_btn').click(function(){
        $('.nav').toggle()
    })

    $('.nav nav>div>div').click(function(e){
        e.preventDefault();
        if($(this).attr('class') !='active'){
            $('.nav nav>div>div').removeClass('active');
            $(this).addClass('active');
            $('.sub').stop().slideUp();
            $(this).find('.sub').stop().slideToggle();
        }else{
            $(this).removeClass('active');
            $(this).find('.sub').stop().slideUp();
        }
    })

    var swiper = new Swiper(".mainslider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var swiper = new Swiper(".con3_slider", {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
        //   autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        //   },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

    $('.tab_content>div').hide();
    $('.con1').show();
    $('.t1').click(function(){
        $('.tab_content>div').hide();
        $('.con1').fadeIn();
        $('.tab_title>a').removeClass('active');
        $('.t1').addClass('active');
    })
    $('.t2').click(function(){
        $('.tab_content>div').hide();
        $('.con2').fadeIn();
        $('.tab_title>a').removeClass('active');
        $('.t2').addClass('active');
    })
    $('.t3').click(function(){
        $('.tab_content>div').hide();
        $('.con3').fadeIn();
        $('.tab_title>a').removeClass('active');
        $('.t3').addClass('active');
    })



    $('.sub1_bg > div').hide();
    $('.sub1_bg > div:first-child').show();
    $('.citation .sub1_main>div').click(function(e){
        var pdlindex=$(this).index();
        e.preventDefault();
        $('.sub1_bg>div').hide();
        $('.sub1_bg>div').eq(pdlindex).show();
    })
    $('.turboprop .sub1_main>div').click(function(e){
        var pdlindex=$(this).index();
        e.preventDefault();
        $('.sub1_bg>div').hide();
        $('.sub1_bg>div').eq(pdlindex+6).show();
    })
    $('.piston .sub1_main>div').click(function(e){
        var pdlindex=$(this).index();
        e.preventDefault();
        $('.sub1_bg>div').hide();
        $('.sub1_bg>div').eq(pdlindex+9).show();
    })

    
    $('.production_category>div>div:first-child').addClass('active');
    $('.prod_list_sub').children(":first").addClass('active');
  
    $('.production_category>div>div>a').click(function(e){
        var pdcindex=$(this).parent().index();
        console.log(pdcindex);
        e.preventDefault();
        if($(this).parent().attr('class') !='active'){
            $('.production_category>div>div').removeClass('active');
            $(this).parent().addClass('active');
            $('.prod_list_sub').children().removeClass('active');
            $('.prod_list_sub').children().eq(pdcindex).addClass('active');
        }else{
            $('.production_category>div>div').removeClass('active');
            $('.prod_list_sub').children().removeClass('active');
        }
    })


















    // $('.gallery .gall_area a').imageLightbox();
    var selectorF='a[data-imagelightbox="f"]';
    var instanceF=$(selectorF).imageLightbox({
        onStart:function(){
            overlayOn();closeButtonOn(instanceF);
            arrowsOn(instanceF,selectorF);
        },
        onEnd: function(){
            overlayOff();captionOff();closeButtonOff();arrowsOff();activityIndicatorOff();
        },
        onLoadStart:function(){
            captionOff();activityIndicatorOn();
        },
        onLoadEnd:function(){
            captionOn();activityIndicatorOff(); $('.imagelightbox').css('display','block');}
    });
    var
    // ACTIVITY INDICATOR

    activityIndicatorOn = function()
    {
        $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
    },
    activityIndicatorOff = function()
    {
        $( '#imagelightbox-loading' ).remove();
    },


    // OVERLAY

    overlayOn = function()
    {
        $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
    },
    overlayOff = function()
    {
        $( '#imagelightbox-overlay' ).remove();
    },


    // CLOSE BUTTON

    closeButtonOn = function( instance )
    {
        $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
    },
    closeButtonOff = function()
    {
        $( '#imagelightbox-close' ).remove();
    },
    
    arrowsOn = function( instance, selector )
    {
        var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

        $arrows.appendTo( 'body' );

        $arrows.on( 'click touchend', function( e )
        {
            e.preventDefault();

            var $this	= $( this ),
                $target	= $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                index	= $target.index( selector );

            if( $this.hasClass( 'imagelightbox-arrow-left' ) )
            {
                index = index - 1;
                if( !$( selector ).eq( index ).length )
                    index = $( selector ).length;
            }
            else
            {
                index = index + 1;
                if( !$( selector ).eq( index ).length )
                    index = 0;
            }

            instance.switchImageLightbox( index );
            return false;
        });
    },
    arrowsOff = function()
    {
        $( '.imagelightbox-arrow' ).remove();
    };
            
})