# WP7 答案

![P1](../assets/images/ans/wp7/wp7-1.jpg)

![P2](../assets/images/ans/wp7/wp7-2.jpg)

![P3](../assets/images/ans/wp7/wp7-3.jpg)

![P4](../assets/images/ans/wp7/wp7-4.jpg)

![P5](../assets/images/ans/wp7/wp7-5.jpg)

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>

<div id="jxgbox" class="jxgbox" style="width:600px; height:500px; margin: 0 auto;"></div>

<script type="text/javascript">
  (function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-4, 6, 4, 0],
        axis: false,
        showCopyright: false,
        keepaspectratio: true
    });

    // 坐标定义 (满足 AC=BC=2√2)
    var pC = board.create('point', [0, 4], {name: 'C', size: 3, color: 'black', fixed: true});
    var pA = board.create('point', [-2, 2], {name: 'A', size: 3, color: 'black', fixed: true});
    var pB = board.create('point', [2, 2], {name: 'B', size: 3, color: 'black', fixed: true});

    // 绘制原始 △ABC
    board.create('polygon', [pA, pB, pC], {fillColor: '#d3eaf2', borders: {strokeWidth: 2}});
    board.create('angle', [pA, pC, pB], {type: 'square', radius: 0.3, name: ''});

    // 中点 D
    var pD = board.create('point', [-1, 3], {name: 'D', size: 2, color: 'black'});
    board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: 'black'});

    // 旋转滑块
    var slider = board.create('slider', [[-2, 5], [2, 5], [0, 0, 2*Math.PI]], {name: '旋转角α'});

    // 旋转变换
    var rot = board.create('transform', [function() { return slider.Value(); }, pB], {type: 'rotate'});
    var pE = board.create('point', [pC, rot], {name: 'E', size: 3, color: 'red'});
    var pF = board.create('point', [pD, rot], {name: 'F', size: 3, color: 'red'});

    // 绘制旋转后的 △BEF
    board.create('polygon', [pB, pE, pF], {fillColor: '#fdebd0', borders: {strokeColor: 'red', strokeWidth: 2}});

    // 绘制 CF 线段
    board.create('segment', [pC, pF], {strokeColor: 'red', strokeWidth: 2});
    
    // 辅助平行线段 (不再无限延伸)
    // 构造一条从C出发，方向与AB平行的短线段
    board.create('segment', [pC, [0, 4 - 2]], {strokeColor: 'gray', dash: 2, straightFirst: false, straightLast: false});

    // 测量文字
    board.create('text', [-3, 0.5, function() {
        return '线段 CF 长度: ' + pF.Dist(pC).toFixed(3);
    }], {fontSize: 16});
  })();
</script>