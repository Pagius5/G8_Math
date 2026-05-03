# 分式方程 Rational Equations

### 关键词 Keywords

| 术语       | 英文                           | 含义                                    |
| :--------- | :----------------------------- | :-------------------------------------- |
| 分式方程   | Rational Equation              | 分母中含有未知数的方程                  |
| 最简公分母 | Least Common Denominator (LCD) | 各个分式分母的所有因式的最高次幂的积    |
| 增根       | Extraneous Root                | 使原方程分母为零的伪根                  |
| 去分母     | Clearing Denominators          | 方程两边同乘 LCD 以转化为整式方程的过程 |

---

## 分式方程的定义

!!! info "定义：分式方程"

    分母中含有未知数的方程叫做 **分式方程**。

    与整式方程（如一元一次方程）的区别在于：未知数的位置出现在了分母上。

---

## 分式方程的解法

解分式方程的核心思想是**转化**，即通过去分母将其转化为整式方程。

### 1. 去分母（乘最简公分母）

为了消除分母，我们需要在方程两边同时乘以所有分式分母的 **最小公分母 (LCD)**。

!!! theorem "操作步骤"

    1. **确定 LCD**：将各分母因式分解，找出它们的最小公分母。
    2. **两边同乘**：方程两边每一项（包括常数项）都乘以 LCD。
    
    $$\text{LCD} \cdot \left( \frac{P(x)}{Q(x)} \right) = \text{LCD} \cdot R(x)$$

    3. **解整式方程**：解得到的线性方程或二次方程。

---

## 检验与增根 (Extraneous Roots)

这是解分式方程中最关键的一步。由于我们在去分母时乘以了含有未知数的式子，可能会改变方程的取值范围。

!!! theorem "为什么会产生增根？"

    在方程两边同乘 LCD 时，我们默认 LCD 不为 0。但如果求出的根 $x = r$ 恰好使得 $\text{LCD} = 0$，那么：
    
    - 该根会使原方程中的分母无意义。
    - 该根即为**增根**。

!!! info "检验方法"

    求得整式方程的解后，必须进行检验。最简便的方法是：
    
    将求得的 $x$ 值代入 **最简公分母 (LCD)**：
    
    - 若 $\text{LCD} \neq 0$，则该解是原方程的根。
    - 若 $\text{LCD} = 0$，则该解是增根，必须舍去。

---

## 动态演示：解方程的过程

观察 $x$ 移动时，方程两边值的变化。当 $x$ 趋于某些值时，分式会趋于无穷大（渐近线）。

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

    // 演示方程: 1 / (x - 1) = 1
    // 左偏函数
    var f = board.create('functiongraph', [function(x){ 
        return 1 / (x - 1); 
    }], {strokeWidth: 3, strokeColor: '#e67e22'});

    // 右偏函数 (常数)
    var g = board.create('functiongraph', [function(x){ 
        return 1; 
    }], {strokeWidth: 2, strokeColor: '#27ae60', dash: 2});

    // 绘制垂直渐近线 x = 1 (这是潜在增根的位置)
    board.create('line', [[1, -5], [1, 5]], {dash: 1, strokeColor: 'gray', fixed: true});

    // 交点即为解
    var p = board.create('point', [2, 1], {name: 'Solution: x=2', color: '#2980b9', fixed: true});

})();
</script>

??? tip "常见错误提醒"

    - **漏乘常数项**：去分母时，方程右边的常数项也必须乘以 LCD。
    - **忘记检验**：这是最常见的扣分点！无论题目是否要求，解分式方程后必须显式写出“经检验...”。