var fileLocation = './js';
require.config({
    packages: [{
        name: 'zrender',
        main: 'zrender',
        location: './zrender/src'
    }]
})

require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    /********************* CHART 1 *********************/

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {

        var zr = zrender.init(document.getElementById('main'));
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 260,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '100,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 160,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '300,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 60,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '500,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 300,
                xEnd: 1550,
                yEnd: 300,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                text: '国民总收入(亿元)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 320,
                xEnd: 1550,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 2,
                text: '国内生产总值(亿元)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Courbes cassées

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 250],
                    [300, 230],
                    [450, 215],
                    [600, 205],
                    [750, 190],
                    [900, 185],
                    [1050, 180],
                    [1200, 160],
                    [1350, 150]
                ],
                strokeColor: '#5ab1ef', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 240],
                    [300, 220],
                    [450, 210],
                    [600, 200],
                    [750, 190],
                    [900, 180],
                    [1050, 170],
                    [1200, 150],
                    [1350, 140]
                ],
                strokeColor: '#d87a80', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '国民总收入 和 国内生产总值 (亿元)',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/*********************************** CHART 2 ***************************************/

require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {

        var zr = zrender.init(document.getElementById('main2'));
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 260,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 160,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '10,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 60,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '15,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));


        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 0,
                xEnd: 1450,
                yEnd: 0,
                strokeColor: '#eeeeee',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 0,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 0,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '居民消',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false

        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 300,
                xEnd: 1550,
                yEnd: 300,
                strokeColor: 'orange',
                lineWidth: 2,
                lineType: 'dashed',
                text: '居民消费水平(元)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 320,
                xEnd: 1550,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 2,
                text: '农村居民消费水平(元)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 340,
                xEnd: 1550,
                yEnd: 340,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                text: '城镇居民消费水平(元)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Courbes cassées

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 200],
                    [300, 180],
                    [450, 165],
                    [600, 145],
                    [750, 140],
                    [900, 135],
                    [1050, 130],
                    [1200, 30],
                    [1350, 10]
                ],
                strokeColor: '#5ab1ef', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 310],
                    [300, 300],
                    [450, 295],
                    [600, 290],
                    [750, 285],
                    [900, 280],
                    [1050, 275],
                    [1200, 250],
                    [1350, 240]
                ],
                strokeColor: '#d87a80', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 265],
                    [300, 250],
                    [450, 235],
                    [600, 220],
                    [750, 205],
                    [900, 180],
                    [1050, 160],
                    [1200, 110],
                    [1350, 90]
                ],
                strokeColor: 'orange', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'dashed',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);


/********************* CHART 3 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {

        var zr = zrender.init(document.getElementById('main3'));
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 260,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '50,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 160,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '100,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 60,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '150,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 280,
                xEnd: 1550,
                yEnd: 280,
                strokeColor: 'orange',
                lineWidth: 2,
                lineType: 'dashed',
                text: '年末总人口(万人)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 300,
                xEnd: 1550,
                yEnd: 300,
                strokeColor: '#5ab1ef',
                lineWidth: 5,
                text: '城镇人口(万人)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 320,
                xEnd: 1550,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 5,
                text: '乡村人口(万人)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '人口',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1625,
                y: 245,
                width: 40,
                height: 103,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1575,
                y: 220,
                width: 40,
                height: 128,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1475,
                y: 242,
                width: 40,
                height: 106,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1425,
                y: 222,
                width: 40,
                height: 126,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1325,
                y: 239,
                width: 40,
                height: 109,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1275,
                y: 224,
                width: 40,
                height: 124,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1175,
                y: 236,
                width: 40,
                height: 112,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 1125,
                y: 226,
                width: 40,
                height: 122,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1025,
                y: 230,
                width: 40,
                height: 118,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 975,
                y: 226,
                width: 40,
                height: 122,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 875,
                y: 228,
                width: 40,
                height: 120,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 825,
                y: 228,
                width: 40,
                height: 120,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 725,
                y: 225,
                width: 40,
                height: 123,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 675,
                y: 230,
                width: 40,
                height: 118,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 575,
                y: 222,
                width: 40,
                height: 126,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 525,
                y: 232,
                width: 40,
                height: 116,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 425,
                y: 219,
                width: 40,
                height: 129,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 375,
                y: 234,
                width: 40,
                height: 114,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));


        // Courbes cassées

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 100],
                    [300, 99],
                    [450, 98],
                    [600, 97],
                    [750, 96],
                    [900, 95],
                    [1050, 94],
                    [1200, 93],
                    [1350, 92]
                ],
                strokeColor: 'orange', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'dashed',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/*********************************** CHART 4 ***************************************/

