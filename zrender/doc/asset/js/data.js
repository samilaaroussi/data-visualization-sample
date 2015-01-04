var fileLocation = './js';
require.config({
paths: {
'zrender': fileLocation,
'zrender/shape/Circle': fileLocation,
'zrender/shape/BrokenLine' :fileLocation
'zrender/src/zrender' :fileLocation,
'zrender/shape/Rose' :fileLocation,
'zrender/shape/Trochoid' :fileLocation,
'zrender/shape/Circle' :fileLocation,
'zrender/shape/Sector' :fileLocation,
'zrender/shape/Ring' :fileLocation,
'zrender/shape/Ellipse' :fileLocation,
'zrender/shape/Rectangle' :fileLocation,
'zrender/shape/Text' :fileLocation,
'zrender/shape/Heart' :fileLocation,
'zrender/shape/Droplet' :fileLocation,
'zrender/shape/Line' :fileLocation,
'zrender/shape/Image' :fileLocation,
'zrender/shape/Star' :fileLocation,
'zrender/shape/Isogon' :fileLocation,
'zrender/shape/BezierCurve' :fileLocation,
'zrender/shape/BrokenLine' :fileLocation,
'zrender/shape/Path' :fileLocation,
'zrender/shape/Polygon' :fileLocation
}
});

require(
    [ 'zrender',
        'zrender/shape/Rose',
        'zrender/shape/Trochoid',
        'zrender/shape/Circle',
        'zrender/shape/Sector',
        'zrender/shape/Ring',
        'zrender/shape/Ellipse',
        'zrender/shape/Rectangle',
        'zrender/shape/Text',
        'zrender/shape/Heart',
        'zrender/shape/Droplet',
        'zrender/shape/Line',
        'zrender/shape/Image',
        'zrender/shape/Star',
        'zrender/shape/Isogon',
        'zrender/shape/BezierCurve',
        'zrender/shape/BrokenLine',
        'zrender/shape/Path',
        'zrender/shape/Polygon'],
            function(zrender, CircleShape) {
                // just init to get a zrender Instance
                var zr = zrender.init(document.getElementById('main'));
                // zr can be used now!
                var CircleShape = require('zrender/shape/Circle');
                zr.addShape(
                    new CircleShape({
                        style : {
                            x : 100,
                            y : 100,
                            r : 50,
                            color : 'rgba(220, 20, 60, 0.8)'
                        },
                        draggable: false
                    }));
                zr.render();
                    });