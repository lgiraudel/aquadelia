$(function() {
    $('.galerie-list li').each(function(i, listItem) {
        var $listItem = $(listItem);

        $listItem.addClass('galerie');

        var $link = $listItem.find('a');
        var name = $link.text();

        $link
            .addClass('clickable-area')
            .html('<img src="../images/liens-screenshots/' + name + '.jpg" class="thumb"/><div class="title">' + name + '</div>');
    });
});
