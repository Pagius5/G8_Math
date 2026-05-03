# 实数 Real Numbers

### 关键词 Keywords

| 术语     | 英文              | 含义                                                   |
| :------- | :---------------- | :----------------------------------------------------- |
| 有理数   | Rational Number   | 可以表示为两个整数之比 $\frac{p}{q}$ ($q \neq 0$) 的数 |
| 无理数   | Irrational Number | 无限不循环小数，不能表示为分数形式                     |
| 实数     | Real Number       | 有理数与无理数的总称                                   |
| 数轴     | Number Line       | 规定了原点、正方向和单位长度的直线                     |
| 希帕索斯 | Hippasus          | 发现 $\sqrt{2}$ 并引发第一次数学危机的古希腊学者       |

---

## 第一次数学危机：$\sqrt{2}$ 的发现

在古希腊毕达哥拉斯学派（Pythagoreans）的认知中，“万物皆数”，即宇宙间的一切都可以用整数或整数之比来表示。然而，学派成员**希帕索斯（Hippasus）**发现：在一个边长为 1 的正方形中，其对角线的长度（即 $\sqrt{2}$）无法用任何整数比来衡量。

这一发现直接冲击了当时的数学信仰，导致了**第一次数学危机**。

---

## 证明：$\sqrt{2}$ 不是有理数 

我们使用**反证法 (Proof by Contradiction)** 来证明这一结论：

!!! theorem "证明过程"
    1. **假设 $\sqrt{2}$ 是有理数**：则它可以表示为最简分数 $\sqrt{2} = \frac{p}{q}$（$p, q$ 为互质的整数，$q \neq 0$）。
    2. **两边平方**：得到 $2 = \frac{p^2}{q^2}$，即 $p^2 = 2q^2$。
    3. **推导 $p$ 为偶数**：既然 $p^2$ 是 2 的倍数，那么 $p$ 必然也是偶数。令 $p = 2k$。
    4. **代入原式**：$(2k)^2 = 2q^2 \Rightarrow 4k^2 = 2q^2 \Rightarrow q^2 = 2k^2$。
    5. **推导 $q$ 为偶数**：同理可知 $q$ 也是偶数。
    6. **得出矛盾**：既然 $p$ 和 $q$ 都是偶数，它们就有公约数 2，这与假设中“$p, q$ 互质”相矛盾。
    7. **结论**：假设不成立，$\sqrt{2}$ 不是有理数，它是**无理数**。

---

## 实数的定义与分类

随着无理数的引入，数的家庭扩展到了实数范围。

!!! info "定义：实数 (Real Number)"
    **有理数**和**无理数**统称为 **实数**。

### 实数的分类
1. **按定义分类**：
    * **有理数**：包括整数、有限小数、循环小数。
    * **无理数**：包括无限不循环小数（如 $\pi, \sqrt{2}, 0.1010010001\dots$）。
2. **按正负分类**：
    * 正实数、零、负实数。

---

## 实数的意义：数轴上的连续性

实数的引入填补了有理数在数轴上的“缝隙”。

!!! theorem "性质：一一对应关系"
    **实数与数轴上的点是一一对应的（One-to-one Correspondence）。**
    - 每一个实数都可以用数轴上的一个点来表示。
    - 数轴上的每一个点都表示一个唯一的实数。

通过几何作图，我们可以清晰地在数轴上定位无理数：

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
<script type="text/javascript" charset="UTF-8" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:300px; margin: 20px auto; border-radius: 8px;"></div>

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-0.5, 1.5, 2.5, -0.5], 
        axis: true, 
        showCopyright: false,
        pan: {enabled: false},
        zoom: {enabled: false}
    });
    
    // 1. 定义点
    var O = board.create('point', [0, 0], {fixed: true, name: 'O', size: 3, color: 'black'});
    var A = board.create('point', [1, 0], {fixed: true, name: '1', size: 3, color: 'black'});
    var B = board.create('point', [1, 1], {fixed: true, name: '', size: 0});
    var C = board.create('point', [0, 1], {fixed: true, name: '', size: 0});
    
    // 2. 绘制正方形
    board.create('polygon', [O, A, B, C], {
        fillColor: '#3498db', 
        fillOpacity: 0.2, 
        strokeColor: '#2980b9'
    });
    
    // 3. 绘制对角线
    var diag = board.create('segment', [O, B], {dash: 2, strokeColor: '#e67e22', strokeWidth: 2});
    
    // 4. 绘制圆弧（将对角线长度投影到数轴）
    var arc = board.create('arc', [O, B, [1.6, 0]], {
        strokeColor: '#e74c3c', 
        dash: 2, 
        lastArrow: true,
        selection: 'minor'
    });
    
    // 5. 标注 √2
    board.create('point', [Math.sqrt(2), 0], {
        name: '√2', 
        color: '#e74c3c', 
        fixed: true,
        size: 4,
        label: {offset: [0, 15], color: '#e74c3c', fontWeight: 'bold'}
    });
})();
</script>