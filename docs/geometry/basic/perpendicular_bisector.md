# 线段的垂直平分线 Perpendicular Bisector

### 关键词 Keywords

| 术语       | 英文                                  | 含义                             |
| :--------- | :------------------------------------ | :------------------------------- |
| 垂直平分线 | Perpendicular Bisector                | 垂直且平分一条线段的直线         |
| 中点       | Midpoint                              | 将线段分为两条相等线段的点       |
| 尺规作图   | Straightedge and Compass Construction | 仅使用无刻度直尺和圆规进行的作图 |
| 距离相等   | Equidistant                           | 到两个或多个点的距离相等         |

---

## 垂直平分线的性质与判定

线段的垂直平分线不仅是一条位置特殊的直线，它还代表了平面内一组具有特定特征的点集。

### 1. 性质定理 (The Property)

!!! theorem "性质"

    线段垂直平分线上的点到线段两个端点的距离相等。

    - **几何语言**：如图，直线 $l \perp AB$ 于点 $O$，且 $AO = BO$。若点 $P$ 在直线 $l$ 上，则 $PA = PB$。

### 2. 判定定理 (The Converse)

!!! theorem "判定"

    与线段两个端点距离相等的点，在这条线段的垂直平分线上。

    - **用途**：常用于证明某个点在特定的直线上，或者证明三线合一等性质。

---

## 尺规作图：作线段的垂直平分线

这是几何作图中最为基础的操作之一，也是作线段中点、作垂线的基础。

!!! info "作图步骤 Construction Steps"

    假设已知线段 $AB$：

    1. **以 $A$ 为圆心**，以大于 $\frac{1}{2}AB$ 的长度为半径画弧。
    2. **以 $B$ 为圆心**，以同样的半径画弧，两弧交于点 $C$ 和点 $D$。
    3. **过 $C, D$ 两点作直线**，直线 $CD$ 即为线段 $AB$ 的垂直平分线。



---

## 动态演示：垂直平分线的轨迹性质

拖动点 $P$ 沿着垂直平分线移动，观察 $PA$ 与 $PB$ 的长度关系。无论 $P$ 在何处，这两条线段始终保持相等。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-5, 5, 5, -5], 
        axis: true, 
        showCopyright: false
    });

    // 1. 创建固定的线段端点 A 和 B
    var A = board.create('point', [-3, -1], {name: 'A', fixed: true});
    var B = board.create('point', [3, -1], {name: 'B', fixed: true});
    var seg = board.create('segment', [A, B], {strokeColor: '#2c3e50'});

    // 2. 计算并创建垂直平分线
    var midpoint = board.create('midpoint', [A, B], {name: 'M', color: '#7f8c8d'});
    var perp = board.create('perpendicular', [seg, midpoint], {
        strokeColor: '#e74c3c', 
        dash: 2, 
        name: '垂直平分线', 
        withLabel: true
    });

    // 3. 在垂直平分线上创建一个可滑动的点 P
    var P = board.create('glider', [0, 2, perp], {name: 'P', color: '#27ae60'});

    // 4. 连接 PA 和 PB
    board.create('segment', [P, A], {strokeColor: '#27ae60', dash: 1});
    board.create('segment', [P, B], {strokeColor: '#27ae60', dash: 1});

    // 5. 实时显示距离
    board.create('text', [-4, 4, function() {
        return 'PA = ' + P.Dist(A).toFixed(2);
    }], {fontSize: 16, color: '#27ae60'});

    board.create('text', [-4, 3.3, function() {
        return 'PB = ' + P.Dist(B).toFixed(2);
    }], {fontSize: 16, color: '#27ae60'});

})();
</script>

---

## 拓展：三角形的三边垂直平分线

!!! theorem "三角形的外心 (Circumcenter)"

    三角形三条边的垂直平分线相交于一点，这个点叫做三角形的**外心**。
    
    - **性质**：外心到三角形三个顶点的距离相等（$OA = OB = OC$）。
    - **应用**：外心是三角形**外接圆**的圆心。

??? tip "解题技巧：辅助线作法"

    当题目中出现“点 $P$ 到线段两端点距离相等”时，应立刻联想到垂直平分线性质，考虑通过连接端点构造等腰三角形，或者直接引出垂直平分线来辅助解题。