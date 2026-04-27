# Graph 

## WP7
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>

<div id="jxgbox1" class="jxgbox" style="width:600px; height:500px; margin: 0 auto;"></div>

<script type="text/javascript">
  (function() {
    var board = JXG.JSXGraph.initBoard('jxgbox1', {
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

<hr>

## 期中选择题
<!-- 外部输入框 -->
<div style="margin-bottom: 10px; text-align: center; font-family: sans-serif;">
  <label style="font-weight: bold;">旋转角度: </label>
  <input type="number" id="angleInput" value="0" min="0" max="360" style="width: 60px; padding: 2px;"> °
</div>

<!-- 画板容器 -->
<div id="jxgbox2" class="jxgbox" style="width:600px; height:500px; margin: 0 auto;"></div>

<script type="text/javascript">
  (function() {
    var board = JXG.JSXGraph.initBoard('jxgbox2', {
        boundingbox: [-6, 5, 5, -4],
        axis: false, showCopyright: false, keepaspectratio: true
    });

    // 1. 坐标定义：巧妙设点使 ∠BAC=90°, ∠ABC=30° 且BC水平
    var pA = board.create('point', [0, Math.sqrt(3)], {name: 'A', size: 3, color: 'black', fixed: true});
    var pB = board.create('point', [-3, 0], {name: 'B', size: 3, color: 'black', fixed: true});
    var pC = board.create('point', [1, 0], {name: 'C', size: 3, color: 'black', fixed: true});

    // 绘制原始 △ABC
    board.create('polygon', [pA, pB, pC], {fillColor: '#d3eaf2', borders: {strokeWidth: 2, strokeColor: 'black'}});
    board.create('angle', [pC, pA, pB], {type: 'square', radius: 0.3, name: ''});

    // 直线BC (无限延伸以产生交点)
    var lineBC = board.create('line', [pB, pC], {strokeColor: 'black', strokeWidth: 1});

    // 2. 旋转滑块
    var slider = board.create('slider', [[-4, 4], [2, 4], [0, 0, 360]], {name: '旋转角α', snapWidth: 1});

    // ★ 滑块与输入框的极简联动机制
    var input = document.getElementById('angleInput');
    slider.on('drag', function() { input.value = Math.round(slider.Value()); });
    input.addEventListener('input', function() {
        slider.setValue(Number(this.value));
        board.update();
    });

    // 3. 旋转变换与生成 △ADE
    var rot = board.create('transform', [function() { return slider.Value() * Math.PI / 180; }, pA], {type: 'rotate'});
    var pD = board.create('point', [pB, rot], {name: 'D', size: 3, color: 'red'});
    var pE = board.create('point', [pC, rot], {name: 'E', size: 3, color: 'red'});

    // 绘制旋转后的 △ADE
    board.create('polygon', [pA, pD, pE], {fillColor: '#fdebd0', borders: {strokeColor: 'red', strokeWidth: 2}});
    
    // 直线DE及交点G
    var lineDE = board.create('line', [pD, pE], {strokeColor: 'red', dash: 2});
    var pG = board.create('intersection', [lineDE, lineBC, 0], {name: 'G', size: 3, color: 'blue'});

    // // 4. 测量与文本显示
    // board.create('text', [-5, -2], function() {
    //     // 平行时G点在无穷远，X坐标会变成 NaN
    //     if (!isFinite(pG.X())) return '当前状态: 直线 DE // BC (无交点)';
        
    //     // 向量点乘法求 ∠EAG (最稳定，防止角度正负号跳跃)
    //     var v1x = pE.X() - pA.X(), v1y = pE.Y() - pA.Y();
    //     var v2x = pG.X() - pA.X(), v2y = pG.Y() - pA.Y();
    //     var dot = v1x*v2x + v1y*v2y;
    //     var mag1 = Math.sqrt(v1x*v1x + v1y*v1y), mag2 = Math.sqrt(v2x*v2x + v2y*v2y);
    //     var deg = Math.acos(Math.max(-1, Math.min(1, dot/(mag1*mag2)))) * 180 / Math.PI;
        
    //     return '实时计算: ∠EAG = ' + Math.round(deg) + '°';
    // }, {fontSize: 16, color: 'blue'});

    // // 解题提示：使用 visible 动态控制显示与隐藏
    // board.create('text', [-5, -2.8], '⭐ 满足题目条件: 此时 AD // BC', {
    //     fontSize: 16, 
    //     color: 'red',
    //     // 专门控制可见性的钩子函数
    //     visible: function() {
    //         var v = Math.round(slider.Value());
    //         return v === 150 || v === 330; // 只有在 150 或 330 时返回 true
    //     }
    // });
    var txtResult = board.create('text', [-5, -2, ''], {fontSize: 16, color: 'black'});
    var txtHint = board.create('text', [-5, -2.8, ''], {fontSize: 16, color: 'red'});

    board.on('update', function() {
        
        // --- 更新提示文字 ---
        var v = Math.round(slider.Value());
        if (v === 150 || v === 330) {
            txtHint.setText('满足题目条件: 此时 AD // BC');
        } else {
            txtHint.setText(''); // 不是这俩角度就清空
        }

        // --- 更新计算文字 ---
        if (!isFinite(pG.X()) || isNaN(pG.X())) {
            // G点飞到无穷远，说明平行了
            txtResult.setText('当前状态: 直线 DE // BC (无交点)');
        } else {
            // 向量点乘法求夹角
            var v1x = pE.X() - pA.X(), v1y = pE.Y() - pA.Y();
            var v2x = pG.X() - pA.X(), v2y = pG.Y() - pA.Y();
            var dot = v1x*v2x + v1y*v2y;
            var mag1 = Math.sqrt(v1x*v1x + v1y*v1y), mag2 = Math.sqrt(v2x*v2x + v2y*v2y);
            var cosTheta = Math.max(-1, Math.min(1, dot/(mag1*mag2))); // 防止浮点误差超限
            var deg = Math.acos(cosTheta) * 180 / Math.PI;
            
            txtResult.setText('实时计算: ∠EAG = ' + Math.round(deg) + '°');
        }
    });

    // 手动触发一次，保证初始画面有文字
    board.update();
  })();
</script>

<hr>

## 期中压轴题
<!-- 外部输入框，控制 CM 的长度 -->
<div style="margin-bottom: 10px; text-align: center; font-family: sans-serif;">
  <label style="font-weight: bold;">动点 M 位置 (输入 CM 长度): </label>
  <input type="number" id="cmInput" value="1.5" min="0.1" max="5.0" step="0.1" style="width: 60px; padding: 2px;">
</div>

<!-- 画板容器 -->
<div id="jxgbox3" class="jxgbox" style="width:600px; height:500px; margin: 0 auto;"></div>

<script type="text/javascript">
  (function() {
    var board = JXG.JSXGraph.initBoard('jxgbox3', {
        boundingbox: [-2, 6, 6, -2], // 扩大视野，确保滑块和延长的折痕都在可见范围内
        axis: false, showCopyright: false, keepaspectratio: true
    });

    // 1. 固定矩形 ABCD (题意: AB=2, AD=3。故设 B(0,0), C(3,0), A(0,2), D(3,2))
    var pB = board.create('point', [0, 0], {name: 'B', size: 3, color: 'black', fixed: true});
    var pC = board.create('point', [3, 0], {name: 'C', size: 3, color: 'black', fixed: true});
    var pA = board.create('point', [0, 2], {name: 'A', size: 3, color: 'black', fixed: true});
    var pD = board.create('point', [3, 2], {name: 'D', size: 3, color: 'black', fixed: true});
    
    // 画出矩形底色
    board.create('polygon', [pA, pB, pC, pD], {fillColor: '#d3eaf2', borders: {strokeWidth: 2, strokeColor: 'black'}});

    // 2. 画板内部滑块 (绝对不会失效的变量控制)
    var slider = board.create('slider', [[-1, 5], [4, 5], [0, 1.5, 5]], {name: 'CM长度', snapWidth: 0.1});

    // ★ 安全绑定外部输入框：即使你没复制上面的 HTML input，代码也不会崩溃报错
    var input = document.getElementById('cmInput');
    if (input) {
        slider.on('drag', function() { input.value = slider.Value().toFixed(2); });
        input.addEventListener('input', function() {
            var val = parseFloat(this.value);
            if(!isNaN(val)) { slider.setValue(val); board.update(); }
        });
    }

    // 3. 射线上的动点 M
    // 延长的辅助虚线，暗示 M 在 CD 射线上运动
    board.create('segment', [pC, [3, 5.5]], {strokeColor: 'gray', strokeWidth: 1, dash: 2}); 
    
    // M 点的 Y 坐标永远跟随滑块的值！
    var pM = board.create('point', [3, function() { return slider.Value(); }], {name: 'M', size: 3, color: 'red'});

    // 4. 折痕的几何构建 (核心考点：对折意味着折痕是 BM 的垂直平分线)
    var lineBM = board.create('line', [pB, pM], {visible: false});  // 隐藏的连线 BM
    var midBM = board.create('midpoint', [pB, pM], {visible: false}); // 隐藏的中点
    var creaseLine = board.create('perpendicular', [lineBM, midBM], {visible: false}); // 隐藏的无限长折痕

    // 5. 求解折痕与矩形边的交点 E 和 F
    var lineAD = board.create('line', [pA, pD], {visible: false});
    var lineBC = board.create('line', [pB, pC], {visible: false});
    var pE = board.create('intersection', [creaseLine, lineAD, 0], {name: 'E', size: 3, color: 'blue'});
    var pF = board.create('intersection', [creaseLine, lineBC, 0], {name: 'F', size: 3, color: 'blue'});

    // 6. 最终图形绘制
    // 红色折痕 EF
    board.create('segment', [pE, pF], {strokeColor: 'red', dash: 2, strokeWidth: 2});
    
    // 对折的对称轴辅助线
    board.create('segment', [pB, pM], {strokeColor: 'gray', dash: 2, strokeWidth: 1});
    
    // 展示折叠前后的对应边 (BE = ME)，证明是对折
    board.create('segment', [pB, pE], {strokeColor: '#2ca02c', strokeWidth: 2}); 
    board.create('segment', [pM, pE], {strokeColor: '#2ca02c', strokeWidth: 2}); 

  })();
</script>

