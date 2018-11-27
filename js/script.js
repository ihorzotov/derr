document.addEventListener("touchstart", function(){}, true);


$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();

    if(winTop >= 104){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
    if(winTop >= 250){
      $("body").addClass("anchor");
    }else{
      $("body").removeClass("anchor");
    }
  });
});

$(document).on("click",".fixed-anchor a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
           top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
});

  // spoiler
    $('.spoiler-wrapper-js').on("click",function(){
       $('.independent-block__spoiler').toggleClass('active');
    });
  //

  //activate coupon 
    $('.coupon-true__activate>button').click(function(){
      $(this).parent().addClass('active');
    });
  //

  //modal
    var login = $('.login');
    var closeModal = $('.close-modal');
    var buyerModal = $('.buyer-write__button');

    login.click(function(){
      $('body , html').addClass('active');
    });

      closeModal.click(function(){
        $('body,html').removeClass('active');
      });

    
      buyerModal.click(function(){
        $('.modal-feedback').toggleClass('active');
        $('body,html').toggleClass('overflow');
      });

      $('.modal-feedback__title i').click(function(){
          $('.modal-feedback, body , html').removeClass('active overflow');
      });
  //

    //init slick on click button
      $('#nav-review').click(function(){
        if($(this).hasClass('review-init')){
          return
        };
        $('.reviev-product__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object71"></span></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object8"></span></button>',
        appendArrows:$('.reviev-product--arrow'),
        responsive: [
              {
                breakpoint: 1680,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },{
                breakpoint: 1280,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },{
                breakpoint: 720,
                settings: {
                  vertical: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerPadding: "10px",
                  centerMode:true,
                }
              },
            ],
      });
        $(this).addClass('review-init');

    });
    //

    //HeaderSearch < 1680
  var searchSlide = $('.search-form__xl');

    searchSlide.click(function(){
      $(this).parent().toggleClass('active');
    });
    //

  //Dropdown menu on reg page
    var agreeSpoiler = $('.agree-block__spoiler');

      agreeSpoiler.click(function(){
        $(this).parent().addClass('active');
      });
  //

//removable slick
var slick_slider = $('.review-slider__wrapper');
var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object71"></span></button>',
    nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object8"></span></button>',
    appendArrows:$('.review--arrow'),
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },{
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },{
        breakpoint: 768,
        settings: {
          unslick: true,
        }
      }
    ],
  }

  slickSlReviewInit();

  function slickSlReviewInit(){
    if ($(window).width() >= 768) {
      if (!slick_slider.hasClass('slick-initialized'))
        slick_slider.slick(settings);
    }else{
      if (slick_slider.hasClass('slick-initialized'))
        slick_slider.slick('unslick');
    }
  }

  $(window).on('resize', function() {
    slickSlReviewInit();
  });
//

//Header slider
$('.showcase-slider').slick({
  dots: true,
  arrows:true,
});
//

$('.order-block__right').click(function(){
  $(this).parents('.order-block').remove();
})


//init-sliders
function initSlick(rootNode, options) {
    var defaults = {
        arrows:true,
        dots: false,
        prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object71"></span></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object8"></span></button>',
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1680,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ],
    }

    for (var option in options) {
        defaults[option] = options[option];
    }

    $(rootNode).slick(defaults);
}

