$(document).ready(function () {
    $('.lm-access').tabs();

    $('#lm-search button').click( function () {
        $('#lm-search input').show();
    });

    $('#lm-search input').autocomplete({
        source: function (request, response) {
            jQuery.get('http://www.lovemondays.com.br/pesquisa/empresa/autocomplete', {
                q: request.term
            }, function (data) {
                autocompleteData = [];
                for (var i = 0; i < data.results.length; ++i) {
                    autocompleteData.push(data.results[i].name);
                }
                response(autocompleteData);
            });
        },
        crossDomain: true,
        dataType: 'jsonp',
        minLength: 2
    });
});