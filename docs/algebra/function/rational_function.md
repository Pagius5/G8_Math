# 有理函数

## 关键词

| 术语       | 英文                      | 含义                                                                           |
| :--------- | :------------------------ | :----------------------------------------------------------------------------- |
| 有理函数   | Rational Function         | 形如 $f(x) = \frac{P(x)}{Q(x)}$ 的函数，其中 $P, Q$ 是多项式，且 $Q(x) \neq 0$ |
| 间断点     | Discontinuity             | 函数定义域中的“断裂”点，通常由分母为零引起                                     |
| 垂直渐近线 | Vertical Asymptote (VA)   | 图像无限趋近但永不触及的垂直直线，对应分母的不可去零点                         |
| 可去间断点 | Removable Discontinuity   | 图像上的“空心点”，由分子分母公共因式约分产生                                   |
| 水平渐近线 | Horizontal Asymptote (HA) | 描述 $x \to \pm\infty$ 时图像行为的水平直线                                    |
| 斜渐近线   | Slant/Oblique Asymptote   | 当分子次数比分母次数恰好大 1 时，图像无限趋近的倾斜直线                        |

## 定义与定义域分析

!!! info "定义：有理函数"
    一般地，形如 $f(x) = \frac{P(x)}{Q(x)}$ 的函数叫做**有理函数**，其中 $P(x)$ 和 $Q(x)$ 都是关于 $x$ 的多项式，且 $Q(x)$ 不是零多项式。

    **定义域限制：**
    有理函数的定义域是使分母 **$Q(x) \neq 0$** 的所有实数集合。在分母的零点处，图像会出现间断。

### 关键：区分空心点 (Hole) 与垂直渐近线 (VA)

分析间断点性质的第一步是**因式分解并约分**。

<script src="/javascripts/math_graph.js"></script>

<div id="box_rational_discontinuity" style="width:100%; height:400px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 20px;"></div>

<script>
    renderMathGraph('box_rational_discontinuity', {
        functions: ['1/x', '(x^2-1)/(x-1)'],
        
        onInit: function(board) {
            // f(x) = 1/x (纯垂直渐近线)
            board.create('text', [1.5, 3, "f(x) = 1/x (VA at x=0)"], {fontSize: 14, strokeColor: '#1f77b4'});
            
            // g(x) = (x^2-1)/(x-1) (含空心点)
            board.create('text', [-3, 2, "g(x) = (x^2-1)/(x-1)"], {fontSize: 14, strokeColor: '#ff7f0e'});
            board.create('text', [-3, 1.5, "= x+1, x≠1"], {fontSize: 12, strokeColor: '#ff7f0e'});
            
            // 标记 g(x) 的空心点
            board.create('point', [1, 2], {name: 'Hole (1,2)', color: '#ff7f0e', face: 'o', size: 5, fixed: true});
        }
    });
</script>

!!! theorem "对比：约分带来的几何差异"
    设 $f(x) = \frac{P(x)}{Q(x)}$。若 $x = a$ 是分母的零点（$Q(a) = 0$）：

    1.  **垂直渐近线 (VA)：** 若约分后，$x-a$ 仍留在分母中，则 $x=a$ 是垂直渐近线。
        > *例如图中的蓝色曲线 $f(x)=\frac{1}{x}$，在 $x=0$ 处无限分支。*

    2.  **空心点 (Hole)：** 若分子也有因式 $x-a$，且能被完全约去，则 $(a, \text{约分后的函数值})$ 是图像上的一个空心点（可去间断点）。
        > *例如图中的橙色直线 $g(x)=\frac{x^2-1}{x-1} = \frac{(x-1)(x+1)}{x-1} = x+1 (x \neq 1)$，它在几何上表现为在点 $(1,2)$ 处有一个断裂。*

## 水平与斜渐近线 (无穷远行为)

水平或斜渐近线描述了当 $x$ 变得非常大（$\to +\infty$）或非常小（$\to -\infty$）时，函数值的变化趋势。这完全取决于分子多项式 $P(x)$ 与分母多项式 $Q(x)$ 的**次数 (Degree)**。