var slickMap = [{
    node: '.stock-slider',
    options: {
        appendArrows:$('.stock--arrow'),
    }
},{
    node: '.leaders-slider',
    options: {
        appendArrows:$(".leaders--arrow"),
    }
},{
    node: '.new-slider',
    options: {
        appendArrows:$(".new--arrow"),
    }
},{
    node: '.buyer-slider__wrapper',
    options: {
        appendArrows:$('.buyer--arrow'),
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1680,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },{
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },{
            breakpoint: 720,
            settings: {
              vertical: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ],
    }
},{
    node: '.hero-block__card',
    options: {
        appendArrows:$(".card--arrow"),
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1680,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },{
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },{
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
      ],
    }
  },{
    node: '.slider-aside__nav',
    options: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      infinite: false,
      swipe:false,
      asNavFor: '.slider-aside',
      responsive: [
          {
            breakpoint: 1680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ],
    }
  },{
    node: '.slider-aside',
    options: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical:true,
      asNavFor: '.slider-aside__nav',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object121"></span></button>',
      nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object131"></span></button>',
      responsive: [
          {
            breakpoint: 1680,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              vertical:false,
              swipe: false,
              prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object71"></span></button>',
              nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object8"></span></button>',
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              vertical:true,
              infinite: true,
            }
          },{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              vertical:true,
              infinite: true,
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite:true,
              vertical:false,
              centerMode: false,
              prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object71"></span></button>',
              nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object8"></span></button>',
            }
          }
        ],
    }
  },{
    node: '.with-slider',
    options: {
        appendArrows:$(".with--arrow"),
    }
  },{
    node: '.viewed-slider',
    options: {
      slidesToShow: 2,
      slidesToScroll: 1,
      appendArrows:$(".viewed--arrow"),
      responsive: [
          {
            breakpoint: 1680,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ],
    }
  },{
    node: '.same-slider',
    options: {
        appendArrows:$(".same--arrow"),
    }
  }
];


slickMap.forEach(function(slick){
    initSlick(slick.node, slick.options)
});
//

//rising placeholder 
$(document).ready(function($) {
var holder = $(".input-holder input,textarea")
 holder.focus(function(){
   $(this).parent().addClass("active");

  }).blur(function(){
       $(this).parent().removeClass("active");
  })
});    

$(document).ready(function(){
   $('.personal-info__form .input-holder input , textarea').each(function() { if($(this).val().length > 0) $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').hide();
    $(this).change(function() {
      if($(this).val().length > 0)
          $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').addClass('hold');
       else 
          $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').removeClass('hold');
    });
  });
});
//

//tabs 
$(".cart-tabs__item").not(":first").hide();
$(".js-cart__tabs").click(function() {
    $(".js-cart__tabs").removeClass("active").eq($(this).index()).addClass("active");
    $(".cart-tabs__item").hide().eq($(this).index()).fadeIn()
});

$(".account-tabs__item").not(":first").hide();
$(".account-tabs .nav-menu__item").click(function() {
    $(".account-tabs .nav-menu__item").removeClass("active").eq($(this).index()).addClass("active");
    $(".account-tabs__item").hide().eq($(this).index()).fadeIn()
});

$(".card-product__item").not(":first").hide();
$(".card-product__tabs .nav-menu__item").click(function() {
    $(".card-product__tabs .nav-menu__item").removeClass("active").eq($(this).index()).addClass("active");
    $(".card-product__item").hide().eq($(this).index()).fadeIn()
});
//


//account anchor
function selectTab(hash){
    $('#'+hash).addClass('active');
    $(".account-tabs__item").not("#"+hash).hide();
    $(".account-tabs .nav-menu__item").not("#"+hash).removeClass("active");
    $("[data-page='"+hash+"']").show();

  };
$(function() {
  var type = window.location.hash.substr(1);
  
  if(type != "")
    selectTab(type);
});
//

//order history dropdown card
  var historySpoiler = $('.history-container__card');

   historySpoiler.click(function(){
    $(this).toggleClass('active');
   });
//

// order history sort button
$('.history-header>div').on('click', function(){
  $('.history-header>div').not(this).removeClass('decr acr');
  
  if($(this).hasClass('acr'))
     $(this).removeClass('acr').addClass('decr');
  else
     $(this).removeClass('decr').addClass('acr');
});
//

