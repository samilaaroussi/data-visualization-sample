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
 
/*require.config({
paths: {
'zrender': fileLocation,
'zrender/shape/Circle': fileLocation,
'zrender/shape/BrokenLine' :fileLocation,
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
*/
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
        x : width - 330,
        y : 90,
        width : 50,
        height: 300,
        radius: [5, 5],
        brushType : 'both',
        color : color.getColor(colorIdx++),
        text : 'Population de Hubei'
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
        color : color.getColor(colorIdx++),
        text : 'Population de Hubei'
    },
    draggable : false
}));




/* Courbes cassées

zr.addShape(new BrokenLine({
    style: {
        pointList : [[0, 400], [146, 200], [250, 340], [328, 260], [620, 190]],
        strokeColor : 'rgba(135, 206, 250, 0.8)',   // == color
        lineWidth : 2,
        lineCap : 'round',
        lineType : 'solid',
        lineJoin : 'miter',
        miterLimit : 50,
        text:'brokenLine',
        textPosition:'end'
    },
    draggable : false
}));
*/

// 直线
zr.addShape(new LineShape({
    style : {
        xStart : 0,
        yStart : height,
        xEnd : width,
        yEnd : height,
        strokeColor : '#333333',
        lineWidth : 2,
        lineType : 'solid',    // default solid
        text : 'line'
    },
    draggable:false
}));

// 直线
zr.addShape(new LineShape({
    style : {
        xStart : 0,
        yStart : 0,
        xEnd : 0,
        yEnd : height,
        strokeColor : '#333333',
        lineWidth : 2,
        lineType : 'solid',    // default solid
        text : 'line'
    },
    draggable:false
}));


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
    /* 封装支持事件，见shape/base, config.EVENT
    onmousemove : function(e){console.log('onmousemove',e)},
    onmouseover : function(e){console.log('onmouseover',e)},
    onmouseout  : function(e){console.log('onmouseout',e)},
    onmousedown : function(e){console.log('onmousedown',e)},
    onmouseup   : function(e){console.log('onmouseup',e)},
    ondragstart : function(e){console.log('ondragstart',e)},
    ondragend   : function(e){console.log('ondragend',e)},
    ondragenter : function(e){console.log('ondragenter',e)},
    ondragover  : function(e){console.log('ondragover',e)},
    ondragleave : function(e){console.log('ondragleave',e)},
    ondrop      : function(e){console.log('ondrop',e)}
    */
}));


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
        text : 'Bar Chart',
        textFont : 'normal 50px verdana',
        textAlign : 'center',
        textBaseline : 'top'
    },
    draggable : false
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
                    
zr.render();
}
); 