<div id="box_rational_deg_less" style="width:100%; height:300px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 20px;"></div>
<script>
    renderMathGraph('box_rational_deg_less', {
        functions: ['1/(x^2+1)'],
        x_min: -8, x_max: 8, y_min: -1, y_max: 2,
        onInit: function(board) {
            board.create('text', [0.5, 0.6, "h(x)=1/(x²+1)"], {fontSize: 14, strokeColor: '#1f77b4'});
            board.create('text', [2, 0.2, "HA: y=0"], {fontSize: 12, strokeColor: '#1f77b4'});
        }
    });
</script>

<div id="box_rational_deg_equal" style="width:100%; height:300px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 20px;"></div>
<script>
    renderMathGraph('box_rational_deg_equal', {
        functions: ['(2*x)/(x+1)'],
        x_min: -8, x_max: 8, y_min: -4, y_max: 6,
        onInit: function(board) {
            board.create('text', [-7, 3.5, "i(x)=2x/(x+1)"], {fontSize: 14, strokeColor: '#ff7f0e'});
            board.create('text', [-7, 2.3, "HA: y=2"], {fontSize: 12, strokeColor: '#ff7f0e'});
            board.create('segment', [[-8, 2], [8, 2]], {dash: 1, color: '#ff7f0e', fixed: true});
        }
    });
</script>

<div id="box_rational_deg_more" style="width:100%; height:300px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 20px;"></div>
<script>
    renderMathGraph('box_rational_deg_more', {
        functions: ['(x^2+1)/(x)'],
        x_min: -8, x_max: 8, y_min: -8, y_max: 8,
        onInit: function(board) {
            board.create('text', [3, 5, "j(x)=(x²+1)/x"], {fontSize: 14, strokeColor: '#2ca02c'});
            board.create('text', [3, 3.5, "Slant: y=x"], {fontSize: 12, strokeColor: '#2ca02c'});
            board.create('segment', [[-8, -8], [8, 8]], {dash: 1, color: '#2ca02c', fixed: true});
        }
    });
</script>

!!! theorem "性质：次数对非垂直渐近线的影响"
    设 $n = \text{deg}(P)$（分子次数），$m = \text{deg}(Q)$（分母次数）：

    | 条件        | 渐近线类型     | 代数表达式                                            | 几何表现 (如图)                                                      |
    | :---------- | :------------- | :---------------------------------------------------- | :------------------------------------------------------------------- |
    | $n < m$     | **水平 (HA)**  | $y = 0$ ($x$轴)                                       | **蓝色曲线**：图像在无穷远趋近 $x$轴。                               |
    | $n = m$     | **水平 (HA)**  | $y = \frac{\text{分子首项系数}}{\text{分母首项系数}}$ | **橙色曲线**：$i(x)=\frac{2x}{x+1}$，趋向 $y=\frac{2}{1}=2$。        |
    | $n = m + 1$ | **斜 (Slant)** | $y = \text{长除法的商}$                               | **绿色曲线**：$j(x)=\frac{x^2+1}{x} = x + \frac{1}{x}$，趋向 $y=x$。 |

## 分析有理函数的步骤

掌握有理函数，本质上是掌握一套系统分析流程：

1.  **因子化**：将分子分母完全因式分解。
2.  **找截距**：
    * $y$-截距：计算 $f(0)$。
    * $x$-截距：令**分子为 0**，求解 $x$（注意该 $x$ 需在定义域内）。
3.  **找渐近线**：
    * 通过分母的零点找 **Holes**（约去的）和 **VA**（剩下的）。
    * 通过次数比较找 **HA** 或 **Slant Asymptote**。
4.  **符号分析 (Sign Chart)**：利用 $x$-截距和垂直渐近线将数轴分段，测试每一段内函数的正负号，从而确定图像在哪个象限移动。

??? tip "拓展：从部分分式分解 (Partial Fraction Decomposition) 到积分"
    在没有计算机绘图的时代，我们必须通过上述复杂的步骤手工画出草图。在高等数学（如 AP Calculus BC）中，我们通常需要反过来——把一个复杂的有理函数“拆解”成几个简单分式的和：
    
    例如：$f(x) = \frac{1}{(x-1)(x+1)}$
    
    通过一定的方法（如待定系数法），我们可以得到：
    $$f(x) = \frac{1}{2(x-1)} - \frac{1}{2(x+1)}$$
    
    这种拆解是微积分中计算有理函数积分（Integration of Rational Functions）的关键技术，它让我们能将一个无法直接积分的复杂问题，转化为我们熟悉的对数形式（$\int \frac{1}{u}du = \ln|u|$）进行求解。