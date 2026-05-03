# 角平分线 Angle Bisector

### 关键词 Keywords

| 术语     | 英文           | 含义                       |
| :------- | :------------- | :------------------------- |
| 角平分线 | Angle Bisector | 将角分成两个相等的角的射线 |
| 距离     | Distance       | 点到直线的垂线段长度       |
| 内心     | Incenter       | 三角形内角平分线的交点     |

---

## 性质与判定

!!! theorem "角平分线性质定理"
    角平分线上的点到角两边的距离相等。

!!! theorem "角平分线判定定理"
    在角的内部，到角两边距离相等的点在角的平分线上。

---

## 动态演示：解析几何构建法

**操作指南：**

- 拖动 **A** 或 **B** 改变角度。
- 红色点 **P** 严格锁定在角平分线上。
- 观察绿色垂线段 **PD** 和 **PE**，它们在数值上永远保持一致。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:600px; height:500px; margin: 20px auto; border: 2px solid #34495e; border-radius: 8px; background: #fff; touch-action: none;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-2, 10, 10, -2], 
        axis: true, 
        grid: true,
        keepAspectRatio: true,
        showCopyright: false
    });

    // 1. 顶点固定在原点，创建两个自由点 A, B
    var O = board.create('point', [0, 0], {name: 'O', fixed: true, color: '#2c3e50'});
    var pA = board.create('point', [8, 2], {name: 'A', color: '#2c3e50'});
    var pB = board.create('point', [2, 8], {name: 'B', color: '#2c3e50'});

    // 2. 绘制角的两边（射线）
    var lineOA = board.create('line', [O, pA], {straightFirst: false, strokeColor: '#34495e'});
    var lineOB = board.create('line', [O, pB], {straightFirst: false, strokeColor: '#34495e'});

    // 3. 优化：使用 JSXGraph 内置的角平分线功能，替代原来复杂的数学计算
    var bisector = board.create('bisector', [pA, O, pB], {visible: false});
    // 提取角平分线上的方向点，做成一条射线
    var bisectorRay = board.create('line', [O, bisector.point2], {straightFirst: false, strokeColor: '#e74c3c', strokeWidth: 2, dash: 2});

    // 4. 创建动点 P
    var P = board.create('glider', [3, 3, bisectorRay], {name: 'P', color: '#e74c3c', size: 6});

    // 5. 修复：标准的 JSXGraph 求垂足方法（作垂线 -> 求交点）
    var pLineA = board.create('perpendicular', [lineOA, P], {visible: false}); // 隐藏的垂线
    var perpA = board.create('intersection', [pLineA, lineOA], {name: 'D', size: 2, color: '#27ae60'}); // 垂足D

    var pLineB = board.create('perpendicular', [lineOB, P], {visible: false}); // 隐藏的垂线
    var perpB = board.create('intersection', [pLineB, lineOB], {name: 'E', size: 2, color: '#27ae60'}); // 垂足E
    
    // 连结垂线段
    board.create('segment', [P, perpA], {strokeColor: '#27ae60', strokeWidth: 2});
    board.create('segment', [P, perpB], {strokeColor: '#27ae60', strokeWidth: 2});
    
    // 6. 修复：标准的 JSXGraph 绘制直角符号方法
    board.create('angle', [O, perpA, P], {type: 'square', size: 10,radius: 0.5, name: ''});
    board.create('angle', [O, perpB, P], {type: 'square', size: 10,radius: 0.5, name: ''});

    // 7. 实时数值显示
    board.create('text', [0.5, 9, function() {
        return 'PD (Distance to OA) = ' + P.Dist(perpA).toFixed(2);
    }], {fontSize: 16, color: '#27ae60', fontWeight: 'bold'});

    board.create('text', [0.5, 8.2, function() {
        return 'PE (Distance to OB) = ' + P.Dist(perpB).toFixed(2);
    }], {fontSize: 16, color: '#27ae60', fontWeight: 'bold'});

})();
</script>

---

## 知识拓展：内心与内切圆

!!! info "三角形内心 (Incenter)"
    三角形三条内角平分线交于一点，这个点叫做三角形的**内心**。

    - **核心性质**：内心到三角形三边的距离相等。
    - **几何意义**：内心是三角形**内切圆 (Inscribed Circle)** 的圆心。



??? tip "辅助线作法"
    在几何证明中，如果题目给出了**角平分线**，最经典的辅助线作法是：**向角两边作垂线段**。这不仅能直接利用性质定理，还能通过 $HL$ 判定定理迅速构造出全等三角形。