//nav-menu slider
 $('.nav-menu__slider').on("click",function(){
   var direction = $(this).hasClass('nav-btn__left');

   if(direction == true){
      $('.nav-menu').animate({scrollLeft:'0'},500, 'swing');
   }else {
    $('.nav-menu').animate({scrollLeft:'160'},500, 'swing');
   }
 });

function overflowActive(){
  var screenWidth = $(window).width();
  var navMenu = $('.nav-wrapper');
  var liWidth = $('.nav-menu__list li').outerWidth();
  var liCount = $('.nav-menu__list li').length;

  if(screenWidth < liWidth*liCount) {
    navMenu.addClass('btn-active');
  }else{
    navMenu.removeClass('btn-active');
  }
};

$('.nav-menu').on('scroll', function(){
   var scrollX = $(this).scrollLeft();
   
   
   if(scrollX > 0){
    $('.nav-btn__left').removeClass('nav-btn__hidden');
   }else if(scrollX == 0){
    $('.nav-btn__left').addClass('nav-btn__hidden');
   }
   if(scrollX < 160 && scrollX != 0){
    $('.nav-btn__right').addClass('nav-btn__hidden');
   }else if (scrollX == 0){
    $('.nav-btn__right').removeClass('nav-btn__hidden');
   }

});

$(window).resize(function(){
  overflowActive();
});
overflowActive();
  
  function addMenusChevrons() {
    var item = $('.product__list .product__item:last-child');
    var secondUls = $(item).find('.dropdown-content__list ul');
    var isUlInside = secondUls.length;
    
    if(isUlInside > 0){
      secondUls.parents('.title-decoration__menu').addClass('title-decoration__menu--hover');
      return;
    }
  }

  addMenusChevrons();

  $('.product__list .product__item').not(':last-child').each(function(key,item){
    var secondUls = $(item).find('.dropdown-content__list ul');
    var isUlInside = secondUls.length;

    if(isUlInside > 0){
      secondUls.parents('.title-decoration__menu').addClass('title-decoration__menu--hover');
      return;
    }

    var firstChildLi = $(item).find('.dropdown-content__list>li');
    var liEq = firstChildLi.length;

    var ulLiSizes = {
      'ulWidth': '50%',
    };

    if(liEq > 15) {
      ulLiSizes.ulWidth = '75%';
      ulLiSizes.liWidth = '50%';

    }

    $(item).find('.dropdown').css({'width': ulLiSizes.ulWidth});
    firstChildLi.css({'width': ulLiSizes.liWidth});

    

  });

//removable slick if <720 && >1023

var catalogueReviewSlider = $('.catalogue-content__slider');
var settingsSlInit = {
    dots:false,
    infinite: true,
    appendArrows:$('.catalogue-content__arrow'),
    prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object71"></span></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><span class="icon-Vector-Smart-Object8"></span></button>',
}

    //$catalogueReviewSlider.slick(settings);
    slickSlInit();

  function slickSlInit() {
    if( $(window).width() < 1024 && $(window).width() > 719) {
      if(!catalogueReviewSlider.hasClass('slick-initialized'))
        catalogueReviewSlider.slick(settingsSlInit);
    }else {
      if(catalogueReviewSlider.hasClass('slick-initialized'))
        catalogueReviewSlider.slick('unslick'); 
    }
  }

  $(window).on('resize', function() {
    slickSlInit();
  });
//

