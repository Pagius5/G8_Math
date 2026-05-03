# 三角形基础 Triangle Basics

### 关键词 Keywords

| 术语   | 英文                   | 含义                                               |
| :----- | :--------------------- | :------------------------------------------------- |
| 三角形 | Triangle               | 由不在同一直线上的三条线段首尾顺次相接所组成的图形 |
| 顶点   | Vertex (pl. Vertices)  | 相邻两边的公共端点                                 |
| 内角和 | Sum of Interior Angles | 三角形三个内角的度数之和                           |
| 外角   | Exterior Angle         | 三角形的一边与另一边的延长线所组成的角             |

---

## 核心定理与性质

### 1. 三角形三边关系 (Triangle Inequality)
!!! theorem "三角形不等式"
    三角形任意两边之和大于第三边；任意两边之差小于第三边。
    
    - 若三边长分别为 $a, b, c$，则必有：$a + b > c$，$a + c > b$，$b + c > a$。

### 2. 内角和定理 (Interior Angle Sum Theorem)
!!! theorem "内角和"
    三角形三个内角的和等于 $180^\circ$。

### 3. 外角定理 (Exterior Angle Theorem)
!!! theorem "外角性质"
    1. 三角形的一个外角等于与它不相邻的两个内角的和。
    2. 三角形的一个外角大于任何一个与它不相邻的内角。



---

## 动态演示：内角和与不等式验证

**交互说明：**

- 拖动 **A, B, C** 任何一个顶点。
- 观察屏幕上方的 **Angle Sum**，无论三角形形状如何改变（锐角、直角、钝角），其和始终为 $180^\circ$。
- 注意三边长度的变化，尝试将一个顶点拖向对边，观察当两边之和接近第三边时三角形的变化。

<div id="jxgbox_triangle" class="jxgbox" style="width:100%; max-width:600px; height:500px; margin: 20px auto; border: 2px solid #34495e; border-radius: 8px; background: #fff; touch-action: none;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox_triangle', {
        boundingbox: [-2, 10, 10, -2], 
        axis: true, 
        grid: true,
        keepAspectRatio: true,
        showCopyright: false
    });

    // 1. 创建三个自由顶点
    var pA = board.create('point', [1, 7], {name: 'A', color: '#2c3e50'});
    var pB = board.create('point', [1, 1], {name: 'B', color: '#2c3e50'});
    var pC = board.create('point', [7, 1], {name: 'C', color: '#2c3e50'});

    // 2. 绘制多边形
    var triangle = board.create('polygon', [pA, pB, pC], {
        fillColor: '#3498db', 
        fillOpacity: 0.1,
        strokeColor: '#2c3e50',
        strokeWidth: 2
    });

    // 3. 计算并显示内角
    var getAngle = function(p1, p2, p3) {
        var ang = JXG.Math.Geometry.rad(p1, p2, p3) * 180 / Math.PI;
        if (ang > 180) ang = 360 - ang;
        return ang;
    };

    board.create('text', [0.5, 9.2, function() {
        var a1 = getAngle(pC, pA, pB);
        var a2 = getAngle(pA, pB, pC);
        var a3 = getAngle(pB, pC, pA);
        return '∠A + ∠B + ∠C = ' + a1.toFixed(1) + '° + ' + a2.toFixed(1) + '° + ' + a3.toFixed(1) + '° = ' + (a1 + a2 + a3).toFixed(1) + '°';
    }], {fontSize: 15, fontWeight: 'bold', color: '#e74c3c'});

    // 4. 三边长度实时显示 (验证不等式)
    board.create('text', [0.5, 8.4, function() {
        var c = pA.Dist(pB);
        var a = pB.Dist(pC);
        var b = pC.Dist(pA);
        return '边长: c=' + c.toFixed(2) + ', a=' + a.toFixed(2) + ', b=' + b.toFixed(2);
    }], {fontSize: 13, color: '#2c3e50'});

})();
</script>

---

## 知识小结

!!! info "多边形的扩展"
    三角形是多边形中最基础的图形。根据内角和公式 $(n-2) \times 180^\circ$，当 $n=3$ 时，和恰好为 $180^\circ$。它是唯一具有**稳定性**的多边形，在工程建筑中（如桥梁钢架）有极其广泛的应用。

??? tip "辅助线技巧：平行线法"
    证明内角和定理最经典的方法是：**过顶点作对边的平行线**。利用“两直线平行，内错角相等”的性质，将三个角平移到同一条直线上，形成一个平角（$180^\circ$）。