# 轨迹 Locus

### 关键词 Keywords

| 术语     | 英文                 | 含义                                     |
| :------- | :------------------- | :--------------------------------------- |
| 轨迹     | Locus (pl. Loci)     | 满足特定条件的所有点所构成的图形（点集） |
| 几何约束 | Geometric Constraint | 限制点移动范围的数学条件                 |
| 动态定义 | Dynamic Definition   | 将图形描述为“点按某种规律运动的路线”     |
| 静态定义 | Static Definition    | 将图形描述为“符合条件的所有点的集合”     |

---

## 轨迹的定义

!!! info "什么是轨迹？"

    在平面几何中，符合某种特定条件的点的**集合**，或者说动点按特定条件运动所形成的**图形**，叫做该条件的**轨迹**。

理解轨迹需要具备“集合”的思维：
1.  **纯粹性**：轨迹上的每一个点都必须满足给定的条件。
2.  **完备性**：满足给定条件的每一个点都必须在轨迹上。

---

## 基本轨迹模型 (Basic Loci)

以下是初等几何中最常见的五种基本轨迹：

### 1. 到定点距离等于定长
- **条件**：到定点 $O$ 的距离等于定长 $r$。
- **轨迹**：以 $O$ 为圆心，$r$ 为半径的**圆**。

### 2. 到线段两端点距离相等
- **条件**：到线段 $AB$ 的两个端点 $A, B$ 距离相等（$PA = PB$）。
- **轨迹**：线段 $AB$ 的**垂直平分线**。



[Image of locus of points equidistant from two points]


### 3. 到角两边距离相等
- **条件**：在角内部，到角 $\angle AOB$ 两边距离相等。
- **轨迹**：该角的**角平分线**（射线）。



### 4. 到定直线距离等于定长
- **条件**：到定直线 $l$ 的距离等于定长 $d$。
- **轨迹**：与直线 $l$ 平行且距离为 $d$ 的**两条直线**。

### 5. 到两条平行线距离相等
- **条件**：到两条平行直线 $l_1, l_2$ 距离相等。
- **轨迹**：夹在 $l_1, l_2$ 正中间的一条**平行直线**。

---

## 轨迹 Locus：动态演示 (最终修复版)

**操作指南：**
1. 找到下方浅灰色区域中的 **红色圆点 P**。
2. 用鼠标按住并上下拖动它。
3. 点击画布下方的按钮可以清除留下的红色痕迹。




<div id="jxgbox" class="jxgbox" style="width:100%; max-width:500px; height:400px; margin: 20px auto; border: 2px solid #34495e; background-color: #f9f9f9; border-radius: 8px; touch-action: none;"></div>

<div style="text-align: center; margin-bottom: 20px;">
    <button onclick="clearLocusTrace()" style="padding: 8px 16px; cursor: pointer; background: #e74c3c; color: white; border: none; border-radius: 4px;">清除轨迹 (Clear Trace)</button>
</div>

<script type="text/javascript">
var board, pointP;

function initJSXGraph() {
    if (typeof JXG === 'undefined') return;
    if (document.getElementById('jxgbox').innerHTML !== '') return; // 防止重复加载

    board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-5, 5, 5, -5], 
        axis: true, 
        showCopyright: false,
        pan: {enabled: false},
        zoom: {enabled: false}
    });

    // 1. 创建定点 A 和 B
    var A = board.create('point', [-2, 0], {name: 'A', fixed: true, color: '#2c3e50', size: 4});
    var B = board.create('point', [2, 0], {name: 'B', fixed: true, color: '#2c3e50', size: 4});
    
    // 2. 修复处：用 JSXGraph 正确的语法创建垂直平分线
    var mid = board.create('midpoint', [A, B], {visible: false}); // 先找中点
    var segAB = board.create('segment', [A, B], {visible: false}); // 连线
    var pb = board.create('perpendicular', [segAB, mid], {visible: false}); // 过中点作垂线
    
    // 3. 创建动点 P（约束在垂线 pb 上）
    pointP = board.create('glider', [0, 2, pb], {
        name: 'P', 
        color: '#e74c3c', 
        size: 1,
        strokeColor: '#c0392b',
        trace: true 
    });

    // 4. 连线显示长度
    board.create('segment', [pointP, A], {dash: 1, strokeColor: '#95a5a6', withLabel: true, name: function(){ return this.L().toFixed(2); }});
    board.create('segment', [pointP, B], {dash: 1, strokeColor: '#95a5a6', withLabel: true, name: function(){ return this.L().toFixed(2); }});
}

function clearLocusTrace() {
    if (pointP) {
        pointP.clearTrace();
        board.update();
    }
}

// 确保正确初始化
var checkExist = setInterval(function() {
    if (document.getElementById('jxgbox') && typeof JXG !== 'undefined') {
        initJSXGraph();
        clearInterval(checkExist);
    }
}, 100);
</script>


---

## 轨迹问题的解题步骤

!!! theorem "一般路径"

    1. **建立坐标系**（解析法）：将几何条件转化为代数方程。
    2. **设点**：设动点坐标为 $(x, y)$。
    3. **列式**：根据题目给出的几何约束条件列出等式。
    4. **化简**：将等式化简为标准方程（如圆的方程、直线方程）。
    5. **定义域限制**：检查是否有某些点需要剔除（去重、补漏）。

??? tip "进阶：圆锥曲线作为轨迹"

    - **椭圆**：到两定点距离**之和**为定值的点的轨迹。
    - **双曲线**：到两定点距离**之差的绝对值**为定值的点的轨迹。
    - **抛物线**：到定点与到定直线距离**相等**的点的轨迹。
    
    这些内容将在 **AP Precalculus** 的圆锥曲线章节深入讨论。