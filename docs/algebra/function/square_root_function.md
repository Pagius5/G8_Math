# 平方根函数 Square Root Function

### 关键词 Keywords

| 术语       | 英文                 | 含义                         |
| :--------- | :------------------- | :--------------------------- |
| 平方根函数 | Square Root Function | 形如 $y = \sqrt{x}$ 的函数   |
| 定义域     | Domain               | 自变量 $x$ 的取值范围        |
| 值域       | Range                | 因变量 $y$ 的取值范围        |
| 幂函数     | Power Function       | 形如 $y = x^{\alpha}$ 的函数 |

---

## 平方根函数的定义

!!! info "定义：平方根函数"

    一般地，形如 $y = \sqrt{x}$ 的函数叫做 **平方根函数**。

    根据二次根式的性质，我们可以得出其基本约束：

    - **定义域 (Domain)**：$[0, +\infty)$，即 $x \ge 0$。
    - **值域 (Range)**：$[0, +\infty)$，即 $y \ge 0$。

---

## 图像与性质

平方根函数的图像是半支开口向右的抛物线。

!!! theorem "核心性质"

    1. **单调性**：在定义域 $[0, +\infty)$ 内，函数随 $x$ 的增大而增大，是一个**增函数**。
    
    2. **特殊点**：图像必经过原点 $(0, 0)$ 和点 $(1, 1)$。
    
    3. **凹凸性**：随着 $x$ 的增大，图像上升的速度越来越慢（斜率减小）。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-1, 5, 10, -1], 
        axis: true, 
        showCopyright: false
    });

    // 绘制 y = sqrt(x)
    var f = board.create('functiongraph', [function(x){ 
        return Math.sqrt(x); 
    }, 0, 10], {strokeWidth: 4, strokeColor: '#3498db', name: 'y=√x', withLabel: true});

    // 绘制滑块点验证坐标
    var p = board.create('glider', [4, 2, f], {name: 'P', color: '#e74c3c'});
    
    board.create('text', [1, 4, function() {
        return 'P(' + p.X().toFixed(2) + ', ' + p.Y().toFixed(2) + ')';
    }], {fontSize: 16, color: '#2c3e50'});
})();
</script>

---

## 引出：幂函数 Power Functions

平方根函数实际上是更广泛的一类函数——**幂函数**的一个特例。

!!! info "从根号到指数"

    在之前的课程中，我们学习过根式可以转化为分数指数：
    
    $$\sqrt{x} = x^{\frac{1}{2}}$$

    因此，平方根函数可以统一写为：
    
    $$y = x^{\alpha} \quad (\text{此处 } \alpha = 0.5)$$

### 幂函数的一般形式

!!! theorem "定义：幂函数"

    一般地，形如 **$y = x^{\alpha}$** ($\alpha$ 为常数) 的函数称为幂函数。

    - 当 $\alpha = 2$ 时，$y = x^2$ 是二次函数。
    - 当 $\alpha = 1$ 时，$y = x$ 是正比例函数。
    - 当 $\alpha = \frac{1}{2}$ 时，$y = x^{1/2}$ 即为平方根函数。
    - 当 $\alpha = -1$ 时，$y = x^{-1} = \frac{1}{x}$ 是反比例函数。

---

## 动态演示：幂系数 $\alpha$ 的影响

尝试拖动滑动条，观察当指数 $\alpha$ 变化时，函数图像如何在各种形态之间转换。

<div id="jxgbox_alpha" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox_alpha', {
        boundingbox: [-1, 5, 5, -1], 
        axis: true, 
        showCopyright: false
    });

    var a = board.create('slider', [[1, 4], [3, 4], [-2, 0.5, 3]], {name: 'α'});

    board.create('functiongraph', [function(x){ 
        return Math.pow(x, a.Value()); 
    }, 0.01, 10], {strokeWidth: 3, strokeColor: '#9b59b6'});

    board.create('text', [0.5, 3, function() {
        return 'y = x^{' + a.Value().toFixed(2) + '}';
    }], {fontSize: 18, color: '#8e44ad', fontWeight: 'bold'});
})();
</script>

??? tip "AP Precalculus 预告"

    在 AP 预备微积分中，你将系统研究幂函数的全家族，包括它们的渐近线 (Asymptotes)、对称性 (Symmetry) 以及当指数为无理数时的复杂情况。理解平方根函数是进入这个家族的第一步。