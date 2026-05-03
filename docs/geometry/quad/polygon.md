# 多边形 Polygons

### 关键词 Keywords

| 术语     | 英文            | 含义                                           |
| :------- | :-------------- | :--------------------------------------------- |
| 多边形   | Polygon         | 由三条或以上线段首尾顺次连接组成的封闭平面图形 |
| 凸多边形 | Convex Polygon  | 任意一边所在直线都不穿过图形内部的多边形       |
| 凹多边形 | Concave Polygon | 至少有一边所在直线会穿过图形内部的多边形       |
| 对角线   | Diagonal        | 连接多边形不相邻两个顶点的线段                 |
| 外角     | Exterior Angle  | 内角的一边延长线与另一边组成的角               |

---

## 多边形的定义与分类

在同一平面内，由不在同一直线上的三条或三条以上的线段首尾顺次连接所组成的封闭图形，叫作**多边形**。

### 常见的名称

| 边数 | 中文名   | 英文名        |
| :--- | :------- | :------------ |
| 3    | 三角形   | Triangle      |
| 4    | 四边形   | Quadrilateral |
| 5    | 五边形   | Pentagon      |
| 6    | 六边形   | Hexagon       |
| 8    | 八边形   | Octagon       |
| $n$  | $n$ 边形 | $n$-gon       |

??? tip "拓展：拉丁语和希腊语中的数"

    === "拉丁语"

        | 数   | 拉丁语基数词 (Cardinal) | 拉丁语序数词 (Ordinal) | 英语衍生词参考               |
        | :--- | :---------------------- | :--------------------- | :--------------------------- |
        | 1    | Unus                    | Primus                 | Unicycle / Primary           |
        | 2    | Duo                     | Secundus               | Duet / Secondary             |
        | 3    | Tres                    | Tertius                | Trio / Tertiary              |
        | 4    | Quattuor                | Quartus                | Quarter / Quartet            |
        | 5    | Quinque                 | Quintus                | Quintuplets / Quintessential |
        | 6    | Sex                     | Sextus                 | Sextet / Sextant             |
        | 7    | Septem                  | Septimus               | September / Septimal         |
        | 8    | Octo                    | Octavus                | Octopus / Octave             |
        | 9    | Novem                   | Nonus                  | November / Nonagon           |
        | 10   | Decem                   | Decimus                | December / Decimal           |
        | 11   | Undecim                 | Undecimus              | Undecimal                    |
        | 12   | Duodecim                | Duodecimus             | Duodecimal                   |

    === "希腊语"

        | 数   | 希腊语基数词 (Cardinal) | 希腊语序数词 (Ordinal) | 英语衍生词参考          |
        | :--- | :---------------------- | :--------------------- | :---------------------- |
        | 1    | Heis / Hen              | Prōtos                 | Henagon / Prototype     |
        | 2    | Duo                     | Deuteros               | Digraph / Deuteronomy   |
        | 3    | Treis                   | Tritos                 | Trigon / Tritium        |
        | 4    | Tettares                | Tetartos               | Tetrapod / Tetrarch     |
        | 5    | Pente                   | Pemptos                | Pentagon / Pentameter   |
        | 6    | Hex                     | Hektos                 | Hexagon / Hexagram      |
        | 7    | Hepta                   | Hebdomos               | Heptathlon / Hebdomadal |
        | 8    | Oktō                    | Ogdoos                 | Octogon / Ogdoad        |
        | 9    | Ennea                   | Enatos                 | Enneagon / Ennead       |
        | 10   | Deka                    | Dekatos                | Decagon / Decalogue     |
        | 11   | Hendeka                 | Hendekatos             | Hendecagon              |
        | 12   | Dōdeka                  | Dōdekatos              | Dodecahedron            |

---

## 凸多边形与凹多边形

!!! info "判定标准"

    - **凸多边形 (Convex)**：画出任意一边所在的直线，其余各边都在这条直线的同一侧。
    - **凹多边形 (Concave)**：至少存在一边，其所在直线会将多边形“切开”。

**注：在初中阶段，我们主要讨论凸多边形。**



---

## 多边形的内角和 Interior Angle Sum

通过将多边形分割为三角形，我们可以推导出内角和公式。

!!! theorem "公式推导：三角形分割法"

    从 $n$ 边形的一个顶点出发，可以引出 $(n-3)$ 条对角线，这些对角线将 $n$ 边形分割成 $(n-2)$ 个三角形。
    
    因为每个三角形的内角和是 $180^\circ$，所以 $n$ 边形的内角和为：

    $$(n-2) \times 180^\circ$$

---

## 多边形的外角与外角和 Exterior Angle Sum

多边形内角的一边的延长线与另一边所组成的角叫做多边形的**外角**。

!!! theorem "外角和恒定性"

    任意凸多边形的外角和（每个顶点处只取一个外角）恒等于 **$360^\circ$**。

    **代数证明**：
    设内角为 $\angle 1, \angle 2, \dots, \angle n$，则对应的外角分别为 $(180^\circ - \angle 1), \dots$。
    
    $$\sum \text{外角} = 180^\circ n - \sum \text{内角}$$

    代入内角和公式：

    $$180^\circ n - 180^\circ (n-2) = 360^\circ$$