require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
        // just init to get a zrender Instance
        var zr = zrender.init(document.getElementById('main4'));
        // zr can be used now!
        /*
         *  zr has been init like this, just use it!
         *
         *  var zrender = require('zrender');
         *  var zr = zrender.init(document.getElementById('main'));
         */
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 260,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 160,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '15,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 25,
                y: 60,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '25,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '就业',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 300,
                xEnd: 1550,
                yEnd: 300,
                strokeColor: 'orange',
                lineWidth: 2,
                lineType: 'dashed',
                text: '就业人员(万人)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 320,
                xEnd: 1550,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 2,
                text: '城镇就业人员(万人)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 340,
                xEnd: 1550,
                yEnd: 340,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                text: '乡村就业人员(万人)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 110],
                    [300, 108],
                    [450, 106],
                    [600, 104],
                    [750, 102],
                    [900, 100],
                    [1050, 98],
                    [1200, 96],
                    [1350, 94]
                ],
                strokeColor: 'orange', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'dashed',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 300,
                xEnd: 1350,
                yEnd: 250,
                strokeColor: '#d87a80',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 200,
                xEnd: 1350,
                yEnd: 340,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/*********************************** CHART 5 ***************************************/

require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
        // just init to get a zrender Instance
        var zr = zrender.init(document.getElementById('main5'));
        // zr can be used now!
        /*
         *  zr has been init like this, just use it!
         *
         *  var zrender = require('zrender');
         *  var zr = zrender.init(document.getElementById('main'));
         */
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 35,
                y: 260,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '300',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 35,
                y: 160,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '500',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 35,
                y: 60,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '700',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '价格指数',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 300,
                xEnd: 1550,
                yEnd: 300,
                strokeColor: 'orange',
                lineWidth: 2,
                lineType: 'dashed',
                text: '商品零售价格指数(1978=100)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 320,
                xEnd: 1550,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 2,
                text: '城市居民消费价格指数(1978=100)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 340,
                xEnd: 1550,
                yEnd: 340,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                text: '农村居民消费价格指数(1985=100)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 230],
                    [300, 228],
                    [450, 222],
                    [600, 215],
                    [750, 213],
                    [900, 205],
                    [1050, 202],
                    [1200, 201],
                    [1350, 200]
                ],
                strokeColor: '#d87a80', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 225],
                    [300, 220],
                    [450, 218],
                    [600, 210],
                    [750, 208],
                    [900, 200],
                    [1050, 198],
                    [1200, 202],
                    [1350, 197]
                ],
                strokeColor: '#5ab1ef', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 150,
                xEnd: 1350,
                yEnd: 100,
                strokeColor: 'orange',
                lineWidth: 2,
                lineType: 'dashed'
            },
            draggable: false,
            hoverable: false
        }));

        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/********************* CHART 6 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
        // just init to get a zrender Instance
        var zr = zrender.init(document.getElementById('main6'));
        // zr can be used now!
        /*
         *  zr has been init like this, just use it!
         *
         *  var zrender = require('zrender');
         *  var zr = zrender.init(document.getElementById('main'));
         */
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5,000元',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '15,000元',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 50,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '25,000元',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1485,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '10%',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1485,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '30%',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1485,
                y: 45,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '50%',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 145,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 260,
                xEnd: 1570,
                yEnd: 260,
                strokeColor: '#ffb980',
                lineWidth: 2,
                lineType: 'solid',
                text: '城镇居民家庭恩格尔系数',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 280,
                xEnd: 1570,
                yEnd: 280,
                strokeColor: '#b6a2de',
                lineWidth: 2,
                lineType: 'solid',
                text: '农村居民家庭恩格尔系数',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 300,
                xEnd: 1570,
                yEnd: 300,
                strokeColor: '#5ab1ef',
                lineWidth: 5,
                text: '城镇居民家庭人均可支配收入',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 320,
                xEnd: 1570,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 5,
                text: '农村居民家庭人均纯收入',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '格尔系数',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1625,
                y: 215,
                width: 40,
                height: 133,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1575,
                y: 300,
                width: 40,
                height: 48,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1475,
                y: 190,
                width: 40,
                height: 158,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1425,
                y: 298,
                width: 40,
                height: 50,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1325,
                y: 175,
                width: 40,
                height: 173,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1275,
                y: 288,
                width: 40,
                height: 60,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1175,
                y: 145,
                width: 40,
                height: 203,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 1125,
                y: 278,
                width: 40,
                height: 70,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1025,
                y: 105,
                width: 40,
                height: 243,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 975,
                y: 268,
                width: 40,
                height: 80,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 875,
                y: 90,
                width: 40,
                height: 258,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 825,
                y: 258,
                width: 40,
                height: 90,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 725,
                y: 70,
                width: 40,
                height: 278,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 675,
                y: 248,
                width: 40,
                height: 100,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 575,
                y: 65,
                width: 40,
                height: 283,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 525,
                y: 238,
                width: 40,
                height: 110,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 425,
                y: 58,
                width: 40,
                height: 290,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 375,
                y: 228,
                width: 40,
                height: 120,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 85,
                xEnd: 1350,
                yEnd: 125,
                strokeColor: '#ffb980',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 80,
                xEnd: 1350,
                yEnd: 50,
                strokeColor: '#b6a2de',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/********************* CHART 7 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
        var zr = zrender.init(document.getElementById('main7'));
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '10,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '20,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 50,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '30,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 280,
                xEnd: 1570,
                yEnd: 280,
                strokeColor: 'orange',
                lineWidth: 2,
                lineType: 'dashed',
                text: '水资源总量(亿立方米)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 320,
                xEnd: 1570,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 5,
                text: '供水总量(亿立方米)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 300,
                xEnd: 1570,
                yEnd: 300,
                strokeColor: '#5ab1ef',
                lineWidth: 5,
                text: '用水总量(亿立方米)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));
        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '大量的水',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1625,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1575,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1475,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1425,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1325,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1275,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1175,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 1125,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1025,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 975,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 875,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 825,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 725,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 675,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 575,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 525,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 425,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 375,
                y: 295,
                width: 40,
                height: 53,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));


        // Courbes cassées

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 103],
                    [300, 60],
                    [450, 100],
                    [600, 101],
                    [750, 65],
                    [900, 103],
                    [1050, 50],
                    [1200, 106],
                    [1350, 53]
                ],
                strokeColor: 'orange', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'dashed',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));


        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/********************* CHART 8 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {

        var zr = zrender.init(document.getElementById('main8'));
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 40,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '3M',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 40,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5M',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 40,
                y: 50,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '7M',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 300,
                xEnd: 1570,
                yEnd: 300,
                strokeColor: '#95706d',
                lineWidth: 5,
                text: '废水排放总量(万吨)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));
        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '废水排放总量',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1615,
                y: 163,
                width: 80,
                height: 185,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1465,
                y: 143,
                width: 80,
                height: 205,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1315,
                y: 143,
                width: 80,
                height: 205,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1165,
                y: 122,
                width: 80,
                height: 226,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));


        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1015,
                y: 118,
                width: 80,
                height: 230,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 865,
                y: 108,
                width: 80,
                height: 240,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));


        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 715,
                y: 93,
                width: 80,
                height: 255,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));


        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 565,
                y: 73,
                width: 80,
                height: 275,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 415,
                y: 63,
                width: 85,
                height: 285,
                radius: [5, 5],
                brushType: 'both',
                color: '#95706d'
            },
            draggable: false,
            hoverable: false
        }));


        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/********************* CHART 9 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
        // just init to get a zrender Instance
        var zr = zrender.init(document.getElementById('main9'));
        // zr can be used now!
        /*
         *  zr has been init like this, just use it!
         *
         *  var zrender = require('zrender');
         *  var zr = zrender.init(document.getElementById('main'));
         */
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5,000次',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '15,000次',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 50,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '25,000次',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1500,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5,000万公顷',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1500,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '10,000万公顷',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1500,
                y: 45,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '15,000万公顷',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 320,
                xEnd: 1570,
                yEnd: 320,
                strokeColor: '#b6a2de',
                lineWidth: 2,
                lineType: 'solid',
                text: '森林面积(万公顷)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 300,
                xEnd: 1570,
                yEnd: 300,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                lineType: 'solid',
                text: '森林火灾次数(次)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '森林火灾',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));


        // Courbes cassées

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 125],
                    [300, 125],
                    [450, 125],
                    [600, 125],
                    [750, 125],
                    [900, 95],
                    [1050, 95],
                    [1200, 95],
                    [1350, 95]
                ],
                strokeColor: '#2ec7c9', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 85],
                    [300, 135],
                    [450, 185],
                    [600, 180],
                    [750, 70],
                    [900, 175],
                    [1050, 190],
                    [1200, 240],
                    [1350, 265]
                ],
                strokeColor: '#b6a2de', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));


        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/********************* CHART 10 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
        // just init to get a zrender Instance
        var zr = zrender.init(document.getElementById('main10'));
        // zr can be used now!
        /*
         *  zr has been init like this, just use it!
         *
         *  var zrender = require('zrender');
         *  var zr = zrender.init(document.getElementById('main'));
         */
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5,000次',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '15,000次',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 50,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '25,000次',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 320,
                xEnd: 1570,
                yEnd: 320,
                strokeColor: '#b6a2de',
                lineWidth: 2,
                lineType: 'solid',
                text: '森林面积(万公顷)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 300,
                xEnd: 1570,
                yEnd: 300,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                lineType: 'solid',
                text: '森林火灾次数(次)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '森林火灾',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));


        // Courbes cassées

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 125],
                    [300, 125],
                    [450, 125],
                    [600, 125],
                    [750, 125],
                    [900, 95],
                    [1050, 95],
                    [1200, 95],
                    [1350, 95]
                ],
                strokeColor: '#2ec7c9', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new BrokenLine({
            style: {
                pointList: [
                    [146, 85],
                    [300, 135],
                    [450, 185],
                    [600, 180],
                    [750, 70],
                    [900, 175],
                    [1050, 190],
                    [1200, 240],
                    [1350, 265]
                ],
                strokeColor: '#b6a2de', // == color
                lineWidth: 2,
                lineCap: 'round',
                lineType: 'solid',
                lineJoin: 'miter',
                miterLimit: 50,
                textPosition: 'end'
            },
            draggable: false,
            hoverable: false
        }));


        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);

