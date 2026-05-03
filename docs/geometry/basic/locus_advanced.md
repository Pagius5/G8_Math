# 距离关系的代数轨迹 Advanced Loci

### 关键词 Keywords

| 轨迹方程              | 几何图形名称 | 英文名称             |
| :-------------------- | :----------- | :------------------- |
| $d_1 + d_2 = k$       | 椭圆         | Ellipse              |
| $d_1 - d_2 = k$       | 双曲线       | Hyperbola            |
| $d_1 \cdot d_2 = k^2$ | 卡西尼卵形线 | Cassini Oval         |
| $d_1 / d_2 = k$       | 阿波罗尼斯圆 | Circle of Apollonius |

---

## 动态实验室：距离算术与轨迹演变

在下方的交互画布中，你可以通过切换 **Mode** 来观察四种基本算术运算如何决定动点的轨迹。

**操作指南：**

1. 拖动 **Mode** 滑块切换运算类型（0:和, 1:差, 2:积, 3:商）。
2. 调节 **k** 滑块改变常数值。
3. 你甚至可以拖动定点 **A** 和 **B**，观察坐标系旋转或平移时，轨迹的几何不变性。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:600px; height:550px; margin: 20px auto; border: 2px solid #34495e; border-radius: 8px; background: #fff;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    // 1. 初始化画布
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-10, 10, 10, -10], 
        axis: true, 
        showCopyright: false,
        pan: {enabled: true},
        zoom: {enabled: true}
    });

    // 2. 创建两个基准定点 (焦点)
    var pA = board.create('point', [-3, 0], {name: 'A', color: '#2c3e50', size: 4});
    var pB = board.create('point', [3, 0], {name: 'B', color: '#2c3e50', size: 4});

    // 3. 控制参数的滑块
    // k: 定值常数
    var sK = board.create('slider', [[-9, -7], [-3, -7], [0.1, 8, 20]], {name: 'k', strokeColor: '#e74c3c'});
    // Mode: 0:Sum, 1:Diff, 2:Prod, 3:Div
    var sM = board.create('slider', [[-9, -8.5], [-3, -8.5], [0, 0, 3]], {name: 'Mode', snapWidth: 1, strokeColor: '#2980b9'});

    // 4. 动态文本提示
    var txt = board.create('text', [-8, -9.3, function() {
        var modes = [
            "和 (Sum): d(P,A) + d(P,B) = k",
            "差 (Diff): |d(P,A) - d(P,B)| = k",
            "积 (Prod): d(P,A) * d(P,B) = k^2",
            "商 (Div): d(P,A) / d(P,B) = k"
        ];
        return modes[Math.round(sM.Value())];
    }], {fontSize: 15, fontWeight: 'bold', color: '#2c3e50'});

    // 5. 创建隐函数曲线 (Implicit Curve)
    // 这是处理复杂代数轨迹最强大的工具
    board.create('implicitcurve', [
        function(x, y) {
            // 计算动点到 A, B 的欧几里得距离
            var d1 = Math.sqrt(Math.pow(x - pA.X(), 2) + Math.pow(y - pA.Y(), 2));
            var d2 = Math.sqrt(Math.pow(x - pB.X(), 2) + Math.pow(y - pB.Y(), 2));
            var k = sK.Value();
            var mode = Math.round(sM.Value());

            if (mode === 0) return d1 + d2 - k;           // 椭圆定义
            if (mode === 1) return Math.abs(d1 - d2) - k; // 双曲线定义
            if (mode === 2) return d1 * d2 - k * k;       // 卡西尼卵形线
            if (mode === 3) return d1 / d2 - k;           // 阿波罗尼斯圆
            return 1;
        }
    ], {
        strokeColor: '#e74c3c', 
        strokeWidth: 3,
        transitionDuration: 0 // 实时更新无延迟
    });

})();
</script>

---

## 轨迹背后的代数本质

### 1. 距离之商与“消失的”直线
在 **Mode 3 (Division)** 中，你会发现轨迹通常是一个圆（阿波罗尼斯圆）。
但请注意：当你将 **k** 调节为 **1** 时，圆的半径会无限增大，最终退化为一条**直线**。
这在代数上对应着方程 $d_1 = d_2$，即我们之前学过的**垂直平分线**。

### 2. 距离之积的拓扑变化
切换到 **Mode 2 (Product)**，这是著名的**卡西尼卵形线**：

- 当 $k$ 较大时，曲线呈单闭合路径（像个圆滑的蛋）。
- 当 $k$ 减小到一定程度，曲线中间会塌陷。
- 当 $k = \text{焦点距离的一半}$ 时，曲线交叉形成 $\infty$ 符号，称为**伯努利双纽线 (Lemniscate of Bernoulli)**。



### 3. 距离之和与差
这是解析几何的基石。在 **AP Precalculus** 中，我们将通过建立直角坐标系，将这些距离关系转化为二次方程：

- **椭圆标准方程**：  

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

- **双曲线标准方程**：

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

??? tip "解题技巧：代数化简"
    在处理轨迹题目时，看到根号下的平方和（距离公式），通常需要通过两次平方来消去根号，从而得到标准方程。