---

## 动态演示：多边形的性质

拖动滑块改变边数 $n$，观察内角和的变化以及对角线的分布。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:500px; margin: 20px auto; border-radius: 8px; touch-action: none;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    // 1. 初始化画布
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-6, 6, 6, -6], 
        axis: false, 
        showCopyright: false,
        pan: {enabled: false},
        zoom: {enabled: false}
    });

    // 2. 创建控制边数的滑块 (3 到 12 边)
    var n_sld = board.create('slider', [[-5, 5], [-1, 5], [3, 5, 12]], {
        name: 'n (边数)', 
        snapWidth: 1,
        style: 6
    });

    // 3. 动态文本显示
    board.create('text', [-5, 4, function() {
        var n = Math.round(n_sld.Value());
        return '内角和: (' + n + '-2) × 180° = ' + (n-2)*180 + '°';
    }], {fontSize: 16, fontWeight: 'bold'});

    board.create('text', [-5, 3.3, function() {
        var n = Math.round(n_sld.Value());
        return '对角线总数: ' + n + '(' + n + '-3)/2 = ' + (n*(n-3)/2);
    }], {fontSize: 14, color: '#e67e22'});

    // 中心点和半径
    var center = [0, -0.5];
    var radius = 3.5;

    // 4. 定义存储顶点和图形元素的数组
    var vertices = [];
    var polygon, diagonals = [], exteriorAngles = [];

    // 5. 核心渲染函数
    function renderPolygon() {
        var n = Math.round(n_sld.Value());
        
        // --- A. 清除旧元素 ---
        if (polygon) board.removeObject(polygon);
        board.removeObject(diagonals);
        board.removeObject(exteriorAngles);
        board.removeObject(vertices);
        vertices = [];
        diagonals = [];
        exteriorAngles = [];

        // --- B. 计算新顶点 ---
        for (var i = 0; i < n; i++) {
            var angle = 2 * Math.PI * i / n;
            // 计算正多边形顶点坐标
            var x = center[0] + radius * Math.cos(angle);
            var y = center[1] + radius * Math.sin(angle);
            vertices.push(board.create('point', [x, y], {visible: false, name: 'V'+i}));
        }

        // --- C. 绘制多边形实体 ---
        polygon = board.create('polygon', vertices, {
            fillColor: '#3498db', 
            fillOpacity: 0.2, 
            strokeColor: '#2c3e50', 
            strokeWidth: 2
        });

        // --- D. 绘制从V0出发的对角线（三角形分割） ---
        // 对角线连接 V0 到 Vi，其中 i 从 2 到 n-2
        if (n > 3) {
            for (var i = 2; i <= n - 2; i++) {
                diagonals.push(board.create('segment', [vertices[0], vertices[i]], {
                    strokeColor: '#3498db', 
                    dash: 2, 
                    strokeWidth: 1
                }));
            }
        }

        // --- E. 绘制外角 (Exterior Angles) ---
        for (var i = 0; i < n; i++) {
            // 定义当前点、上一点（用于延长线）和下一点
            var curr = vertices[i];
            var prev = vertices[(i + n - 1) % n];
            var next = vertices[(i + 1) % n];

            // 创建延长线方向的点 (基于 prev->curr 向量)
            var extPoint = board.create('point', [
                function(c, p) { return function() { return c.X() + (c.X() - p.X()) * 0.3; }; }(curr, prev),
                function(c, p) { return function() { return c.Y() + (c.Y() - p.Y()) * 0.3; }; }(curr, prev)
            ], {visible: false});

            // 绘制外角弧线 (extPoint - curr - next)
            exteriorAngles.push(board.create('angle', [extPoint, curr, next], {
                radius: 0.6, 
                fillColor: '#e74c3c', 
                fillOpacity: 0.4,
                strokeColor: '#c0392b',
                label: {visible: false} // 隐藏角度读数，强调概念
            }));
        }
    }

    // 6. 注册交互事件：滑块移动时重新渲染
    n_sld.on('drag', renderPolygon);

    // 7. 初始渲染
    renderPolygon();

})();
</script>

---

## 多边形的对角线数

对于 $n$ 边形的对角线总数，我们可以这样思考：

!!! info "逻辑拆解"

    1. **单点发出**：每个顶点可以引出 $(n-3)$ 条对角线（排除自身及相邻两点）。
    2. **总计初算**：共有 $n$ 个顶点，故为 $n(n-3)$ 条。
    3. **消除重复**：每条对角线连接两个点，被计算了两次（例如 $A \to C$ 和 $C \to A$）。

    **结论：对角线总数公式**

    $$\frac{n(n-3)}{2}$$

??? tip "拓展：外角和的“旅行者”视角"

    想象你沿着多边形的边界走一圈。每到一个顶点，你转过的角度就是那个顶点的**外角**。当你回到起点并面向初始方向时，你刚好转了完整的一圈，即 $360^\circ$。无论多边形有多少条边，这一圈的总度数永远不变。

