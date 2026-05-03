# 无理方程 Irrational Equations

### 关键词 Keywords

| 术语     | 英文                        | 含义                                       |
| :------- | :-------------------------- | :----------------------------------------- |
| 无理方程 | Irrational Equation         | 根号下含有未知数的方程（也称根式方程）     |
| 乘方脱根 | Squaring to Remove Radicals | 通过对等式两边进行乘方运算来消除根号的方法 |
| 增根     | Extraneous Root             | 乘方过程中因值域扩大而产生的非原方程解的根 |
| 椭圆     | Ellipse                     | 到两个定点距离之和为常数的点的轨迹         |

---

## 无理方程的定义

!!! info "定义：无理方程"

    方程中含有根式，且**被开方数中含有未知数**的方程叫做无理方程。

    例如：$\sqrt{x + 1} = 3$ 是无理方程，而 $x + \sqrt{2} = 5$ 是一元一次方程。

---

## 无理方程的解法

解无理方程的基本思路是：通过**乘方 (Squaring)** 去掉根号，将其转化为整式方程。

### 1. 平方一次的情况

适用于方程中只有一个项含有根号。

!!! theorem "解题步骤"

    1. **分离根式**：将含有根号的项单独留在等式的一边。  
    2. **两边平方**：消除根号。  
        
        $$(\sqrt{A})^2 = B^2 \Rightarrow A = B^2$$ 
         
    3. **解整式方程**。  
    4. **验根（必须！）**。

### 2. 平方两次的情况

当方程中含有两个或两个以上独立的根式项时，通常需要进行两次平方。

!!! theorem "操作逻辑"

    1. 将根式项移至等号两边。
    2. 第一次平方：消除部分根号，但通常仍会保留一个项含有根号。
    
    $$\sqrt{A} + \sqrt{B} = C \Rightarrow (\sqrt{A})^2 = (C - \sqrt{B})^2$$

    3. 再次分离剩余的根式，进行第二次平方。

---

## 检验与增根

!!! theorem "增根产生的原因"

    由于我们使用了乘方运算（如 $a = b \Rightarrow a^2 = b^2$），原本不成立的式子（如 $2 = -2$）在平方后会变得成立（$4 = 4$）。

    - 该过程扩大了方程的取值范围。
    - **所有无理方程在解完后必须代入原方程验根**。

---

## 扩展：从两次平方到椭圆 (Ellipse)

在平方两次的无理方程中，有一种非常经典的结构：

$$\sqrt{(x-c)^2 + y^2} + \sqrt{(x+c)^2 + y^2} = 2a \quad (a > c > 0)$$

!!! info "数学意义"

    这个方程在坐标平面上描述了：到两定点 $F_1(-c, 0)$ 和 $F_2(c, 0)$ 的距离之和等于常数 $2a$ 的点的轨迹。

    - 这正是**椭圆**的定义。
    - 经过两次平方并化简，我们可以得到椭圆的标准方程：
    
    $$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad (\text{其中 } b^2 = a^2 - c^2)$$

??? tip "AP Precalculus 预告"

    在未来的圆锥曲线（Conic Sections）章节中，你会深入研究这一方程。通过无理方程的化简，你会发现代数式的对称美与几何图形的完美结合。

---

## 动态演示：根式方程的图像解法

方程 $\sqrt{x} = a$ 的解可以看作函数 $y = \sqrt{x}$ 与直线 $y = a$ 的交点。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:300px; margin: 20px auto; border-radius: 8px;"></div>
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
    board.create('functiongraph', [function(x){ return Math.sqrt(x); }], {strokeWidth: 3, strokeColor: '#3498db'});

    // 绘制 y = a (可移动的水平线)
    var s = board.create('slider', [[1, 4], [4, 4], [0, 2, 4]], {name: 'a'});
    board.create('line', [[0, function(){return s.Value();}], [1, function(){return s.Value();}]], {strokeColor: '#e74c3c', dash: 2});

    // 交点
    board.create('point', [function(){return s.Value()*s.Value();}, function(){return s.Value();}], {
        name: 'Solution', 
        color: '#e74c3c',
        label: {offset: [10, 10]}
    });
})();
</script>