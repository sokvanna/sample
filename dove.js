
$(document).ready(function() {
    $('.Left .category-list > li').find('ul').hide();
    $('.Left .category-list > li').find('ul').each(function() {
        $(this).parent().append('<span class="arrow"></span>');
    });
    $('.arrow').click(function() {
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass('rotated');
    });

    var master = [];

  $('.Breadcrumb').find('li').each(function(index,value) {
      master.push($(this).text());
  });

  $('.Left .category-list').find('a').each(function(a,b) {
    $.each(master, function(i,v) {
      if ($(b).text() === v) {
        $(b).parent('li').children('ul').show();
        $(b).parent('li').children('.arrow').toggleClass('rotated');
      }
    });
  });
})
