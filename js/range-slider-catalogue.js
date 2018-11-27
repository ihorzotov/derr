//price slider 
$( function() {
  var sliderMinValue = parseInt($(".range-slider").attr('data-min'));
  var sliderMaxValue = parseInt($(".range-slider").attr('data-max'));
  $( "#slider-range" ).slider({
    range: true,
    swipe:true,
    min: sliderMinValue,
    max: sliderMaxValue,
    values: [ 1,  sliderMaxValue],
    slide: function( event, ui ) {
      $( "#amount" ).val(   ui.values[ 0 ]+" руб" +" - "+ ui.values[ 1 ]+ " руб"   );
    }

  });
  $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 )+" руб" +
    " - " + $( "#slider-range" ).slider( "values", 1 )+ " руб"   );
});
//