//mediaJS
$(document).ready(function(){
  mediaJs();

  $(window).resize(function(){
    mediaJs();
});


  function mediaJs(){
    var width = $(window).width();
    var spoiler = $('.derrjava__text-spoiler');
    var footerSpoiler = $('.footer-nav__item span');
    var bottomSpoiler = $('.meta-block__bottom p');
    var charSpoiler = $('.characteristics-spoiler');
    var charText = $('.characteristics-text');
    var sortGrid = $('.sort-grid__js');
    var sortList = $('.sort-list__js');
    var sortToggler = $('.sort-grid__js , .sort-list__js');
    var productList = $('.catalogue-content__product')
    var filterOut = $('.catalogue-content__filters h6');
    var contentSort = $('.catalogue-content__sort');
    var categoryBtn = $('.product h1');
    var slLinks = $('.social-links__button span')
    //product-card spoiler
      bottomSpoiler.off('click');

      if (width < 1920){
         bottomSpoiler.click(function(){
          $(this).parent().toggleClass('active');
         });
      };
    //

      //catalogue tabs grid > list
        if (width > 1279){

        sortToggler.click(function(){
          $(this).addClass("active");
          $('.sort-tabs').not($(this)).removeClass('active');
        });
          sortList.click(function(){
            productList.addClass("list");
          });
          sortGrid.click(function(){
            productList.removeClass("list");
          });
        }else{
          sortToggler.addClass("active");
          sortList.removeClass("active");
          productList.removeClass("list");
        }
      //

      //spoilers
      spoiler.off('click');

      if (width < 1680) {
        spoiler.on('click', function(){
          $('.derrjava,.buyer-info ,.catalogue-content__spoiler').toggleClass('active');
        });
      }

      charSpoiler.off('click');

      if (width < 1366){

          charSpoiler.on("click",function(){
          charText.toggleClass('active');
        });
      };
      //
      slLinks.off('click');

      if (width < 1280){
        slLinks.click(function(){
          $('.social-links__wrapper').toggleClass('active');
       });
      }
      //catalogue pull-out menu
      filterOut.off('click');
          
      if (width < 1024){

          filterOut.on("click",function(){
          $(this).parent().toggleClass('active');
        });
      }
      //
      if (width < 1280 && width > 1024) {
          var dynamic = $('.characteristics-img');
          var static = $('.characteristics-text');
          static.height(dynamic.height());
      }

      if (width > 1024){
        $('.section-review').appendTo($('.js-append__review'));
      }
      //


      //footer spoiler menu
      footerSpoiler.off('click');

      if (width < 768){
        footerSpoiler.click(function(){
          $(this).parent().toggleClass('active');
        });
      }
      //


      contentSort.off('click');

      categoryBtn.off('click');
      
      if (width < 720){
        categoryBtn.click(function(){
          $(this).parent().toggleClass('active');
        });

        contentSort.click(function(){
          $(this).toggleClass('active');
        });
      }
      //append header hamburger
      if(width < 720)
        $('.header-info').appendTo($('.header-product__holder'));
      else
        $('.header-info').appendTo($('.header-content'));
      //

  }
});
//

//spoiler
$('.modification-check__spoiler').click(function(){
  $('.modification-check').toggleClass('active');
});
//

//custom SELECT
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
        });
        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.html();
            obj.index = opt.index();
            obj.placeholder.html(obj.val);
            opt.siblings().removeClass('selected');
            opt.addClass('selected');
        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    var dd1 = new DropDown($('#text-sort'));
    var dd2 = new DropDown($('#number-sort'));
    var dd3 = new DropDown($('#department'));
    var dd3 = new DropDown($('#currensy-chenger'));
    
    $(document).click(function () {
        $('.wrap-drop').removeClass('active');
    });
});
//


// CART JS COUNTERS

$('.amount-select__text').on('keyup', function(event){
  mf_item_calc($(this));
});

function mf_item_calc(item) {
  var $thisInputEl = $(item).parents('.amount-select__buttons').find('.amount-select__text');
  var $thisItemEL = $(item).parents('.dropdown-product__item');
  var mf_item_amount_value = parseInt($thisInputEl.val());
  var mf_item_totalprice_value = parseFloat($thisItemEL.attr('data-dropdown__price')) * mf_item_amount_value;

  $thisItemEL.attr('data-dropdown__amount', mf_item_amount_value);
  $thisItemEL.attr('data-dropdown__total', mf_item_totalprice_value);

  $thisItemEL.find('.dropdown-product__fulltotal').html(mf_item_totalprice_value);

  // cart counter changer
  var mf_cart_amount = $('.mf-cart__amount');
  var mf_cart_price = $('.mf-cart__price');

  mf_cart_price.html(mf_count_cart_price());
}