/********************* CHART 11 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
        // just init to get a zrender Instance
        var zr = zrender.init(document.getElementById('main11'));
        // zr can be used now!
        /*
         *  zr has been init like this, just use it!
         *
         *  var zrender = require('zrender');
         *  var zr = zrender.init(document.getElementById('main'));
         */
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');

        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 35,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '1,800人',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 35,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '5,400人',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 35,
                y: 50,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '9,000人',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 240,
                xEnd: 1550,
                yEnd: 240,
                strokeColor: '#2ec7c9',
                lineWidth: 2,
                lineType: 'solid',
                text: '每十万人口幼儿园平均在校生数',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 260,
                xEnd: 1550,
                yEnd: 260,
                strokeColor: '#ffb980',
                lineWidth: 2,
                lineType: 'solid',
                text: '每十万人口小学平均在校生数',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 280,
                xEnd: 1550,
                yEnd: 280,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                lineType: 'solid',
                text: '每十万人口初中阶段平均在校生数',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 320,
                xEnd: 1550,
                yEnd: 320,
                strokeColor: '#b6a2de',
                lineWidth: 2,
                lineType: 'solid',
                text: '每十万人口高中阶段平均在校生数',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1500,
                yStart: 300,
                xEnd: 1550,
                yEnd: 300,
                strokeColor: '#d87a80',
                lineWidth: 2,
                lineType: 'solid',
                text: '每十万人口高等学校平均在校生数',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '学生和小学生',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));


        // Courbes cassées

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 275,
                xEnd: 1350,
                yEnd: 220,
                strokeColor: '#2ec7c9',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 85,
                xEnd: 1350,
                yEnd: 100,
                strokeColor: '#ffb980',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 185,
                xEnd: 1350,
                yEnd: 200,
                strokeColor: '#5ab1ef',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 225,
                xEnd: 1350,
                yEnd: 205,
                strokeColor: '#b6a2de',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 146,
                yStart: 275,
                xEnd: 1350,
                yEnd: 230,
                strokeColor: '#d87a80',
                lineWidth: 2,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);


