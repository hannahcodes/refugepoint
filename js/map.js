(function () {

    // initialize map
    var map = new Datamap({
        element: document.getElementById('container'),
        responsive: true,
        fills: {
            PRESENT: '#f8893a',
            defaultFill: '#d0c7b7'
        },
        data: {
            EGY: {
                fillKey: 'PRESENT',
                year: 2005
            }
        },
        geographyConfig: {
            popupTemplate: function(geo, data) {
                return ['<div class="hoverinfo"><strong>',
                    geo.properties.name,
                    '</strong><br/>Since: ' + data.year,
                    '</div>'
                ].join('');
            },
            highlightFillColor: '#d31145',
            highlightBorderColor: '#ffffff'
        }
    });

    // responsively resize map
    window.addEventListener('resize', function() {
        map.resize();
    });

}());
