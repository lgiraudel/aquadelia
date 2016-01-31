$(function() {
    $.get('../galeries/infos.json', function(json) {
        var galeriesHtml = '';
        $(json.galeries).each(function(i, galerieInfo) {
            galeriesHtml += '<li class="galerie">' +
                '<a href="/pages/galerie.html?galerie=' + galerieInfo.dir + '" class="clickable-area">' +
                '<img src="/galeries/' + galerieInfo.thumb + '" class="thumb"/>' +
                '<div class="title">' + galerieInfo.title + '</div>' +
                '</a>' +
                '<div class="description">' + galerieInfo.description + '</div>' +
            '</li>';
        });

        $('.galerie-list').html(galeriesHtml);
    });
})
