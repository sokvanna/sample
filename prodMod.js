$(document).ready(function() {
    $('.productAttributeValue').next('div').find('option:contains("Logo")').css('display', 'none');
    sessionStorage.prodySKU = $('.VariationProductSKU').text().trim();

    $.get('/content/ProductOptions.csv', function(data) {
        console.log(sessionStorage.school);
        var rows = $.csv.toObjects(data)
        schoolArr = rows.filter(function(value, index, arr) {
            if (value.school_URL == sessionStorage.school) {
                return true;
            }
            return false;
        });

        products = schoolArr.filter(function(value, index, arr) {
            if (value.baseproduct_SKU == sessionStorage.prodySKU) {
                return true;
            }

            return false;
        });

        console.log(products[0]);

        if (typeof(products[0]) == 'undefined') {

            embroid = null;

        } else {

            colors = products[0].Colors;
            embroid = products[0].Logo;

            OkFire();

        }
        if (typeof(colors) == 'undefined') {

            colors = null;

        }

        if (colors == "") {
            colors = $('.productOptionPickListSwatch li:first-child label').click();
            $('.productAttributeLabel:contains("Color:")').hide();

        }
        if (embroid == "") {
            embroid = null;
            $('.productOptionViewSelect option:contains("None")').show();
        }

        sessionStorage.setItem('prodColors', colors);
        sessionStorage.setItem('embroideries', embroid);

    });

    $('.yourSchool').html(sessionStorage.Organization);

    function OkFire() {
        setTimeout(function() {
            $('li.swatch.hasPreview.swatchOneColour').css('display', 'none');

            var validColors = sessionStorage.prodColors;
            var validEmbroideries = sessionStorage.embroideries;
            var embroidArray = validEmbroideries.split(',');
            var colorArray = validColors.split(',');
            console.log(embroidArray);
            console.log(colorArray);
            doLogo();

            function doLogo() {
                $('.productAttributeLabel:contains("Logo")').next('div').find('option').attr('disabled', 'disabled');
                for (var i = 0; i < embroidArray.length; i++) {

                    $('.productAttributeLabel:contains("Logo")').next('div').find('option:contains("Please Choose")').show();
                    $('.productAttributeLabel:contains("Logo")').next('div').find('.productOptionViewSelect option:contains("Please Choose")').removeAttr('disabled');

                    $('.productAttributeLabel:contains("Logo")').next('div').find('.productOptionViewSelect option:contains("' + embroidArray[i] + '")').show();
                    $('.productAttributeLabel:contains("Logo")').next('div').find('.productOptionViewSelect option:contains("' + embroidArray[i] + '")').removeAttr('disabled');

                    console.log(embroidArray[i]);
                }

            }
            removeOpt();

            function removeOpt() {

                $('.productAttributeLabel:contains("Logo")').next('div').find('.productOptionViewSelect option:disabled').remove();
            }

            for (var j = 0; j < colorArray.length; j++) {
                console.log(colorArray[j]);
                $('.productOptionPickListSwatch span[title="' + colorArray[j] + '"]').closest('li').css('display', 'inline-block');
            }
        }, 500);

    }
    $('.Label:contains("School:")').hide();
    $('.Label:contains("School:")').next('div').hide();
    $('.productAttributeLabel:contains("Organization:")').hide();
    $('.productAttributeLabel:contains("Organization:")').next('div').hide();
    $('.ProductMain .Textbox').val(sessionStorage.Organization);
    $('.productAttributeFluidWidth').val(sessionStorage.Organization);
    if ($('.videoRow').size() > 0) {
        $('.videoRow').bind('click', function() {
            var videoId = $(this).attr('id').replace('video_', '');
            $('#FeaturedVideo').html('<object>' + '<param name="movie" value="http://www.youtube.com/v/' + videoId + '?fs=1"></param>' + '<param name="allowFullScreen" value="true"></param>' + '<param name="allowscriptaccess" value="always"></param>' + '<embed src="http://www.youtube.com/v/' + videoId + '?&fs=1&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true"></embed>' + '</object>');
            selectCurrentVideo(videoId);
        });
    }
});
