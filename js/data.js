var fileLocation = './js';
require.config({
packages: [
{
name: 'zrender',
main: 'zrender',
location: './zrender/src'
}
]
})
 
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

function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
// just init to get a zrender Instance
var zr = zrender.init(document.getElementById('main'));
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
    style : {
        x : 25,
        y : 260,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '100,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 25,
        y : 160,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '300,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 25,
        y : 60,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '500,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

// Horizontal numbers

zr.addShape(new TextShape({
    style : {
        x : 150,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2004',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 300,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2005',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 450,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2006',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 600,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2007',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 750,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2008',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 900,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2009',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 1050,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2010',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 1200,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2011',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 1350,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2012',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
/*
zr.addShape(new RectangleShape({
    style : {
        x : width - 210,
        y : 110,
        width : 50,
        height: 300,
        radius: [5, 5],
        brushType : 'both',
        color : color.getColor(colorIdx++),
    },
    draggable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 210,
        y : 110,
        width : 50,
        height: 100,
        radius: [5, 5],
        brushType : 'both',
        color : color.getColor(colorIdx++),
    },
    draggable : false
}));
*/

// Double Chart Bar

// 矩形
zr.addShape(new RectangleShape({
    style : {
        x : 0,
        y : 100,
        y : 500,
        width : 60,
        height: 40,
        radius: [5, 5],
        brushType : 'both',
        color : '#CCCCCC'
    },
    draggable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 270,
        y : 90,
        width : 50,
        height: 300,
        radius: [5, 5],
        brushType : 'both',
        color : '#CCCCCC'
    },
    draggable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 210,
        y : 90,
        width : 50,
        height: 300,
        radius: [5, 5],
        brushType : 'both',
        color : '#999999'
    },
    draggable : false
}));

// Legend


// Courbes cassées

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 250], [300, 230], [450, 215], [600, 205], [750, 190], [900, 185], [1050, 180], [1200, 160], [1350, 150]],
        strokeColor : 'rgba(135, 206, 250, 0.8)',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false
}));

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 240], [300, 220], [450, 210], [600, 200], [750, 190], [900, 180], [1050, 170], [1200, 150], [1350, 140]],
        strokeColor : 'red',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false
}));

// Horizontal
zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 350,
        xEnd : 1450,
        yEnd : 350,
        strokeColor : '#333333',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

// Vertical
zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 0,
        xEnd : 70,
        yEnd : 350,
        strokeColor : '#333333',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

