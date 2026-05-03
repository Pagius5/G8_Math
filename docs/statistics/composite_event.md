# 复合事件 Composite Events

### 关键词 Keywords

| 术语     | 英文                      | 含义                                         |
| :------- | :------------------------ | :------------------------------------------- |
| 复合事件 | Composite Event           | 由两个或多个简单事件组合而成的事件           |
| 互斥事件 | Mutually Exclusive Events | 不能同时发生的两个事件                       |
| 独立事件 | Independent Events        | 一个事件的发生不影响另一个事件发生的概率     |
| 条件概率 | Conditional Probability   | 在已知某事件发生的条件下，另一事件发生的概率 |
| 补集思想 | Complementary Counting    | 通过计算“事件不发生”的概率来间接求解的方法   |

---

## 互斥事件与加法法则

如果两个事件 $A$ 和 $B$ 不能同时发生（即它们的交集为空），我们称它们为**互斥事件**。

!!! info "加法法则 (Addition Rule)"

    对于两个互斥事件，它们中至少有一个发生的概率是各事件概率之和：

    $$P(A \text{ or } B) = P(A) + P(B)$$

    **一般加法法则**（当事件可能同时发生时）：

    $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$



---

## 独立事件与乘法法则

如果事件 $A$ 的发生对事件 $B$ 发生的概率没有影响，则称这两个事件为**独立事件**。

!!! info "乘法法则 (Multiplication Rule)"

    两个独立事件同时发生的概率等于它们各自概率的积：

    $$P(A \text{ and } B) = P(A) \times P(B)$$

**例子：掷两次硬币**

- 第一次正面的概率 $P(A) = 0.5$，第二次正面的概率 $P(B) = 0.5$。
- 两次都是正面的概率：

    $$P(A \cap B) = 0.5 \times 0.5 = 0.25$$

---

## 条件概率 Conditional Probability

当一个事件的发生**会影响**另一个事件的概率时，我们需要引入条件概率。

!!! theorem "条件概率公式"

    在事件 $B$ 发生的条件下，事件 $A$ 发生的概率记作 $P(A|B)$：

    $$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

    **乘法法则的一般形式**：

    $$P(A \cap B) = P(B) \times P(A|B)$$

---

## 概率论中的经典悖论 (Classic Paradoxes)

概率往往是反直觉的。以下两个经典问题展示了条件概率与组合增长的魅力。

### 1. 三门问题 (The Monty Hall Problem)

!!! info "场景描述"

    你参加一个节目，面前有三扇门：一扇门后是汽车，另外两扇后是山羊。
    1. 你选了 1 号门。
    2. 知道内情的主持人打开了 3 号门，露出一只山羊。
    3. 主持人问：“你要换选 2 号门吗？”



!!! theorem "数学结论：你应该换门"

    - **不换门**：赢得汽车的概率保持在最初的 $1/3$。
    - **换门**：赢得汽车的概率会提升到 $2/3$。

**核心逻辑**：主持人开门这一行为引入了新信息。他避开了汽车所在的门，因此他没打开的那扇门承载了除了你选的那扇门之外的所有胜算。

---

### 2. 生日问题 (The Birthday Paradox)

!!! info "问题描述"

    一个房间里至少需要有多少人，才能使其中“至少有两个人生日相同”的概率超过 $50\%$？

!!! theorem "结论：仅需 23 人"

    计算“至少两人相同”的最佳策略是使用**补集思想**，即先算“所有人生日都不同”的概率：

    $$P(\text{at least 2 same}) = 1 - \frac{365}{365} \cdot \frac{364}{365} \cdot \frac{363}{365} \dots \frac{365-n+1}{365}$$

---

## 动态演示：生日概率增长曲线

拖动滑块观察：当人数达到 23 人时，概率越过了 $0.5$ 的红线；当人数达到 50 人时，概率已接近 $97\%$。

<div id="jxgbox_birthday" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox_birthday', {
        boundingbox: [-5, 1.1, 65, -0.1], 
        axis: true, 
        showCopyright: false
    });

    // 50% 阈值线
    board.create('line', [[0, 0.5], [60, 0.5]], {strokeColor: '#e74c3c', dash: 2, name: '50% Threshold', withLabel: true});

    function getProb(n) {
        var p = 1.0;
        for (var i = 0; i < n; i++) { p *= (365 - i) / 365; }
        return 1 - p;
    }

    var curve = board.create('curve', [
        function(t) { return t; },
        function(t) { return getProb(t); },
        0, 60
    ], {strokeWidth: 3, strokeColor: '#3498db'});

    var s = board.create('slider', [[10, 0.2], [40, 0.2], [1, 23, 60]], {name: 'n (People)', snapWidth: 1});
    
    board.create('point', [
        function(){ return s.Value(); }, 
        function(){ return getProb(s.Value()); }
    ], {
        name: function(){ return (getProb(s.Value())*100).toFixed(1) + '%'; },
        color: '#e74c3c',
        label: {offset: [10, 10]}
    });
})();
</script>

??? tip "对教学的启示"

    - **Monty Hall** 告诉我们：新信息的获取会重塑已有的概率分布。
    - **生日问题** 告诉我们：元素之间的两两配对数（$C_n^2$）的增长速度远超人类对“人数”的直觉感知。