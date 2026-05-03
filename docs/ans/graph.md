# Graph 

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>

## WP7
<div style="margin-bottom: 10px; text-align: center; font-family: sans-serif;">
  <label style="font-weight: bold;">旋转角度: </label>
  <input type="number" id="angleInput" value="0" min="0" max="360" step="1" style="width: 50px; padding: 2px;"> °
</div>

<div id="jxgbox1" class="jxgbox" style="width: 100%; max-width: 600px; aspect-ratio: 6 / 5; height: auto; margin: 0 auto;"></div>

<script type="text/javascript">
  (function() {
    var board = JXG.JSXGraph.initBoard('jxgbox1', {
        boundingbox: [-4, 6, 4, 0],
        axis: false,
        showCopyright: false,
        keepaspectratio: true
    });

    var pC = board.create('point', [0, 4], {name: 'C', size: 3, color: 'black', fixed: true});
    var pA = board.create('point', [-2, 2], {name: 'A', size: 3, color: 'black', fixed: true});
    var pB = board.create('point', [2, 2], {name: 'B', size: 3, color: 'black', fixed: true});

    board.create('polygon', [pA, pB, pC], {fillColor: '#d3eaf2', borders: {strokeWidth: 2}});
    board.create('angle', [pA, pC, pB], {type: 'square', radius: 0.3, name: ''});

    var pD = board.create('point', [-1, 3], {name: 'D', size: 2, color: 'black'});
    board.create('segment', [pB, pD], {strokeWidth: 2, strokeColor: 'black'});

    // 1. 滑块范围设置为 0-360
    var slider = board.create('slider', [[-2, 5], [2, 5], [0, 0, 360]], {name: '旋转角'});

    // 2. 双向绑定逻辑
    var input = document.getElementById('angleInput');
    if (input) {
        slider.on('drag', function() { 
            input.value = Math.round(slider.Value()); 
        });
        
        input.addEventListener('input', function() {
            var val = parseFloat(this.value);
            if(!isNaN(val)) { 
                slider.setValue(val); 
                board.update(); 
            }
        });
    }

    // 3. 旋转变换：此处加入 Math.PI / 180 进行度到弧度的转换
    var rot = board.create('transform', [function() { 
        return slider.Value() * Math.PI / 180; 
    }, pB], {type: 'rotate'});

    var pE = board.create('point', [pC, rot], {name: 'E', size: 3, color: 'red'});
    var pF = board.create('point', [pD, rot], {name: 'F', size: 3, color: 'red'});

    board.create('polygon', [pB, pE, pF], {fillColor: '#fdebd0', borders: {strokeColor: 'red', strokeWidth: 2}});
    board.create('segment', [pC, pF], {strokeColor: 'red', strokeWidth: 2});
    board.create('segment', [pC, [0, 2]], {strokeColor: 'gray', dash: 2, straightFirst: false, straightLast: false});

    board.create('text', [-3, 0.5, function() {
        return '线段 CF 长度: ' + pF.Dist(pC).toFixed(3);
    }], {fontSize: 16});
  })();
</script>

<hr>

## 期中填空题
<div style="margin-bottom: 10px; text-align: center; font-family: sans-serif;">
  <label style="font-weight: bold;">旋转角度: </label>
  <input type="number" id="angleInput2" value="0" min="0" max="360" style="width: 50px; padding: 2px;"> °
</div>

<!-- 画板容器 -->
<div id="jxgbox2" class="jxgbox" style="width: 100%; max-width: 600px; aspect-ratio: 6 / 5; height: auto; margin: 0 auto;"></div>

