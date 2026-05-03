# 命题与证明 Propositions and Proofs

### 关键词 Keywords

| 术语     | 英文                    | 含义                                       |
| :------- | :---------------------- | :----------------------------------------- |
| 命题     | Proposition             | 能够判断真假的陈述句                       |
| 题设     | Hypothesis / Antecedent | 命题中的已知条件（"如果"部分）             |
| 结论     | Conclusion / Consequent | 命题中的判断事项（"那么"部分）             |
| 逆命题   | Converse                | 交换原命题的条件与结论得到的命题           |
| 否命题   | Inverse                 | 同时否定原命题的条件与结论得到的命题       |
| 逆否命题 | Contrapositive          | 交换并同时否定原命题的条件与结论得到的命题 |
| 等价     | Equivalent              | 两个命题的真假性始终完全一致               |
| 反证法   | Proof by Contradiction  | 通过否定结论并导出矛盾来证明原命题的方法   |
| 充要条件 | If and only if (iff)    | 原命题与逆命题均为真，条件与结论互为因果   |

---

## 命题的四种形式

对于任何一个原命题：“若 $p$，则 $q$”，我们可以衍生出以下三种形式：

| 命题名称     | 形式符号            | 描述                       |
| :----------- | :------------------ | :------------------------- |
| **原命题**   | $p \to q$           | 若 $p$ 成立，则 $q$ 成立   |
| **逆命题**   | $q \to p$           | 交换原命题的条件与结论     |
| **否命题**   | $\neg p \to \neg q$ | 同时否定原命题的条件与结论 |
| **逆否命题** | $\neg q \to \neg p$ | 交换并同时否定条件与结论   |

!!! theorem "逻辑等价性 (Logical Equivalence)"

    1. **原命题** 与 **逆否命题** 具有相同的真假性（同真同假）。
    2. **逆命题** 与 **否命题** 具有相同的真假性（同真同假）。

---

## 演示：四种命题的逻辑关联

<div id="jxgbox_logic" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border: 2px solid #34495e; border-radius: 8px; background: #fff; touch-action: none;"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />

<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('jxgbox_logic', {
        boundingbox: [-1, 7, 10, -1], 
        axis: false, 
        showCopyright: false,
        pan: {enabled: false},
        zoom: {enabled: false}
    });

    // 1. 定义节点位置
    var nodes = {
        orig: [1, 5],
        conv: [7, 5],
        inv: [7, 1],
        contra: [1, 1]
    };

    // 2. 绘制节点框
    function createNode(pos, label, color) {
        return board.create('text', [pos[0], pos[1], label], {
            fontSize: 14, 
            fontWeight: 'bold',
            strokeColor: color,
            display: 'internal'
        });
    }

    createNode(nodes.orig, "原命题 (p → q)", "#2c3e50");
    createNode(nodes.conv, "逆命题 (q → p)", "#2c3e50");
    createNode(nodes.inv, "否命题 (¬p → ¬q)", "#2c3e50");
    createNode(nodes.contra, "逆否命题 (¬q → ¬p)", "#2c3e50");

    // 3. 绘制等价关系线 (原命题 <-> 逆否命题)
    var eqLine1 = board.create('segment', [[1.5, 4.7], [1.5, 1.4]], {
        strokeColor: '#e74c3c', 
        strokeWidth: 3, 
        dash: 2,
        name: '等价',
        withLabel: true,
        label: {offset: [-40, 0], color: '#e74c3c'}
    });

    var eqLine2 = board.create('segment', [[7.5, 4.7], [7.5, 1.4]], {
        strokeColor: '#3498db', 
        strokeWidth: 3, 
        dash: 2,
        name: '等价',
        withLabel: true,
        label: {offset: [10, 0], color: '#3498db'}
    });

    // 4. 辅助箭头说明
    board.create('arrow', [[2.8, 5.1], [6.8, 5.1]], {strokeColor: '#95a5a6', strokeWidth: 1}); // 互逆
    board.create('text', [4.5, 5.3, "互逆"], {fontSize: 12, color: '#95a5a6'});
    
    board.create('arrow', [[2.8, 1.1], [6.8, 1.1]], {strokeColor: '#95a5a6', strokeWidth: 1}); // 互逆
    board.create('text', [4.5, 0.8, "互逆"], {fontSize: 12, color: '#95a5a6'});

})();
</script>

---

## 证明方法

### 1. 直接证明 (Direct Proof)
从已知条件出发，利用已有的公理、定理进行演绎推理。

### 2. 反证法 (Proof by Contradiction)
当直接证明结论 $q$ 比较困难时，可以采用以下步骤：

1. **假设结论不成立**：即假设 $\neg q$ 成立。
2. **逻辑推导**：从已知条件和 $\neg q$ 出发进行推导。
3. **导出矛盾**：推导出与已知事实、公理或定理矛盾的结果。
4. **得出结论**：因为推导过程无误，所以假设错误，原结论 $q$ 必定成立。

---

## 举例说明

以“垂直于同一条直线的两条直线平行”为例：

* **原命题**：若 $a \perp l$ 且 $b \perp l$，则 $a \parallel b$。（**真**）
* **逆命题**：若 $a \parallel b$，则 $a \perp l$ 且 $b \perp l$。（**假**，只有当 $a$ 已经垂直于某直线时才成立）
* **逆否命题**：若 $a$ 不平行于 $b$，则 $a$ 与 $b$ 不同时垂直于直线 $l$。（**真**）



??? tip "对教学的启示"

    在解几何综合题时，如果发现从条件正面推导非常繁琐，不妨尝试写出结论的否定。反证法往往能将复杂的几何关系转化为简单的逻辑冲突，是处理“唯一性”或“不存在性”问题的利器。