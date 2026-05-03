# 排列与组合 Permutations and Combinations

### 关键词 Keywords

| 术语     | 英文                     | 含义                                                |
| :------- | :----------------------- | :-------------------------------------------------- |
| 加法原理 | Addition Principle       | 完成一件事有 $n$ 类途径，通过累加各途径数得到总数   |
| 乘法原理 | Multiplication Principle | 完成一件事需要 $n$ 个步骤，通过累乘各步骤数得到总数 |
| 排列     | Permutation              | 从 $n$ 个元素中取出 $m$ 个，按**特定顺序**排成一列  |
| 组合     | Combination              | 从 $n$ 个元素中取出 $m$ 个，**不考虑顺序**合成一组  |
| 阶乘     | Factorial                | 正整数 $n$ 与所有小于它的正整数的积，记作 $n!$      |

---

## 基本计数原理

所有复杂的计数问题都建立在两个核心原理之上：

!!! info "1. 加法原理 (Addition Principle)"

    完成一件事有 $k$ 类方案，第一类方案有 $m_1$ 种方法，第二类有 $m_2$ 种……则总计有：
    
    $$N = m_1 + m_2 + \dots + m_k$$
    
    - **特征**：类别互斥（“或”的关系）。

!!! info "2. 乘法原理 (Multiplication Principle)"

    完成一件事需要 $k$ 个步骤，第一步有 $m_1$ 种方法，第二步有 $m_2$ 种……则总计有：
    
    $$N = m_1 \times m_2 \times \dots \times m_k$$
    
    - **特征**：步骤连续（“与”的关系）。

---

## 排列 Permutation

!!! theorem "定义与公式"

    从 $n$ 个不同元素中取出 $m$ ($m \le n$) 个元素，按照**一定的顺序**排成一列，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个排列。

    排列数公式为：
    
    $$A_n^m = n(n-1)(n-2)\dots(n-m+1) = \frac{n!}{(n-m)!}$$
    
    - **全排列**：当 $m = n$ 时，$A_n^n = n!$。
    - **规定**：$0! = 1$。

---

## 组合 Combination

!!! theorem "定义与公式"

    从 $n$ 个不同元素中取出 $m$ ($m \le n$) 个元素合成一组，**不考虑其顺序**，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个组合。

    组合数公式为：
    
    $$C_n^m = \frac{A_n^m}{A_m^m} = \frac{n!}{m!(n-m)!}$$

    - **关键区别**：组合不需要排序，因此要在排列的基础上除以被选出元素的内排列 $m!$。

---

## 核心性质与应用技巧

!!! info "组合数的两个重要性质"

    1. **对称性**：从 $n$ 个中选 $m$ 个，等于留下 $n-m$ 个。
    
        $$C_n^m = C_n^{n-m}$$

    2. **帕斯卡恒等式**：
    
        $$C_n^m = C_{n-1}^m + C_{n-1}^{m-1}$$

### 解题常用模型

#### 1. 相邻问题：捆绑法 (Method of Bundling)

!!! info "模型逻辑"

    当要求某些元素必须相邻时，将它们“捆绑”在一起看作一个**大元素**，与其他元素进行排列。
    
    **注意**：大元素内部通常也需要进行排列。

**例题 1**：
5 个同学排队，其中甲、乙两人必须站在一起，共有多少种排法？

!!! theorem "解题思路"

    1. **捆绑**：将甲、乙看作一个整体，此时总元素变为 4 个（甲乙整体 + 其余 3 人）。
    2. **外排列**：对这 4 个元素进行全排列，共有 $A_4^4 = 24$ 种。
    3. **内排列**：甲、乙两人内部可以交换位置，共有 $A_2^2 = 2$ 种。
    
    **结论**：总排法为 $24 \times 2 = 48$ 种。

---

#### 2. 不相邻问题：插空法 (Method of Slotting)

!!! info "模型逻辑"

    当要求某些元素不能相邻时，先排列**不受限元素**，再将受限元素插入这些元素之间（及两端）形成的空隙中。

**例题 2**：
4 个男生和 3 个女生排成一排，要求女生互不相邻，共有多少种排法？

!!! theorem "解题思路"

    1. **排男生**：先排 4 个男生，共有 $A_4^4 = 24$ 种。
    2. **找空位**：4 个男生之间及两端共有 5 个空位。
    3. **插女生**：从 5 个空位中选出 3 个插入女生，且女生有顺序，共有 $A_5^3 = 60$ 种。
    
    **结论**：总排法为 $24 \times 60 = 1440$ 种。

---

#### 3. 定序问题：除法排除法 (Division Method)

!!! info "模型逻辑"

    当要求某些元素的顺序固定（如甲必须在乙的前面，但不一定相邻）时，先进行全排列，再除以这些定序元素的排列数。

**例题 3**：
5 人排队，甲必须排在乙的前面，共有多少种排法？

!!! theorem "解题思路"

    1. **全排列**：忽略限制，5 个人全排列共有 $A_5^5 = 120$ 种。
    2. **消除顺序**：在所有的排列中，甲在乙前和乙在甲前的情况各占一半（即 $A_2^2 = 2$ 种可能中的 1 种）。
    
    **结论**：总排法为 $\frac{120}{2} = 60$ 种。

---

## 动态演示：排列与组合的数量级对比

拖动 $n$ 和 $m$ 的滑动条，观察排列数 $A_n^m$ 增长的速度远快于组合数 $C_n^m$。

<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border-radius: 8px;"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-1, 100, 11, -10], 
        axis: true, 
        showCopyright: false
    });

    var n_slider = board.create('slider', [[1, 90], [6, 90], [1, 7, 10]], {name: 'n', snapWidth: 1});
    var m_slider = board.create('slider', [[1, 80], [6, 80], [1, 3, 10]], {name: 'm', snapWidth: 1});

    function factorial(num) {
        if (num <= 1) return 1;
        return num * factorial(num - 1);
    }

    function nCr(n, r) {
        if (r > n) return 0;
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

    function nAr(n, r) {
        if (r > n) return 0;
        return factorial(n) / factorial(n - r);
    }

    board.create('text', [1, 50, function() {
        var n = n_slider.Value();
        var m = m_slider.Value();
        return 'Permutation (A): ' + nAr(n, m);
    }], {fontSize: 18, color: '#e74c3c', fontWeight: 'bold'});

    board.create('text', [1, 30, function() {
        var n = n_slider.Value();
        var m = m_slider.Value();
        return 'Combination (C): ' + nCr(n, m);
    }], {fontSize: 18, color: '#3498db', fontWeight: 'bold'});

})();
</script>

??? tip "拓展：二项式定理 (Binomial Theorem)"

    组合数 $C_n^m$ 也是二项式展开式中的系数，因此它也被称为**二项式系数**。
    
    $$(a+b)^n = \sum_{k=0}^n C_n^k a^{n-k} b^k$$
    
    在 AP Seminar 或 AP Precalculus 中，你会发现这种计数逻辑是概率统计的基础。