<script type="text/javascript">
  (function() {
    var board = JXG.JSXGraph.initBoard('jxgbox2', {
        boundingbox: [-6, 5, 5, -4],
        axis: false, showCopyright: false, keepaspectratio: true
    });

    var pA = board.create('point', [0, Math.sqrt(3)], {name: 'A', size: 3, color: 'black', fixed: true});
    var pB = board.create('point', [-3, 0], {name: 'B', size: 3, color: 'black', fixed: true});
    var pC = board.create('point', [1, 0], {name: 'C', size: 3, color: 'black', fixed: true});

    board.create('polygon', [pA, pB, pC], {fillColor: '#d3eaf2', borders: {strokeWidth: 2, strokeColor: 'black'}});
    board.create('angle', [pC, pA, pB], {type: 'square', radius: 0.3, name: ''});

    var lineBC = board.create('line', [pB, pC], {strokeColor: 'black', strokeWidth: 1});

    var slider = board.create('slider', [[-4, 4], [2, 4], [0, 0, 360]], {name: '旋转角α', snapWidth: 1});

    // ★ 修复 1：获取正确的独立 ID
    var input = document.getElementById('angleInput2');
    
    // 监听输入框输入 -> 更新滑块
    if (input) {
        input.addEventListener('input', function() {
            var val = Number(this.value);
            if (!isNaN(val)) {
                slider.setValue(val);
                board.update();
            }
        });
    }

    var rot = board.create('transform', [function() { return slider.Value() * Math.PI / 180; }, pA], {type: 'rotate'});
    var pD = board.create('point', [pB, rot], {name: 'D', size: 3, color: 'red'});
    var pE = board.create('point', [pC, rot], {name: 'E', size: 3, color: 'red'});

    board.create('polygon', [pA, pD, pE], {fillColor: '#fdebd0', borders: {strokeColor: 'red', strokeWidth: 2}});
    
    var lineDE = board.create('line', [pD, pE], {strokeColor: 'red', dash: 2});
    var pG = board.create('intersection', [lineDE, lineBC, 0], {name: 'G', size: 3, color: 'blue'});

    var txtResult = board.create('text', [-5, -2, ''], {fontSize: 16, color: 'black'});
    var txtHint = board.create('text', [-5, -2.8, ''], {fontSize: 16, color: 'red'});

    // 所有的动态更新全部集中在 update 钩子中
    board.on('update', function() {
        var v = Math.round(slider.Value());
        
        // ★ 修复 2：滑块 -> 输入框的同步放在这里，不仅拖拽有效，点击滑块轨道也有效！
        // 判断一下避免输入时光标乱跳，只有当值不一致时才覆写
        if (input && Number(input.value) !== v) {
            input.value = v;
        }

        // --- 更新提示文字 ---
        if (v === 150 || v === 330) {
            txtHint.setText('满足题目条件: 此时 AD // BC');
        } else {
            txtHint.setText(''); 
        }

        // --- 更新计算文字 ---
        if (!isFinite(pG.X()) || isNaN(pG.X())) {
            txtResult.setText('当前状态: 直线 DE // BC (无交点)');
        } else {
            var v1x = pE.X() - pA.X(), v1y = pE.Y() - pA.Y();
            var v2x = pG.X() - pA.X(), v2y = pG.Y() - pA.Y();
            var dot = v1x*v2x + v1y*v2y;
            var mag1 = Math.sqrt(v1x*v1x + v1y*v1y), mag2 = Math.sqrt(v2x*v2x + v2y*v2y);
            var cosTheta = Math.max(-1, Math.min(1, dot/(mag1*mag2)));
            var deg = Math.acos(cosTheta) * 180 / Math.PI;
            
            txtResult.setText('实时计算: ∠EAG = ' + Math.round(deg) + '°');
        }
    });

    board.update();
  })();
</script>

<hr>

## 期中压轴题
<!-- 外部输入框，控制 CM 的长度 -->
<div style="margin-bottom: 10px; text-align: center; font-family: sans-serif;">
  <label style="font-weight: bold;">动点 M 位置 (输入 CM 长度): </label>
  <input type="number" id="cmInput" value="1.5" min="0.1" max="5.0" step="0.1" style="width: 50px; padding: 2px;">
</div>

<div id="jxgbox3" class="jxgbox" style="width: 100%; max-width: 600px; aspect-ratio: 6 / 5; height: auto; margin: 0 auto;"></div>

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

## 测试

