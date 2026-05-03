# 三角形重心 Triangle Centroid

### 关键词 Keywords

| 术语     | 英文             | 含义                                 |
| :------- | :--------------- | :----------------------------------- |
| 中线     | Median           | 连接三角形一个顶点及其对边中点的线段 |
| 重心     | Centroid         | 三角形三条中线的交点                 |
| 几何中心 | Geometric Center | 物理学上均匀三角形薄板的平衡点       |
| 面积平分 | Area Bisecting   | 中线将三角形分成两个面积相等的三角形 |

---

## 定义与基本性质

!!! note "定义 (Definition)"
    三角形三条中线的交点叫做三角形的**重心**。

!!! theorem "性质 1：线段比例 (2:1 Property)"
    重心到顶点的距离等于它到对边中点距离的 **2 倍**。
    
    - 若 $G$ 是 $\triangle ABC$ 的重心，$AD$ 是 $BC$ 边上的中线，则有：$AG = 2GD$ 或 $AG = \frac{2}{3}AD$



!!! theorem "性质 2：面积平分 (Equal Areas)"
    
    1. 每一条中线都将三角形分成面积相等的两个三角形。
    2. 重心与三个顶点相连，所形成的三个三角形（$\triangle ABG, \triangle BCG, \triangle CAG$）面积相等。
    3. 三条中线将三角形分成面积相等的 **6 个**小三角形。

---

## 交互实验：重心的动态特性

通过下方的交互模块，你可以随意改变三角形的形状，观察重心 $G$ 的位置变化：

<div style="width: 100%; aspect-ratio: 1300 / 550; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; margin: 20px 0;">
    <iframe 
        src="https://www.geogebra.org/material/iframe/id/wfwtkavf/width/1300/height/550/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" 
        width="100%" 
        height="100%" 
        style="border: none; display: block;">
    </iframe>
</div>

### 实验观察点
1.  **始终在内部**：无论三角形是锐角、直角还是钝角，重心始终位于三角形的内部（这一点与垂心、外心不同）。
2.  **平衡感**：想象在 $G$ 点撑起这个三角形，它在物理上会保持水平平衡。
3.  **坐标关联**：在解析几何中，重心 $G$ 的坐标是三个顶点坐标的算术平均值。

---

## 判定与应用

!!! success "如何判定重心？"
    - 证明它是两条中线的交点。
    - 证明它在一条中线上，且满足 $2:1$ 的分段比例。

??? tip "解题技巧：等积变形"
    涉及重心的题目经常与“面积”挂钩。记住重心到边的距离比并不直接等于 $2:1$，但重心将三角形分割出的面积关系是极其稳定的。当你看到中点时，**联想重心**往往是解决面积比例问题的捷径。

---

## 拓展：解析几何中的重心公式

对于顶点为 $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ 的三角形，重心 $G$ 的坐标为：

$$G = \left( \frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3} \right)$$