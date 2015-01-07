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

/********************* CHART 1 *********************/

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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
}));
/*
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

*/

// Legend

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 300,
        xEnd: 1550,
        yEnd: 300,
        strokeColor: '#5ab1ef',
        lineWidth: 2,
		text: '国民总收入(亿元)',
		textColor: '#333333'
    },
    draggable : false,
	hoverable : false
}));

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 320,
        xEnd: 1550,
        yEnd: 320,
        strokeColor: '#d87a80',
        lineWidth: 2,
		text: '国内生产总值(亿元)',
		textColor: '#333333'
    },
    draggable : false,
	hoverable : false
}));

// Courbes cassées

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 250], [300, 230], [450, 215], [600, 205], [750, 190], [900, 185], [1050, 180], [1200, 160], [1350, 150]],
        strokeColor : '#5ab1ef',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false,
	hoverable : false
}));

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 240], [300, 220], [450, 210], [600, 200], [750, 190], [900, 180], [1050, 170], [1200, 150], [1350, 140]],
        strokeColor : '#d87a80',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
        text : '5,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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
        text : '10,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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
        text : '15,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
}));



// Legend


// Courbes cassées

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 200], [300, 180], [450, 165], [600, 145], [750, 140], [900, 135], [1050, 130], [1200, 30], [1350, 10]],
        strokeColor : '#5ab1ef',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false,
	hoverable : false
}));

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 310], [300, 300], [450, 295], [600, 290], [750, 285], [900, 280], [1050, 275], [1200, 250], [1350, 240]],
        strokeColor : '#d87a80',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false,
	hoverable : false
}));

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 265], [300, 250], [450, 235], [600, 220], [750, 205], [900, 180], [1050, 160], [1200, 110], [1350, 90]],
        strokeColor : 'orange',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'dashed',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false,
	hoverable : false
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
        text : '居民消',
        textFont : 'normal 24px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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

zr.addShape(new LineShape({
    style : {
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
    draggable : false,
	hoverable : false
}));

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 320,
        xEnd: 1550,
        yEnd: 320,
        strokeColor: '#d87a80',
        lineWidth: 2,
		text: '农村居民消费水平(元)',
		textColor: '#333333'
    },
    draggable : false,
	hoverable : false
}));

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 340,
        xEnd: 1550,
        yEnd: 340,
        strokeColor: '#5ab1ef',
        lineWidth: 2,
		text: '城镇居民消费水平(元)',
		textColor: '#333333'
    },
    draggable : false,
	hoverable : false
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
var zr = zrender.init(document.getElementById('main3'));
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
        text : '50,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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
        text : '100,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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
        text : '150,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
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
    draggable : false,
	hoverable : false
}));
/*
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

*/

// Legend

zr.addShape(new LineShape({
    style : {
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
    draggable : false,
    hoverable : false
}));

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 300,
        xEnd: 1550,
        yEnd: 300,
        strokeColor: '#5ab1ef',
        lineWidth: 2,
		text: '城镇人口(万人)',
		textColor: '#333333'
    },
    draggable : false,
	hoverable : false
}));

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 320,
        xEnd: 1550,
        yEnd: 320,
        strokeColor: '#d87a80',
        lineWidth: 2,
		text: '乡村人口(万人)',
		textColor: '#333333'
    },
    draggable : false,
	hoverable : false
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
    draggable:false,
	hoverable : false
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
    draggable:false,
	hoverable : false
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
        text : '人口',
        textFont : 'normal 24px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
	hoverable : false
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
    draggable:false,
	hoverable : false
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
    draggable:false,
	hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 1625,
        y : 245,
        width : 40,
        height: 103,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 1575,
        y : 220,
        width : 40,
        height: 128,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 1475,
        y : 242,
        width : 40,
        height: 106,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 1425,
        y : 222,
        width : 40,
        height: 126,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 1325,
        y : 239,
        width : 40,
        height: 109,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 1275,
        y : 224,
        width : 40,
        height: 124,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 1175,
        y : 236,
        width : 40,
        height: 112,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));


zr.addShape(new RectangleShape({
    style : {
        x : width - 1125,
        y : 226,
        width : 40,
        height: 122,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 1025,
        y : 230,
        width : 40,
        height: 118,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));


zr.addShape(new RectangleShape({
    style : {
        x : width - 975,
        y : 226,
        width : 40,
        height: 122,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 875,
        y : 228,
        width : 40,
        height: 120,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 825,
        y : 228,
        width : 40,
        height: 120,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 725,
        y : 225,
        width : 40,
        height: 123,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 675,
        y : 230,
        width : 40,
        height: 118,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 575,
        y : 222,
        width : 40,
        height: 126,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 525,
        y : 232,
        width : 40,
        height: 116,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));

/*****************************************/

zr.addShape(new RectangleShape({
    style : {
        x : width - 425,
        y : 219,
        width : 40,
        height: 129,
        radius: [5, 5],
        brushType : 'both',
        color : '#5ab1ef'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new RectangleShape({
    style : {
        x : width - 375,
        y : 234,
        width : 40,
        height: 114,
        radius: [5, 5],
        brushType : 'both',
        color : '#d87a80'
    },
    draggable : false,
    hoverable : false
}));


// Courbes cassées

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 100], [300, 99], [450, 98], [600, 97], [750, 96], [900, 95], [1050, 94], [1200, 93], [1350, 92]],
        strokeColor : 'orange',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'dashed',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false,
	hoverable : false
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
    style : {
        x : 25,
        y : 260,
        brushType : 'fill',
        color : '#999999',
        shadowColor : 'none',
        shadowBlur : 0,
        lineWidth : 3,
        text : '30,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
    hoverable : false
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
        text : '60,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
    hoverable : false
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
        text : '90,000',
        textFont : 'normal 12px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
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
    draggable : false,
    hoverable : false
}));


zr.addShape(new LineShape({
    style : {
        xStart : 146,
        yStart : 300,
        xEnd : 1350,
        yEnd : 250,
        strokeColor : '#d87a80',
        lineWidth : 2,
        lineType : 'solid'
    },
    draggable:false
}));

zr.addShape(new LineShape({
    style : {
        xStart : 146,
        yStart : 200,
        xEnd : 1350,
        yEnd : 340,
        strokeColor : '#5ab1ef',
        lineWidth : 2,
        lineType : 'solid'
    },
    draggable:false
}));

zr.addShape(new BrokenLine({
    style: {
        pointList : [[146, 110], [300, 108], [450, 106], [600, 104], [750, 102], [900, 100], [1050, 98], [1200, 96], [1350, 94]],
        strokeColor : 'orange',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'dashed',
        lineJoin : 'miter',
        miterLimit : 50,
        textPosition:'end'
    },
    draggable : false,
    hoverable : false
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
        text : '就业',
        textFont : 'normal 24px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false,
    hoverable : false
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

zr.addShape(new LineShape({
    style : {
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
    draggable : false,
    hoverable : false
}));

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 320,
        xEnd: 1550,
        yEnd: 320,
        strokeColor: '#d87a80',
        lineWidth: 2,
        text: '城镇就业人员(万人)',
        textColor: '#333333'
    },
    draggable : false,
    hoverable : false
}));

zr.addShape(new LineShape({
    style : {
        xStart: 1500,
        yStart: 340,
        xEnd: 1550,
        yEnd: 340,
        strokeColor: '#5ab1ef',
        lineWidth: 2,
        text: '乡村就业人员(万人)',
        textColor: '#333333'
    },
    draggable : false,
    hoverable : false
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

