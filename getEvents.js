
   defaults = {};
    $(document).ready(function(){



$.ajax({
    url: "http://www.daymarksafety.mybigcommerce.com/upcoming-events/",  
    type: "GET", 
    success: function(data) {


        var Title1 = $(data).find('.PageContent li:eq(0) h4').html();
        var When1 = $(data).find('.PageContent li:eq(0) p:eq(0)').html();
        var Where1 = $(data).find('.PageContent li:eq(0) p:eq(1)').html();
        var What1 = $(data).find('.PageContent li:eq(0) p:eq(2)').html();
        var ImageC1 = $(data).find('.PageContent li:eq(0) img').attr('src');
          var Title2 = $(data).find('.PageContent li:eq(1) h4').html();
        var When2 = $(data).find('.PageContent li:eq(1) p:eq(0)').html();
        var Where2 = $(data).find('.PageContent li:eq(1) p:eq(1)').html();
        var What2 = $(data).find('.PageContent li:eq(1) p:eq(2)').html();
        var ImageC2 = $(data).find('.PageContent li:eq(1) img').attr('src');

          var Title3 = $(data).find('.PageContent li:eq(2) h4').html();
        var When3 = $(data).find('.PageContent li:eq(2) p:eq(0)').html();
        var Where3 = $(data).find('.PageContent li:eq(2) p:eq(1)').html();
        var What3 = $(data).find('.PageContent li:eq(2) p:eq(2)').html();
        var ImageC3 = $(data).find('.PageContent li:eq(2) img').attr('src');



        sessionStorage.setItem("EventTitle1",  Title1 );
        sessionStorage.setItem("EventWhen1",  When1 );
        sessionStorage.setItem("EventWhere1",  Where1 );
        sessionStorage.setItem("EventWhat1",  What1 );
        sessionStorage.setItem("EventImage1",  ImageC1 );

        sessionStorage.setItem("EventTitle2",  Title2 );
        sessionStorage.setItem("EventWhen2",  When2 );
        sessionStorage.setItem("EventWhere2",  Where2 );
        sessionStorage.setItem("EventWhat2",  What2 );
        sessionStorage.setItem("EventImage2",  ImageC2 );

        sessionStorage.setItem("EventTitle3",  Title3 );
        sessionStorage.setItem("EventWhen3",  When3 );
        sessionStorage.setItem("EventWhere3",  Where3 );
        sessionStorage.setItem("EventWhat3",  What3 );
        sessionStorage.setItem("EventImage3",  ImageC3 );

    }
});

setTimeout(function(){
var getTitle1 = sessionStorage.getItem('EventTitle1');
var getWhen1 = sessionStorage.getItem('EventWhen1');
var getWhere1 =sessionStorage.getItem('EventWhere1');
var getWhat1 = sessionStorage.getItem('EventWhat1');
var getImage1 = sessionStorage.getItem('EventImage1');

var getTitle2 = sessionStorage.getItem('EventTitle2');
var getWhen2 = sessionStorage.getItem('EventWhen2');
var getWhere2 =sessionStorage.getItem('EventWhere2');
var getWhat2 = sessionStorage.getItem('EventWhat2');
var getImage2 = sessionStorage.getItem('EventImage2');

var getTitle3 = sessionStorage.getItem('EventTitle3');
var getWhen3 = sessionStorage.getItem('EventWhen3');
var getWhere3 =sessionStorage.getItem('EventWhere3');
var getWhat3 = sessionStorage.getItem('EventWhat3');
var getImage3 = sessionStorage.getItem('EventImage3');

$('.eventBox1 h4').html(getTitle1);
$('.eventBox1 p:eq(0)').html(getWhen1);
$('.eventBox1 p:eq(1)').html(getWhere1);
$('.eventBox1 p:eq(2)').html(getWhat1);
$('.eventBox1 img').attr('src', getImage1);

$('.eventBox2 h4').html(getTitle2);
$('.eventBox2 p:eq(0)').html(getWhen2);
$('.eventBox2 p:eq(1)').html(getWhere2);
$('.eventBox2 p:eq(2)').html(getWhat2);
$('.eventBox2 img').attr('src', getImage2);

$('.eventBox3 h4').html(getTitle3);
$('.eventBox3 p:eq(0)').html(getWhen3);
$('.eventBox3 p:eq(1)').html(getWhere3);
$('.eventBox3 p:eq(2)').html(getWhat3);
$('.eventBox3 img').attr('src', getImage3);


},500);


setTimeout(function(){
$(".eventBox1 p:eq(2)").text(function(index, currentText) {
    return currentText.substr(0, 207) + '...';
});
$(".eventBox2 p:eq(2)").text(function(index, currentText) {
    return currentText.substr(0, 207) + '...';
});
$(".eventBox3 p:eq(2)").text(function(index, currentText) {
    return currentText.substr(0, 207) + '...';
});

// incase you navigate away from page
sessionStorage.clear();

},500)

$('.eventBox1 span, .eventBox2 span, .eventBox3 span ').attr("style", "");

});
   
