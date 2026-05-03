# 二次根式 Radical Expressions

### 关键词 Keywords

| 术语         | 英文                          | 含义                                                        |
| :----------- | :---------------------------- | :---------------------------------------------------------- |
| 二次根式     | Radical Expression            | 形如 $\sqrt{a}$ ($a \ge 0$) 的代数式                        |
| 被开方数     | Radicand                      | 根号内部的数或式子 $a$                                      |
| 分母有理化   | Rationalizing the Denominator | 通过运算消除分母中的根号                                    |
| 有理化因式   | Rationalizing Factor          | 与原式相乘能消除根号的非零代数式                            |
| 共轭式       | Conjugate Expression          | 两个项中间符号相反的根式对，如 $\sqrt{a}+b$ 与 $\sqrt{a}-b$ |
| 最简二次根式 | Simplest Radical Form         | 满足不含分母、不含开方项等条件的根式                        |
| 同类二次根式 | Like Radicals                 | 化简后被开方数相同的二次根式                                |

---

## 二次根式的定义

!!! info "定义：二次根式"
    一般地，我们把形如 $\sqrt{a}$ ($a \ge 0$) 的式子叫做 **二次根式**。
    
    - **核心前提**：被开方数必须是非负数，即 $a \ge 0$。

---

## 二次根式的核心性质

这是本章最重要的部分，请务必注意符号讨论。

!!! theorem "性质 1：双重非负性"
    1. **被开方数非负**：$a \ge 0$。
    2. **根式值非负**：$\sqrt{a} \ge 0$。
    - 公式：$(\sqrt{a})^2 = a$ ($a \ge 0$)。

!!! theorem "性质 2：平方的根（绝对值陷阱！）"
    $$\sqrt{a^2} = |a| = \begin{cases} a & (a > 0) \\ 0 & (a = 0) \\ -a & (a < 0) \end{cases}$$

    **注意**：$\sqrt{a^2}$ 的结果绝不可能是负数。如果你不确定 $a$ 的正负，必须加**绝对值**。

!!! theorem "性质 3：积与商的性质（含逆用）"
    1. **积的算术平方根**：$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b}$ ($a \ge 0, b \ge 0$)。
    2. **商的算术平方根**：$\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$ ($a \ge 0, b > 0$)。
    - **重点：公式逆用** $\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$ 可以用来进行根式的乘法运算。

---

## 分母有理化 Rationalization

为了将根式化为“最简”，我们需要先学会消除分母底部的根号。

### 1. 单项分母
分子分母同乘分母本身：

$$\frac{1}{\sqrt{a}} = \frac{1 \cdot \sqrt{a}}{\sqrt{a} \cdot \sqrt{a}} = \frac{\sqrt{a}}{a}$$

### 2. 多项分母（利用平方差公式）
利用 $(a+b)(a-b) = a^2 - b^2$：

$$\frac{1}{\sqrt{a} + \sqrt{b}} = \frac{\sqrt{a} - \sqrt{b}}{(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b})} = \frac{\sqrt{a} - \sqrt{b}}{a - b}$$

!!! theorem "共轭式 (Conjugate Expression)"
    对于式子 $\sqrt{a} + \sqrt{b}$，它的共轭式是 $\sqrt{a} - \sqrt{b}$。它们互为有理化因式。

| 原式                    | 有理化因式              | 积 (Result)   |
| :---------------------- | :---------------------- | :------------ |
| $\sqrt{a}$              | $\sqrt{a}$              | $a$           |
| $\sqrt{a} + b$          | $\sqrt{a} - b$          | $a - b^2$     |
| $a\sqrt{b} + c\sqrt{d}$ | $a\sqrt{b} - c\sqrt{d}$ | $a^2b - c^2d$ |

---

## 最简二次根式与同类二次根式

!!! info "定义：最简二次根式"
    必须同时满足以下两个条件：
    
    1. **被开方数不含分母或者分母中不含根号**（通过分母有理化解决）。
    2. **被开方数不含能开得尽方的因数或因式**（如 $\sqrt{8} = 2\sqrt{2}$）。

!!! info "定义：同类二次根式"
    几个二次根式化成**最简二次根式**后，如果**被开方数相同**，则称它们为同类二次根式。
    
    - *注：只有同类二次根式才能进行加减合并。*

---

## 二次根式的运算

### 1. 乘除法
- $\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$
- $\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}$

### 2. 加减法
步骤：先化简，再合并（类似整式加减中的“合并同类项”）。

### 3. 混合运算
乘法分配律、平方差公式、完全平方公式在二次根式中依然适用。

---

## 动态演示：$y = \sqrt{x^2}$ 与 $y = |x|$

通过下方图像你可以发现，两个函数完全重合，验证了 $\sqrt{a^2} = |a|$。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-5, 5, 5, -1], 
        axis: true, 
        showCopyright: false
    });

    // 绘制 y = sqrt(x^2)
    var f = board.create('functiongraph', [function(x){ return Math.sqrt(x*x); }], {
        strokeColor: '#3498db', 
        strokeWidth: 4,
        name: 'y = sqrt(x^2)',
        withLabel: true
    });

    // 绘制可移动的点在函数上
    var p = board.create('glider', [2, 2, f], {name: 'A', color: '#e74c3c'});
    
    // 显示坐标值以验证非负性
    board.create('text', [0.5, 4, function() {
        return '当 x = ' + p.X().toFixed(2) + ' 时, sqrt(x^2) = ' + p.Y().toFixed(2);
    }], {fontSize: 14, color: '#2c3e50'});

})();
</script>

??? tip "拓展：从二次根式到分数指数幂"
    在更高阶的数学（AP Calculus）中，我们通常将根号写成指数形式：
    $$\sqrt[n]{a^m} = a^{\frac{m}{n}}$$
    因此 $\sqrt{x} = x^{1/2}$。这会让你在求导时觉得异常简单！