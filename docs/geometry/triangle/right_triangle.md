# 直角三角形 Right Triangles

### 关键词 Keywords

| 术语           | 英文                                | 含义                                                 |
| :------------- | :---------------------------------- | :--------------------------------------------------- |
| 直角三角形     | Right Triangle                      | 有一个角是直角 ($90^\circ$) 的三角形                 |
| 勾股定理       | Pythagorean Theorem                 | 直角三角形两条直角边的平方和等于斜边的平方           |
| 斜边           | Hypotenuse                          | 直角三角形中最长的边，即直角所对的边                 |
| 勾股定理逆定理 | Converse of the Pythagorean Theorem | 若三边满足 $a^2 + b^2 = c^2$，则该三角形为直角三角形 |

---

## 直角三角形全等的判定 (HL Theorem)

除了通用的全等判定（SSS, SAS, ASA, AAS）外，直角三角形有一条特有的简便判定方法：

!!! theorem "斜边、直角边判定定理 (HL)"

    如果两个直角三角形的**斜边**和一条**直角边**分别相等，那么这两个直角三角形全等。
    
    - **前提**：必须先说明这两个三角形是直角三角形。
    - **符号语言**：在 $\text{Rt}\triangle ABC$ 和 $\text{Rt}\triangle A'B'C'$ 中，若 $AB = A'B'$，$AC = A'C'$，则 $\triangle ABC \cong \triangle A'B'C' \text{ (HL)}$。

---

## 直角三角形的性质

除了内角和为 $180^\circ$ 外，直角三角形还具有以下重要性质：

### 核心性质

1. **两锐角互余**：直角三角形的两个锐角之和等于 $90^\circ$。
2. **斜边中线性质**：直角三角形**斜边上的中线**等于斜边的一半。

### 重要推论

!!! info "推论 1：$30^\circ$ 角的特殊性"

    在直角三角形中，如果一个锐角等于 $30^\circ$，那么它所对的直角边等于斜边的一半。

$$a = \frac{1}{2}c \quad (\text{当 } \angle A = 30^\circ \text{ 时})$$

!!! info "推论 2：斜边一半的逆应用"

    在直角三角形中，如果一条直角边等于斜边的一半，那么这条直角边所对的角等于 $30^\circ$。

---

## 勾股定理 Pythagorean Theorem

这是几何学中最著名的定理之一，建立了边长之间的代数关系。

!!! theorem "勾股定理 (The Theorem)"

    如果直角三角形的两条直角边长分别为 $a$，$b$，斜边长为 $c$，那么：

    $$a^2 + b^2 = c^2$$

!!! theorem "勾股定理逆定理 (The Converse)"

    如果三角形的三边长 $a, b, c$ 满足 $a^2 + b^2 = c^2$，那么这个三角形是直角三角形，且边 $c$ 所对的角是直角。

---

## 动态演示：勾股定理的几何直观

拖动顶点 $A$ 或 $B$，观察直角三角形边长的平方（即以边长为边正方形的面积）如何始终满足 $a^2 + b^2 = c^2$。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:500px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-5, 8, 8, -5], 
        axis: true, 
        showCopyright: false
    });

    // 定义直角顶点 C (原点)，以及可拖动的 A, B
    var C = board.create('point', [0, 0], {name: 'C(直角)', fixed: true, color: 'black'});
    var A = board.create('point', [0, 4], {name: 'A', slideObject: board.defaultAxes.y});
    var B = board.create('point', [3, 0], {name: 'B', slideObject: board.defaultAxes.x});

    // 绘制三角形
    var tri = board.create('polygon', [C, B, A], {fillColor: '#3498db', fillOpacity: 0.2});

    // 绘制三个边上的正方形以展示 a^2 + b^2 = c^2
    var sq1 = board.create('regularpolygon', [B, C, 4], {fillColor: '#e74c3c', fillOpacity: 0.3});
    var sq2 = board.create('regularpolygon', [C, A, 4], {fillColor: '#2ecc71', fillOpacity: 0.3});
    var sq3 = board.create('regularpolygon', [A, B, 4], {fillColor: '#f1c40f', fillOpacity: 0.3});

    board.create('text', [1, 7, function() {
        var a = C.Dist(B);
        var b = C.Dist(A);
        var c = A.Dist(B);
        return 'a² + b² = ' + (a*a + b*b).toFixed(2) + ' | c² = ' + (c*c).toFixed(2);
    }], {fontSize: 16, fontWeight: 'bold'});
})();
</script>

---

## 两点间的距离公式 Distance Formula

勾股定理在解析几何中的直接应用就是计算坐标平面上两点间的距离。



!!! info "公式定义"

    已知坐标平面内两点 $P_1(x_1, y_1)$ 和 $P_2(x_2, y_2)$，则这两点间的距离 $d$ 为：

    $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**逻辑解释**：
公式内部的 $(x_2 - x_1)$ 和 $(y_2 - y_1)$ 分别代表以 $P_1P_2$ 为斜边的直角三角形的两条直角边长度。根据勾股定理，$d^2 = \text{宽}^2 + \text{高}^2$，开方后即得距离公式。

??? tip "AP Precalculus 预告"

    在未来的课程中，你会发现距离公式是定义**圆 (Circle)** 和 **圆锥曲线 (Conic Sections)** 的核心。此外，直角三角形的边角关系将演变为 **三角函数 (Trigonometry)**，这是研究周期性现象（如声波、光波）的数学基础。