/*
// 圆形
zr.addShape(new CircleShape({
    style : {
        x : 100,
        y : 300,
        r : 10,
        brushType : 'both',
        color : '#ffffff',          // rgba supported
        strokeColor : color.getColor(colorIdx++),  // getColor from default palette
        lineWidth : 2,
        text :'1',
        textColor : '#333333',
        textPosition :'outside'
    },
    hoverable : true,   // default true
    draggable : false,   // default false
    clickable : true,   // default false

    // 可自带任何有效自定义属性
    _name : 'Hello~',

    // 响应事件并动态修改图形元素
    onmousewheel: function(params){
        var eventTool = require('zrender/tool/event');
        var delta = eventTool.getDelta(params.event);
        var r = params.target.style.r;
        r += (delta > 0 ? 1 : -1) * 10;
        if (r < 10) {
            r = 10;
        };
        zr.modShape(params.target.id, {style: {r: r}})
        zr.refresh();
        eventTool.stop(params.event);
    }
    
}));
*/
// 文本
zr.addShape(new TextShape({
    style : {
        x : width / 2,
        y : 10,
        brushType : 'fill',
        color : color.getColor(colorIdx++),
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '国民总收入 和 国内生产总值 (亿元)',
        textFont : 'normal 24px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
//Repères
zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 65,
        xEnd : 1450,
        yEnd : 65,
        strokeColor : '#eeeeee',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 265,
        xEnd : 1450,
        yEnd : 265,
        strokeColor : '#eeeeee',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 165,
        xEnd : 1450,
        yEnd : 165,
        strokeColor : '#eeeeee',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
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

function(zrender, CircleShape, RectangleShape, BrokenLineShape, TextShape, LineShape) {
// just init to get a zrender Instance
var zr = zrender.init(document.getElementById('main2'));
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
    style : {
        x : 25,
        y : 260,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '100,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 25,
        y : 160,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '300,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 25,
        y : 60,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '500,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

// Horizontal numbers

zr.addShape(new TextShape({
    style : {
        x : 150,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2004',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 300,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2005',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 450,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2006',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 600,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2007',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));

zr.addShape(new TextShape({
    style : {
        x : 750,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2008',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 900,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2009',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 1050,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2010',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 1200,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2011',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
zr.addShape(new TextShape({
    style : {
        x : 1350,
        y : 360,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '2012',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
/*
zr.addShape(new RectangleShape({
    style : {
        x : width - 210,
        y : 110,
        width : 50,
        height: 300,
        radius: [5, 5],
        brushType : 'both',
        color : color.getColor(colorIdx++),
    },
    draggable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 210,
        y : 110,
        width : 50,
        height: 100,
        radius: [5, 5],
        brushType : 'both',
        color : color.getColor(colorIdx++),
    },
    draggable : false
}));
*/

// Double Chart Bar

// 矩形
zr.addShape(new RectangleShape({
    style : {
        x : 0,
        y : 100,
        y : 500,
        width : 60,
        height: 40,
        radius: [5, 5],
        brushType : 'both',
        color : '#CCCCCC'
    },
    draggable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 270,
        y : 90,
        width : 50,
        height: 300,
        radius: [5, 5],
        brushType : 'both',
        color : '#CCCCCC'
    },
    draggable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 210,
        y : 90,
        width : 50,
        height: 300,
        radius: [5, 5],
        brushType : 'both',
        color : '#999999'
    },
    draggable : false
}));

// Legend


// Courbes cassées

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 250], [300, 230], [450, 215], [600, 205], [750, 190], [900, 185], [1050, 180], [1200, 160], [1350, 150]],
        strokeColor : 'rgba(135, 206, 250, 0.8)',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false
}));

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 240], [300, 220], [450, 210], [600, 200], [750, 190], [900, 180], [1050, 170], [1200, 150], [1350, 140]],
        strokeColor : 'red',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false
}));

// Horizontal
zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 350,
        xEnd : 1450,
        yEnd : 350,
        strokeColor : '#333333',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

// Vertical
zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 0,
        xEnd : 70,
        yEnd : 350,
        strokeColor : '#333333',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

/*
// 圆形
zr.addShape(new CircleShape({
    style : {
        x : 100,
        y : 300,
        r : 10,
        brushType : 'both',
        color : '#ffffff',          // rgba supported
        strokeColor : color.getColor(colorIdx++),  // getColor from default palette
        lineWidth : 2,
        text :'1',
        textColor : '#333333',
        textPosition :'outside'
    },
    hoverable : true,   // default true
    draggable : false,   // default false
    clickable : true,   // default false

    // 可自带任何有效自定义属性
    _name : 'Hello~',

    // 响应事件并动态修改图形元素
    onmousewheel: function(params){
        var eventTool = require('zrender/tool/event');
        var delta = eventTool.getDelta(params.event);
        var r = params.target.style.r;
        r += (delta > 0 ? 1 : -1) * 10;
        if (r < 10) {
            r = 10;
        };
        zr.modShape(params.target.id, {style: {r: r}})
        zr.refresh();
        eventTool.stop(params.event);
    }
    
}));
*/
// 文本
zr.addShape(new TextShape({
    style : {
        x : width / 2,
        y : 10,
        brushType : 'fill',
        color : color.getColor(colorIdx++),
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : 'Data Visualization',
        textFont : 'normal 24px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
}));
//Repères
zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 65,
        xEnd : 1450,
        yEnd : 65,
        strokeColor : '#eeeeee',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 265,
        xEnd : 1450,
        yEnd : 265,
        strokeColor : '#eeeeee',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
}));

zr.addShape(new LineShape({
    style : {
        xStart : 70,
        yStart : 165,
        xEnd : 1450,
        yEnd : 165,
        strokeColor : '#eeeeee',
        lineWidth : 1,
        lineType : 'solid'
    },
    draggable:false
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