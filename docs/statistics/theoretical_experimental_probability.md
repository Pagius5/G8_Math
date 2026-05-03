# 理论概率与实验概率 Theoretical and Experimental Probability

### 关键词 Keywords

| 术语     | 英文                     | 含义                                       |
| :------- | :----------------------- | :----------------------------------------- |
| 实验概率 | Experimental Probability | 基于实际实验或观测结果计算出的概率         |
| 理论概率 | Theoretical Probability  | 基于数学逻辑和等可能性假设计算出的概率     |
| 样本空间 | Sample Space             | 随机试验中所有可能结果的集合               |
| 大数定律 | Law of Large Numbers     | 实验次数越多，实验概率越接近理论概率的原理 |

---

## 理论概率 Theoretical Probability

理论概率是在理想状态下，通过分析事件发生的可能性来确定的。

!!! info "计算公式"

    对于一个含有等可能结果的随机试验，事件 $A$ 发生的理论概率为：

    $$P(A) = \frac{\text{事件 } A \text{ 包含的结果数}}{\text{样本空间中总的结果数}}$$

**例子：掷一枚均匀的硬币**

- 样本空间：{正面, 反面}（总数为 2）
- 出现正面的概率：

    $$P(\text{正面}) = \frac{1}{2} = 0.5$$

---

## 实验概率 Experimental Probability

实验概率（也称相对频率）是基于实际进行的试验次数和事件发生的频数来确定的。

!!! info "计算公式"

    事件 $A$ 的实验概率为：

    $$P(\text{exp}) = \frac{\text{事件 } A \text{ 实际发生的次数}}{\text{试验的总次数}}$$

**例子：掷硬币实验**

- 如果你掷了 10 次硬币，发现有 7 次是正面，那么：

    $$P(\text{正面 exp}) = \frac{7}{10} = 0.7$$

---

## 两者的联系：大数定律 (Law of Large Numbers)

实验概率与理论概率往往并不相等，但它们之间存在深刻的联系。

!!! theorem "核心结论"

    1. **偶然性**：在试验次数较少时，实验概率受随机波动影响较大，可能偏离理论概率。
    
    2. **趋向性**：随着试验次数（$n$）的不断增加，实验概率会越来越趋近于理论概率。

    3. **意义**：我们可以通过大量的重复实验来估计那些难以通过数学逻辑直接计算的理论概率。

---

## 动态演示：掷硬币实验与收敛

通过下方的交互图表，你可以模拟掷硬币的过程。观察随着掷硬币次数的增加，“正面出现的频率”是如何逐渐稳定在 $0.5$ 左右的。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-50, 1.1, 1050, -0.1], 
        axis: true, 
        showCopyright: false
    });

    var data = [0.5];
    var heads = 0;
    var total = 0;

    // 绘制 0.5 理论基准线
    board.create('line', [[0, 0.5], [1000, 0.5]], {strokeColor: '#e74c3c', dash: 2, name: 'Theoretical: 0.5', withLabel: true});

    // 创建曲线对象
    var curve = board.create('curve', [[0], [0.5]], {strokeColor: '#3498db', strokeWidth: 2});

    // 模拟函数
    function flipCoin() {
        if (total >= 1000) return;
        
        for (var i = 0; i < 10; i++) {
            total++;
            if (Math.random() > 0.5) heads++;
            curve.dataX.push(total);
            curve.dataY.push(heads / total);
        }
        board.update();
    }

    // 添加控制按钮
    var btn = board.create('text', [600, 0.9, '掷硬币 10 次'], {
        fontSize: 14, 
        box: {fillColor: '#ecf0f1', strokeColor: '#2c3e50'},
        padding: 5
    });
    btn.on('down', flipCoin);

    board.create('text', [600, 0.8, function() {
        return '当前总次数: ' + total + ' | 实验概率: ' + (total > 0 ? (heads/total).toFixed(3) : '0');
    }], {fontSize: 14});

})();
</script>

---

## 实际应用：模拟 (Simulation)

在现实世界中，有些概率很难通过公式计算（例如某类疾病的真实感染率）。此时，我们会利用实验概率的思想：

!!! info "蒙特卡罗方法 (Monte Carlo Method)"

    通过计算机进行成千上万次随机模拟，用模拟得出的实验概率作为理论概率的近似值。
    
    - **应用案例**：金融风险评估、天气预报、核物理模拟。

??? tip "AP Precalculus & Statistics 预告"

    在后续课程中，你会学习如何量化这种“偏离感”，即**标准差 (Standard Deviation)** 和 **正态分布 (Normal Distribution)**。你会学到如何判断一个实验结果是由于“运气”还是因为“理论模型本身就有误”。