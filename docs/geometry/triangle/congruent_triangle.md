# 全等三角形 Congruent Triangles

### 关键词 Keywords

| 术语       | 英文                 | 含义                           |
| :--------- | :------------------- | :----------------------------- |
| 全等形     | Congruent Figures    | 能够完全重合的两个图形         |
| 全等三角形 | Congruent Triangles  | 形状、大小完全相同的两个三角形 |
| 对应边     | Corresponding Sides  | 全等三角形中互相重合的边       |
| 对应角     | Corresponding Angles | 全等三角形中互相重合的角       |

---

## 性质与判定

!!! note "全等三角形的性质"
    全等三角形的**对应边相等**，**对应角相等**。
    
    - 若 $\triangle ABC \cong \triangle DEF$，则 $AB=DE, BC=EF, AC=DF$ 且 $\angle A=\angle D, \angle B=\angle E, \angle C=\angle F$。

!!! theorem "判定定理 (Criteria for Congruence)"
    1. **SSS (Side-Side-Side)**：三边分别相等的两个三角形全等。
    2. **SAS (Side-Angle-Side)**：两边及其夹角分别相等的两个三角形全等。
    3. **ASA (Angle-Side-Angle)**：两角及其夹边分别相等的两个三角形全等。
    4. **AAS (Angle-Angle-Side)**：两角及其中一个角的对边分别相等的两个三角形全等。
    5. **HL (Hypotenuse-Leg)**：斜边和一条直角边分别相等的两个**直角三角形**全等。



---

## 深度解析：SSA 为什么不能判定全等？

!!! danger "SSA 错误 (Side-Side-Angle)"
    当已知两边 $b, a$ 和其中一边 $a$ 的对角 $\angle B$ 时，可能会出现**两种**形状截然不同的三角形。

### 动态演示：SSA 的不确定性

<iframe 
    src="https://www.geogebra.org/material/iframe/id/CvtkyRM5/width/800/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" 
    width="100%" 
    height="500px" 
    style="border: 1px solid #e0e0e0; border-radius: 8px; margin: 20px 0;">
</iframe>

<!-- ## SSA 判定实验

<script type="text/javascript" src="/javascripts/ssa.js"></script>

<div id="ssa-demo-1"></div>

<script>
    // 页面加载完成后初始化
    window.addEventListener('load', function() {
        createSSAIllustration('ssa-demo-1', [4, 4]);
    });
</script> -->

---

## 常见误区与注意点

!!! danger "SSA 错误 (Side-Side-Angle)"
    两边及其中一边的对角相等，**不能**判定两个三角形全等。
    - 这是学生最容易出错的地方。在这种情况下，可能会构造出两个互补的三角形。

!!! tip "解题思路：找全等条件"
    1. **已知两边**：找夹角 (SAS) 或第三边 (SSS)。
    2. **已知两角**：找夹边 (ASA) 或其中一角的对边 (AAS)。
    3. **已知一角一边**：若是角对边，找另一角 (AAS)；若是角邻边，找另一角 (ASA) 或另一邻边 (SAS)。

---

## 辅助线的常用作法

??? abstract "倍长中线法"
    如果在三角形中看到**中线**，常见的辅助线是将中线延长一倍，构造全等三角形。这能将原本分散在两侧的边角关系集中到一个平行四边形或更大的三角形中解决。