function mf_count_cart_price(){
  var totalPrice = 0;

  $('.dp_f_mirror').map(function(key, item){
    totalPrice += parseFloat($(item).html());
    
  });

  return totalPrice;
}


$('.total-column__delete i').on('click',function(){
    var dropdown_delete_calc = parseFloat($(this).parents('.dropdown-product__item').attr('data-dropdown__total'));
    var mf_cart_price = parseFloat($('.mf-cart__price').html());
    mf_cart_price -= dropdown_delete_calc;
    $('.mf-cart__price').html(mf_cart_price);
    $(this).parents('.dropdown-product__item').remove();

    //remove total amount 
    var mf_listLength = parseInt($('.dropdown-product .dropdown-product__item').length);
    $('.mf-cart__amount').html(mf_listLength);
});

// CART JS COUNTERS


//input calc +&&-
$(document).ready(function() {
  var minusBtn = $('.amount-select__minus');
  var plusBtn = $('.amount-select__plus');
  var inputNumber = $('.amount-select__text');

    minusBtn.click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();

      mf_item_calc($(this));
      return false;
    });

    inputNumber.on('keyup',function(e){
      $(this).val($(this).val().replace( /[^\d]/g ,'')); 
    });

    plusBtn.click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();

      mf_item_calc($(this));
      return false;
    });
});
//


//add to cart on click buy and calc it
$('.shop-slider__buy').on('click',function(event){
  var quantityAdded = $(".quantity");
  quantityAdded.addClass("added");

  setTimeout(function(){
  
    quantityAdded.removeClass("added"); 
    
  }, 300);

    event.preventDefault();

    var itemParent = $(this).parents('.data-holder__card');
    var itemObjAmount = itemParent.find('.amount-select__text').val();

     var item = {
      'id': itemParent.attr('data-item__id'),
      'title': itemParent.attr('data-item__title'),
      'price': parseFloat(itemParent.attr('data-item__price')),
      'img': itemParent.attr('data-item__img'),
      'amount':  (itemObjAmount == null)? 1 : parseInt(itemObjAmount)
     }

    var staffBlock = $('.stuff');

    var totalPrice = parseFloat(staffBlock.attr('data-total__price'));
    
    var itemsCountedPrice = item.price * item.amount;

    totalPrice += itemsCountedPrice;
    

    var staffItem = $('.stuff__list[data-stuff__id = "'+item.id+'"]');

    // Add Data Num ammount
    var cartAmount = $('.cart-menu[data-num]');
    var dataNum = parseInt(cartAmount.attr('data-num'));
    
    dataNum += item.amount;
    /*
    if(item.amount == "undefined") {
      dataNum += 1;
    }else{
      dataNum +=item.amount;
    }*/

    cartAmount.attr('data-num', dataNum);
    cartAmount.find('.cart .stuff-amount').html(dataNum);

    //add to cart on click buy
    if (staffItem.length){
        var staffItemAmount = parseInt(staffItem.attr('data-stuff__ammount'));
        staffItemAmount += item.amount;

        staffItem.find('.stuff-amount').html(staffItemAmount);
        staffItem.attr('data-stuff__ammount', staffItemAmount);
    }else{
      var cartHtml = '<ul class="stuff__list" data-stuff__price="'+item.price+'" data-stuff__ammount="'+item.amount+'" data-stuff__id="'+item.id+'">\
                <li class="stuff__logo">\
                  <img src="'+item.img+'" alt="">\
                </li>\
                <li class="stuff-title">\
                  <div class="stuff-title__description">\
                    <a href="#">'+item.title+'</a>\
                  </div>\
                  <div class="stuff-title__price">\
                    <span>'+item.price+' руб.</span>\
                    <span><span class="stuff-amount">'+item.amount+'</span> шт.</span>\
                  </div>\
                </li>\
                <li class="stuff__delete"><i class="icon-Vector-Smart-Object"></i></li>\
              </ul>';
      staffBlock.append(cartHtml);
    }


    changeCartTotalPrice(totalPrice);
  
});
    

