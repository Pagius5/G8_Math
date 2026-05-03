# 一元二次方程 Quadratic Equations in One Variable

### 关键词 Keywords

| 术语         | 英文                   | 含义                                                |
| :----------- | :--------------------- | :-------------------------------------------------- |
| 一元二次方程 | Quadratic Equation     | 只含有一个未知数，且未知数的最高次数为 2 的整式方程 |
| 项与系数     | Terms and Coefficients | 包括二次项 ($ax^2$)、一次项 ($bx$) 和常数项 ($c$)   |
| 配方法       | Completing the Square  | 通过配成完全平方式来解方程的方法                    |
| 求根公式     | Quadratic Formula      | 一元二次方程的万能通解公式                          |
| 判别式       | Discriminant           | $\Delta = b^2 - 4ac$，用于判定根的情况              |
| 韦达定理     | Vieta's Formulas       | 描述根与系数之间关系的定理                          |

---

## 一元二次方程的定义

!!! info "定义：一元二次方程"
    等号两边都是整式，只含有一个未知数，并且未知数的最高次数是 2 的方程。其一般形式为：
    
    $$ax^2 + bx + c = 0 \quad (a \neq 0)$$

    **注意**：必须满足 $a \neq 0$ 这一前提条件。

---

## 一元二次方程的解法

根据方程的具体特征，选择最简便的方法：

### 1. 直接开方法 (Direct Extraction)
适用于形如 $x^2 = a$ 或 $(mx+n)^2 = a$ ($a \ge 0$) 的方程。

### 2. 因式分解法 (Factoring)
将方程化为 $(x - x_1)(x - x_2) = 0$ 的形式，从而得到 $x_1$ 或 $x_2$。常用的有提公因式、十字相乘法。

### 3. 配方法 (Completing the Square)
!!! theorem "配方法步骤"
    1. **化 1**：二次项系数化为 1。
    2. **移项**：常数项移到等号右边。
    3. **配方**：两边同时加上一次项系数一半的平方，凑成完全平方式。

### 4. 求根公式 (Quadratic Formula)
!!! theorem "万能公式"
    对于 $ax^2 + bx + c = 0 \quad (a \neq 0)$，当 $\Delta \ge 0$ 时：
    
    $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

---

## 根的判别式 Discriminant

!!! info "判别式 $\Delta = b^2 - 4ac$"
    
    - **$\Delta > 0$**：方程有两个不相等的实数根。
    - **$\Delta = 0$**：方程有两个相等的实数根（即一个重根）。
    - **$\Delta < 0$**：方程没有实数根。

---

## 韦达定理 Vieta's Formulas

!!! theorem "根与系数的关系"
    若一元二次方程 $ax^2 + bx + c = 0$ 的两个实数根为 $x_1, x_2$，则：
    
    1. **根之和**：$x_1 + x_2 = -\frac{b}{a}$
    2. **根之积**：$x_1 \cdot x_2 = \frac{c}{a}$
    
    **公式逆用**：已知两根，可以构造方程 $x^2 - (x_1+x_2)x + x_1x_2 = 0$。

---

## 实际应用

### 1. 二次三项式的因式分解
若 $ax^2 + bx + c = 0$ 的两根为 $x_1, x_2$，则：

$$ax^2 + bx + c = a(x - x_1)(x - x_2)$$

### 2. 列方程解应用题
常见模型包括：

- **增长率问题**：$a(1+x)^n = b$
- **面积问题**：利用几何图形面积公式列方程。
- **动态几何问题**：结合点运动的速度与时间建立等量关系。

---

## 动态演示：根与系数的变换

通过调整系数 $a, b, c$，观察抛物线与 $x$ 轴交点（即方程的根）的变化。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-5, 10, 5, -5], 
        axis: true, 
        showCopyright: false
    });

    // 创建滑动条控制 a, b, c
    var a = board.create('slider', [[-4, 9], [-1, 9], [-2, 1, 2]], {name: 'a'});
    var b = board.create('slider', [[-4, 8], [-1, 8], [-5, 0, 5]], {name: 'b'});
    var c = board.create('slider', [[-4, 7], [-1, 7], [-5, -1, 5]], {name: 'c'});

    // 绘制函数图像
    var f = board.create('functiongraph', [function(x){ 
        return a.Value()*x*x + b.Value()*x + c.Value(); 
    }], {strokeWidth: 3, strokeColor: '#3498db'});

    // 计算判别式并显示
    board.create('text', [1, 9, function() {
        var delta = b.Value()*b.Value() - 4*a.Value()*c.Value();
        return 'Delta = ' + delta.toFixed(2);
    }], {fontSize: 16, color: function() {
        var delta = b.Value()*b.Value() - 4*a.Value()*c.Value();
        return delta >= 0 ? '#27ae60' : '#e74c3c';
    }});

})();
</script>

??? tip "拓展：从求根公式看对称性"
    求根公式可以写成 $x = -\frac{b}{2a} \pm \frac{\sqrt{\Delta}}{2a}$。
    这表明两个根关于直线 $x = -\frac{b}{2a}$ 对称。这条直线正是二次函数图像的**对称轴**。