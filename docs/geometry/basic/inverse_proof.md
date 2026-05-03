# 逆命题与逆定理 Converse Propositions and Theorems

### 关键词 Keywords

| 术语     | 英文                       | 含义                                                       |
| :------- | :------------------------- | :--------------------------------------------------------- |
| 原命题   | Original Proposition       | 陈述事实的原始语句，形式为“若 $p$，则 $q$”                 |
| 逆命题   | Converse Proposition       | 将原命题的题设与结论互换得到的命题，形式为“若 $q$，则 $p$” |
| 逆定理   | Converse Theorem           | 如果一个定理的逆命题经过证明是正确的，它就成为逆定理       |
| 互逆命题 | Mutually Converse          | 原命题与逆命题互为对方的逆命题                             |
| 互逆定理 | Mutually Converse Theorems | 原定理与逆定理互为对方的逆定理                             |

---

## 逆命题的性质

每一个命题都有逆命题，但原命题的真假与逆命题的真假**没有必然联系**。

!!! warning "逻辑陷阱"

    - 如果原命题是真命题，它的逆命题**不一定**是真命题。
    - 如果一个定理的逆命题也是真命题，那么这个逆命题就升格为**逆定理**。



---

## 常见互逆定理示例

在初等几何中，许多核心性质都成对出现：

1.  **等腰三角形**：
    - **定理**：等边对等角（若两边相等，则其所对角相等）。
    - **逆定理**：等角对等边（若两角相等，则其所对边相等）。

2.  **勾股定理**：
    - **定理**：直角三角形中，$a^2 + b^2 = c^2$。
    - **逆定理**：若三角形三边满足 $a^2 + b^2 = c^2$，则它是直角三角形。

3.  **平行线**：
    - **定理**：两直线平行，同位角相等。
    - **逆定理**：同位角相等，两直线平行。

---

## 动态实验：格点上的勾股定理与逆定理

**操作指南：**

1. **等比例显示**：现在的横纵坐标单位长度完全一致，直角就是标准的 $90^\circ$。
2. **自由构造**：随意移动 **A, B, C**，构造你想要的三角形。
3. **格点验证**：
    - 构造 $(3,4,5)$：$C(0,0), B(3,0), A(0,4)$。
    - 构造 $(\sqrt{5}, \sqrt{5}, \sqrt{10})$：$C(0,0), B(1,2), A(2,-1)$。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:600px; height:500px; margin: 20px auto; border: 2px solid #34495e; border-radius: 8px; background: #fff; touch-action: none;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    // 1. 初始化画布
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-5, 10, 10, -5], 
        axis: true, 
        grid: true,
        keepAspectRatio: true, // 核心修复：保持横纵坐标 1:1 比例
        showCopyright: false,
        pan: {enabled: true},
        zoom: {enabled: true}
    });

    // 2. 创建三个自由拖动的格点
    var pC = board.create('point', [0, 0], {name: 'C', color: '#e74c3c', size: 5, snapToGrid: true});
    var pB = board.create('point', [3, 0], {name: 'B', color: '#2c3e50', size: 5, snapToGrid: true});
    var pA = board.create('point', [0, 4], {name: 'A', color: '#2c3e50', size: 5, snapToGrid: true});

    // 3. 绘制三角形
    var poly = board.create('polygon', [pC, pB, pA], {
        fillColor: '#3498db', 
        fillOpacity: 0.1,
        strokeColor: '#2c3e50',
        strokeWidth: 2
    });

    // 4. 辅助函数：计算距离平方
    var getDistSq = function(p1, p2) {
        var d = p1.Dist(p2);
        return d * d;
    };

    // 5. 数据显示面板
    board.create('text', [-4.5, 9, function() {
        var aSq = getDistSq(pC, pB);
        var bSq = getDistSq(pC, pA);
        return 'a² + b² = ' + aSq.toFixed(0) + ' + ' + bSq.toFixed(0) + ' = ' + (aSq + bSq).toFixed(0);
    }], {fontSize: 15, fontWeight: 'bold', color: '#e67e22'});

    board.create('text', [-4.5, 8.2, function() {
        var cSq = getDistSq(pA, pB);
        return 'c² (斜边平方) = ' + cSq.toFixed(0);
    }], {fontSize: 15, fontWeight: 'bold', color: '#27ae60'});

    // 6. 角度显示逻辑：使用内角计算
    board.create('text', [-4.5, 7.2, function() {
        // 计算向量 CA 和 CB 的夹角
        var angleRad = JXG.Math.Geometry.rad(pA, pC, pB);
        var angleDeg = angleRad * 180 / Math.PI;
        // 确保显示的是三角形内部的小于 180 度的角
        if (angleDeg > 180) angleDeg = 360 - angleDeg;
        return '∠C = ' + angleDeg.toFixed(1) + '°';
    }], {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: function() {
            var angleRad = JXG.Math.Geometry.rad(pA, pC, pB);
            var deg = Math.abs(angleRad * 180 / Math.PI % 360);
            if (deg > 180) deg = 360 - deg;
            return (Math.abs(deg - 90) < 0.1) ? '#e74c3c' : '#2c3e50';
        }
    });

})();
</script>

---

## 证明逆命题的思维路径

当我们试图证明一个逆命题（使其成为逆定理）时，通常有以下思考方向：

1.  **直接证明法**：将原命题的结论作为已知条件，重新进行逻辑推导。
2.  **同一法 (Method of Identity)**：
    - 先假设满足条件的图形是唯一的。
    - 构造一个符合结论的图形。
    - 证明构造的图形与原图形重合。
3.  **反证法**：假设逆命题不成立，导出与原定理（已知为真）或公理矛盾的结果。

??? note "典型反例：全等三角形"
    - **原命题**：全等三角形的对应角相等。（真命题，定理）
    - **逆命题**：三个角对应相等的两个三角形全等。（**假命题**，这只能说明它们相似）
    - **结论**：并非所有几何定理都有逆定理。