//delete stuff from cart and calc it
$(document).on('click','.stuff__delete', function(){
  var quantityAdded = $(".quantity");
    
    quantityAdded.addClass("added");

    setTimeout(function(){
    
      quantityAdded.removeClass("added"); 
      
    }, 300);

  var parentItem = $(this).parent();

  var itemAmount = parseInt(parentItem.attr('data-stuff__ammount'));
  var itemPrice = parseFloat(parentItem.attr('data-stuff__price')) 
                  * itemAmount;

  var staffBlock = $('.stuff');
  var totalPrice = parseFloat(staffBlock.attr('data-total__price'));
  totalPrice -= itemPrice;

  minusItemsAmount(itemAmount);
  changeCartTotalPrice(totalPrice);


  parentItem.remove();
});
//

function minusItemsAmount(value){
  var cartAmount = $('.cart-menu[data-num]');
  var actualCartAmount = parseInt(cartAmount.attr('data-num'));

  actualCartAmount -= value;

  cartAmount.attr('data-num', actualCartAmount);
  cartAmount.find('.cart .stuff-amount').html(actualCartAmount);
}
//
function changeCartTotalPrice(totalPrice){
  $('.total-amount').html(totalPrice);
  $('.stuff').attr('data-total__price', totalPrice);
};

$('.catalogue-category__item .checkbox input').on('click', function(){
  var filterName = $(this).attr('name');
  var checkName = $(this).parents('[data-checkname]').attr('data-checkname');

  var checkedFilters = $('.checked-filters');
  var checked = $(this).prop( "checked");

  var checkedFiltersContent = '<ul class="checked-filters__list" data-filter__name="'+filterName+'" >\
                                <li class="checked-filters__item">\
                                  <i class="icon-baseline-close-24px"></i>\
                                  <span>'+checkName+'</span>\
                                </li>\
                              </ul>';
  if (checked) {
    checkedFilters.append(checkedFiltersContent);
  }else{
    $("[data-filter__name='"+filterName+"']").remove();
  }
  
  checkVerify();
});
//


//delete fliter
$(document).on('click','.checked-filters__item i',function(){
  var thisFilterRemovable = $(this).parents('.checked-filters__list');
  var thisFilterRemovableName = thisFilterRemovable.attr('data-filter__name');

  thisFilterRemovable.remove();
  
  $('input[name="'+thisFilterRemovableName+'"]').prop( "checked", false );
  checkVerify();
});

function checkVerify() {
  var samSlider = $('.checked-filters__list');
 
  if (samSlider.length == 0) {
    $('.checked-filters').parent().addClass('empty');
  }else{
    $('.checked-filters').parent().removeClass('empty');
  }
};
//


$('.header-content__item.tell button ,.tell-modal').click(function(){
  $('.modal-call').addClass('active');
  $('body, html').addClass('overflow');
})
$('.modal-call .close-modal').click(function(){
   $('.modal-call').removeClass('active');
  $('body, html').removeClass('overflow');
})

$('.order-tabs').on('click', function(){
    $('#tabs-item__first').hide();
    $('#tabs-item__second').show();
    $('.js-cart__tabs').removeClass('active');
    $('.js-order').addClass('active')
}); 


$('.suggest-block .section-footer a').click(function(){
  $('.suggest-modal').addClass('active');
  $('body, html').addClass('overflow');
});

$('.suggest-modal__close').click(function(){
  $(this).parents('.suggest-modal').removeClass('active');
  $('body, html').removeClass('overflow');
});

