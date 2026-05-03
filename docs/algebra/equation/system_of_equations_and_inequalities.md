# 方程组与不等式组 Systems of Equations and Inequalities

### 关键词 Keywords

| 术语           | 英文                               | 含义                                       |
| :------------- | :--------------------------------- | :----------------------------------------- |
| 方程组         | System of Equations                | 由两个或多个包含相同变量的方程组成的集合   |
| 图像法         | Solving by Graphing                | 通过寻找函数图像交点来确定方程组解的方法   |
| 二元一次不等式 | Linear Inequality in Two Variables | 含有两个未知数且未知数次数为 1 的不等式    |
| 可行域         | Feasible Region                    | 满足所有不等式条件的点在坐标系中形成的区域 |

---

## 方程组 System of Equations

方程组的解（Solution）是使组内所有方程同时成立的变量取值。

### 图像法解方程组 Solving by Graphing

两个方程组成的方程组的解，本质上是这两个方程在平面直角坐标系中对应图像的**交点 (Intersection)**。

!!! info "转化思想"

    不仅是二元一次方程组，很多一元方程也可以转化为两个函数的交点问题。
    
    例如解 $x^2 = x + 2$，可以转化为求以下两个图像的交点：
    
    - $y = x^2$
    - $y = x + 2$

<div id="jxgbox1" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox1', {
        boundingbox: [-5, 7, 5, -3], 
        axis: true, 
        showCopyright: false
    });

    var f = board.create('functiongraph', [function(x){ return x*x; }], {strokeWidth: 3, strokeColor: '#3498db', name: 'y=x^2', withLabel: true});
    var g = board.create('functiongraph', [function(x){ return x + 2; }], {strokeWidth: 3, strokeColor: '#e67e22', name: 'y=x+2', withLabel: true});

    // 标记交点
    board.create('point', [-1, 1], {name: '(-1, 1)', color: '#2c3e50', fixed: true});
    board.create('point', [2, 4], {name: '(2, 4)', color: '#2c3e50', fixed: true});
})();
</script>

---

## 二元一次不等式 Linear Inequalities

二元一次不等式的解集不再是具体的点，而是坐标平面上的一个**半平面 (Half-plane)**。

!!! theorem "边界线原则"

    1. **绘制边界**：将不等号改为等号，画出直线 $ax + by + c = 0$。
    
        - **实线**：包含边界（$\le$ 或 $\ge$）。
        - **虚线**：不包含边界（$<$ 或 $>$）。
        
    2. **判定区域**：任取一点（通常取原点 $(0,0)$）代入。
    
        - 若成立，则该点所在侧为解集区域。
        - 若不成立，则另一侧为解集区域。

---

## 不等式组与可行域 Systems of Linear Inequalities

不等式组的解集是各个不等式解集的**公共部分**。

!!! info "可行域 (Feasible Region)"

    在坐标系中，满足不等式组所有条件的区域称为可行域。这是未来在高中阶段学习“线性规划 (Linear Programming)”的核心基础。

<div id="jxgbox2" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox2', {
        boundingbox: [-1, 6, 6, -1], 
        axis: true, 
        showCopyright: false
    });

    // 定义不等式: y <= x + 1 和 y <= -x + 5 和 y >= 1
    var f1 = function(x) { return x + 1; };
    var f2 = function(x) { return -x + 5; };
    var f3 = function(x) { return 1; };

    // 绘制边界线
    var l1 = board.create('line', [[0, 1], [1, 2]], {strokeColor: '#34495e', dash: 2});
    var l2 = board.create('line', [[0, 5], [5, 0]], {strokeColor: '#34495e', dash: 2});
    var l3 = board.create('line', [[0, 1], [5, 1]], {strokeColor: '#34495e', dash: 2});

    // 绘制公共区域 (Inequality shading)
    // 寻找顶点
    var p1 = board.create('point', [0, 1], {visible: false});
    var p2 = board.create('point', [2, 3], {visible: false});
    var p3 = board.create('point', [4, 1], {visible: false});

    board.create('polygon', [p1, p2, p3], {
        fillColor: '#27ae60', 
        fillOpacity: 0.3, 
        strokeColor: 'none',
        name: 'Feasible Region',
        withLabel: true
    });
})();
</script>

??? tip "拓展：从解组到矩阵"

    在更高阶的数学（如 AP Precalculus 或 Linear Algebra）中，我们会使用**矩阵 (Matrix)** 和 **行变换 (Row Reduction)** 来高效处理包含数十个变量的方程组。
    
    掌握图像法的直观理解，能帮助你更好地想象这些抽象运算背后的几何意义。