$(function() {
    var parameters = document.location.search.substr(1).split('&').reduce(function(iterator, curr) {
        var keyAndValue = curr.split('=');
        iterator[keyAndValue[0]] = keyAndValue[1];
        return iterator;
    }, {});
    $.get('../galeries/' + parameters['galerie'] + '/infos.json', function(json) {
        var root = json.root;
        var imagesHtml = '';

        $(json.images).each(function(i, imageInfos) {
            var caption = imageInfos.caption ? '<div class="camera_caption">' + imageInfos.caption + '</div>' : '';
            imagesHtml += '<div data-src="' + root + imageInfos.url + '" data-thumb="' + root + imageInfos.thumb + '">' + caption + '</div>';
        });

        $('.camera_wrap')
        .html(imagesHtml)
        .camera({
            thumbnails: true,
            pagination: false,
            portrait: true,
            height: '500px',
            hover: false
        });
    });
})