/********************* CHART 13 *********************/
require(
    ['zrender',
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
        'zrender/shape/Polygon'
    ],

    function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {

        var zr = zrender.init(document.getElementById('main13'));
        zr.clear();
        var color = require('zrender/tool/color');
        var colorIdx = 0;
        var width = Math.ceil(zr.getWidth());
        var height = Math.ceil(zr.getHeight());

        var CircleShape = require('zrender/shape/Circle');
        var SectorShape = require('zrender/shape/Sector');
        var RingShape = require('zrender/shape/Ring');
        var EllipseShape = require('zrender/shape/Ellipse');
        var HeartShape = require('zrender/shape/Heart');
        var DropletShape = require('zrender/shape/Droplet');
        var PolygonShape = require('zrender/shape/Polygon');
        var RectangleShape = require('zrender/shape/Rectangle');
        var LineShape = require('zrender/shape/Line');
        var BezierCurveShape = require('zrender/shape/BezierCurve');
        var TextShape = require('zrender/shape/Text');
        var ImageShape = require('zrender/shape/Image');
        var PathShape = require('zrender/shape/Path');
        var TrochoidShape = require('zrender/shape/Trochoid');
        var RoseShape = require('zrender/shape/Rose');
        var StarShape = require('zrender/shape/Star');
        var IsogonShape = require('zrender/shape/Isogon');
        var BrokenLine = require('zrender/shape/BrokenLine');
        // Vertical numbers

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '190,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '640,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 30,
                y: 50,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '950,000',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 50,
                y: 345,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '0',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal numbers
        zr.addShape(new TextShape({
            style: {
                x: 1480,
                y: 245,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '190M',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1480,
                y: 145,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '640M',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 1480,
                y: 45,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '950M',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 150,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2004',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 300,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2005',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 450,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2006',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 600,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2007',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new TextShape({
            style: {
                x: 750,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2008',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 900,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2009',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1050,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2010',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1200,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2011',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        zr.addShape(new TextShape({
            style: {
                x: 1350,
                y: 360,
                brushType: 'fill',
                color: '#999999',
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '2012',
                textFont: 'normal 12px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));

        // Double Chart Bar

        // 矩形
        zr.addShape(new RectangleShape({
            style: {
                x: 0,
                y: 100,
                y: 500,
                width: 60,
                height: 40,
                radius: [5, 5],
                brushType: 'both',
                color: '#CCCCCC'
            },
            draggable: false,
            hoverable: false
        }));

        // Legend

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 320,
                xEnd: 1570,
                yEnd: 320,
                strokeColor: '#d87a80',
                lineWidth: 5,
                lineType: 'solid',
                text: '医疗卫生机构数(个)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1520,
                yStart: 300,
                xEnd: 1570,
                yEnd: 300,
                strokeColor: '#5ab1ef',
                lineWidth: 5,
                lineType: 'solid',
                text: '卫生人员数(万人)',
                textColor: '#333333'
            },
            draggable: false,
            hoverable: false
        }));

        // Horizontal
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 350,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));


        // Vertical
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 70,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 1450,
                yStart: 50,
                xEnd: 1450,
                yEnd: 350,
                strokeColor: '#333333',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        // 文本
        zr.addShape(new TextShape({
            style: {
                x: width / 2,
                y: 10,
                brushType: 'fill',
                color: color.getColor(colorIdx++),
                shadowColor: 'none',
                shadowBlur: 0,
                lineWidth: 3,
                text: '机构和医务人员',
                textFont: 'normal 24px verdana',
                textAlign: 'center',
                textBaseline: 'top'
            },
            draggable: false,
            hoverable: false
        }));
        //Repères
        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 50,
                xEnd: 1450,
                yEnd: 50,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 200,
                xEnd: 1450,
                yEnd: 200,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 250,
                xEnd: 1450,
                yEnd: 250,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 300,
                xEnd: 1450,
                yEnd: 300,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 150,
                xEnd: 1450,
                yEnd: 150,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new LineShape({
            style: {
                xStart: 70,
                yStart: 100,
                xEnd: 1450,
                yEnd: 100,
                strokeColor: '#eeeeee',
                lineWidth: 1,
                lineType: 'solid'
            },
            draggable: false,
            hoverable: false
        }));



        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1625,
                y: 78,
                width: 40,
                height: 270,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1575,
                y: 160,
                width: 40,
                height: 188,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1475,
                y: 73,
                width: 40,
                height: 275,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1425,
                y: 148,
                width: 40,
                height: 200,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1325,
                y: 70,
                width: 40,
                height: 278,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1275,
                y: 138,
                width: 40,
                height: 210,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1175,
                y: 70,
                width: 40,
                height: 278,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 1125,
                y: 128,
                width: 40,
                height: 220,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 1025,
                y: 80,
                width: 40,
                height: 268,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));


        zr.addShape(new RectangleShape({
            style: {
                x: width - 975,
                y: 118,
                width: 40,
                height: 230,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 875,
                y: 70,
                width: 40,
                height: 278,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 825,
                y: 103,
                width: 40,
                height: 245,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 725,
                y: 68,
                width: 40,
                height: 280,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 675,
                y: 88,
                width: 40,
                height: 260,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 575,
                y: 45,
                width: 40,
                height: 303,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 525,
                y: 78,
                width: 40,
                height: 270,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));

        /*****************************************/

        zr.addShape(new RectangleShape({
            style: {
                x: width - 425,
                y: 50,
                width: 40,
                height: 298,
                radius: [5, 5],
                brushType: 'both',
                color: '#5ab1ef'
            },
            draggable: false,
            hoverable: false
        }));

        zr.addShape(new RectangleShape({
            style: {
                x: width - 375,
                y: 63,
                width: 40,
                height: 285,
                radius: [5, 5],
                brushType: 'both',
                color: '#d87a80'
            },
            draggable: false,
            hoverable: false
        }));


        // 绘画
        zr.render();

        /* 除了在shape上绑定事件，可以挂接全局事件
        zr.on('click',      function(e){console.log('onclick',e,'global')});
        zr.on('mousewheel', function(e){console.log('onmousewheel',e,'global')});
        zr.on('mousemove',  function(e){console.log('onmousemove',e,'global')});
        zr.on('mouseover',  function(e){console.log('onmouseover',e,'global')});
        zr.on('mouseout',   function(e){console.log('onmouseout',e,'global')});
        zr.on('mousedown',  function(e){console.log('onmousedown',e,'global')});
        zr.on('mouseup',    function(e){console.log('onmouseup',e,'global')});
        zr.on('dragstart',  function(e){console.log('ondragstart',e,'global')});
        zr.on('dragend',    function(e){console.log('ondragend',e,'global')});
        zr.on('dragenter',  function(e){console.log('ondragenter',e,'global')});
        zr.on('dragover',   function(e){console.log('ondragover',e,'global')});
        zr.on('dragleave',  function(e){console.log('ondragleave',e,'global')});
        zr.on('drop',       function(e){console.log('ondrop',e,'global')});
        */

    }
);