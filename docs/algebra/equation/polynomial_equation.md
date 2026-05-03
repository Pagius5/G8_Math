# 多项式方程 Polynomial Equations

### 关键词 Keywords

| 术语       | 英文                | 含义                                         |
| :--------- | :------------------ | :------------------------------------------- |
| 多项式方程 | Polynomial Equation | 形如 $P(x) = 0$ 的方程，其中 $P(x)$ 为多项式 |
| 次数       | Degree              | 多项式中最高次项的次数，记作 $n$             |
| 换元法     | Substitution Method | 通过引入新变量将高次方程转化为低次方程的方法 |
| 因式分解   | Factorization       | 将多项式写成几个整式的积，从而实现降次       |

---

## 知识回顾：低次方程

在之前的章节中，我们已经深入掌握了 $n \le 2$ 的多项式方程：

### 1. 一次方程 (Linear Equation)

一般形式为：

$$ax + b = 0 \quad (a \neq 0)$$

其解为 $x = -\frac{b}{a}$，在坐标系中表现为直线与 $x$ 轴的交点。

### 2. 二次方程 (Quadratic Equation)

一般形式为：

$$ax^2 + bx + c = 0 \quad (a \neq 0)$$

我们通过**配方法**推导出了求根公式：

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

---

## 高次方程的化归思想

对于次数 $n > 2$ 的高次方程，核心解题思路是**降次 (Degree Reduction)**。

### 1. 换元法 (Substitution)

当方程呈现特定的结构时，我们可以通过换元将其转化为二次方程。例如处理**双二次方程**：

$$ax^4 + bx^2 + c = 0$$

!!! info "操作步骤"

    令 $t = x^2$（注意 $t \ge 0$），则原方程转化为：

    $$at^2 + bt + c = 0$$

    解出 $t$ 后再求 $x$。

### 2. 简单的因式分解法

利用提公因式、平方差、完全平方或十字相乘法，将高次式化为多个低次式的积。

!!! theorem "性质：零积定理"

    若有方程：

    $$(x - r_1)(x - r_2)\dots(x - r_n) = 0$$

    则其根为：

    $$x_1 = r_1, x_2 = r_2, \dots, x_n = r_n$$

---

## 展望未来：更高阶的挑战

在本阶段，我们仅处理能够通过简单手段降次的方程。更深层次的内容将在后续课程中探讨：

??? tip "AP Precalculus 预告"

    - **多项式长除法 (Polynomial Division)**：用于分解复杂的因式。
    - **有理根定理 (Rational Root Theorem)**：通过系数预测可能的有理根。
    - **复数根 (Complex Roots)**：当判别式 $\Delta < 0$ 时方程的解。

??? tip "高等数学 (University Level)"

    - **多项式理论**：探究根的存在性与分布。
    - **伽罗瓦理论 (Galois Theory)**：该理论证明了 $n \ge 5$ 的一般多项式方程不存在通用的代数求根公式。这是数学史上的巅峰之一，留待你在大学里揭开它的面纱。

---

## 动态演示：函数图像的零点

通过滑动系数，观察三次函数 $f(x) = x^3 + ax$ 的根如何随系数变化。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-5, 10, 5, -10], 
        axis: true, 
        showCopyright: false
    });

    var a = board.create('slider', [[-4, 8], [-1, 8], [-10, 0, 10]], {name: 'a'});

    // 绘制 f(x) = x^3 + ax
    var f = board.create('functiongraph', [function(x){ 
        return x*x*x + a.Value()*x; 
    }], {strokeWidth: 3, strokeColor: '#9b59b6'});

    // 标记原点根
    board.create('point', [0, 0], {fixed: true, name: 'Root: 0', color: '#8e44ad'});

})();
</script>