<!-- UI 容器 -->
<div id="jxgbox-ssa" class="jxgbox" style="width:100%; max-width:600px; height:450px; margin: 20px auto; border: 2px solid #34495e; background-color: #fcfcfc; border-radius: 8px; touch-action: none;"></div>

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox-ssa', {
        boundingbox: [-2, 9, 12, -2], 
        axis: false, 
        grid: true,
        showCopyright: false
    });

    // 1. 拆分并明确创建每一个基础点 (解决连线崩溃问题)
    var A = board.create('point', [0, 0], {name: 'A', fixed: true, color: '#2c3e50', size: 4});
    var pDir = board.create('point', [1, 0], {visible: false, fixed: true}); // 射线方向点
    
    // 2. 创建底边和射线
    var xAxis = board.create('line', [A, pDir], {visible: false}); 
    var rayA = board.create('line', [A, pDir], {
        strokeColor: '#7f8c8d', 
        strokeWidth: 2,
        straightFirst: false,  // 不向起点 A 外部延伸
        straightLast: true     // 向终点 pDir 方向无限延伸
    });

    // 3. 创建点 C 和已知 边b (AC)
    var C = board.create('point', [4, 4], {name: 'C', color: '#2980b9', size: 5});
    var segAC = board.create('segment', [A, C], {name: '边b', withLabel: true, strokeColor: '#2980b9', strokeWidth: 3});
    
    // 创建角A的阴影扇形
    board.create('angle', [pDir, A, C], {name: '∠A', type: 'sector', radius: 1, color: '#8e44ad', fillOpacity: 0.2});

    // 4. 创建控制 边a 长度的滑动条
    var sliderA = board.create('slider', [[1, 8], [7, 8], [2, 4.5, 9]], {name: '边a的长度', snapWidth: 0.1, strokeColor: '#c0392b', fillColor: '#e74c3c'});

    // 5. 以 C 为圆心，a为半径画圆
    var circleC = board.create('circle', [C, function() { return sliderA.Value(); }], {strokeColor: '#e74c3c', dash: 2, strokeWidth: 1});

    // 6. 求圆与射线的交点 (先建立对象，不加内部判断，解决 undefined 崩溃问题)
    var B1 = board.create('intersection', [circleC, xAxis, 0], {name: 'B1', color: '#c0392b', size: 4});
    var B2 = board.create('intersection', [circleC, xAxis, 1], {name: 'B2', color: '#c0392b', size: 4});

    // 对象建好后，再安全地注入“只在射线正方向显示”的动态判定
    B1.setAttribute({ visible: function(){ return !isNaN(B1.X()) && B1.X() > 0; } });
    B2.setAttribute({ visible: function(){ return !isNaN(B2.X()) && B2.X() > 0; } });

    // 7. 动态绘制三角形区域和边
    var showT1 = function() { return !isNaN(B1.X()) && B1.X() > 0; };
    var showT2 = function() { return !isNaN(B2.X()) && B2.X() > 0; };

    var poly1 = board.create('polygon', [A, B1, C], {fillColor: '#f1c40f', fillOpacity: 0.3, borders: {visible: false}});
    poly1.setAttribute({ visible: showT1 });

    var poly2 = board.create('polygon', [A, B2, C], {fillColor: '#2ecc71', fillOpacity: 0.4, borders: {visible: false}});
    poly2.setAttribute({ visible: showT2 });

    var segA1 = board.create('segment', [C, B1], {strokeColor: '#e74c3c', strokeWidth: 3, name: '边a', withLabel: true});
    segA1.setAttribute({ visible: showT1 });

    var segA2 = board.create('segment', [C, B2], {strokeColor: '#e74c3c', strokeWidth: 3, dash: 2});
    segA2.setAttribute({ visible: showT2 });

    // 8. 实时文字判定（拆分为两行，防止被 Markdown 的 HTML 过滤器误杀）
    board.create('text', [0.5, 7.2, function() {
        var a = sliderA.Value();
        var b = A.Dist(C);
        var h = C.Y();
        return "已知条件: 固定 ∠A, 边b = " + b.toFixed(1) + ", 边a = " + a.toFixed(1) + " (点C的高h = " + h.toFixed(1) + ")";
    }], {fontSize: 14});

    board.create('text', [0.5, 6.6, function() {
        var a = sliderA.Value();
        var b = A.Dist(C);
        var h = C.Y();
        if (a < h) {
            return "🔴 0 个三角形 (边a太短，够不到底边)";
        } else if (Math.abs(a - h) < 0.05) {
            return "🟡 1 个直角三角形 (a 恰好等于高)";
        } else if (a > h && a < b) {
            return "🟢 存在 2 个不同的三角形！(这就是 SSA 无法证明全等的原因)";
        } else {
            return "🔵 1 个三角形 (a 大于等于 b)";
        }
    }], {fontSize: 16, fontWeight: 'bold'});

})();
</script>