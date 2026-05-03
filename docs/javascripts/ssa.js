/**
 * SSA (Side-Side-Angle) 交互模型封装
 * @param {string} containerId - 容器 ID
 * @param {Array} pointC - 点 C 的初始坐标 [x, y]
 */
function createSSAIllustration(containerId, pointC = [4, 4]) {
    // 动态生成内部容器，保持 aspect-ratio 比例
    const wrapper = document.getElementById(containerId);
    if (!wrapper) return;

    wrapper.innerHTML = `<div id="${containerId}-jxg" class="jxgbox" style="width:100%; aspect-ratio: 4/3; border: 2px solid #34495e; background-color: #fcfcfc; border-radius: 8px; touch-action: none;"></div>`;

    const board = JXG.JSXGraph.initBoard(`${containerId}-jxg`, {
        boundingbox: [-2, 9, 12, -2],
        axis: false,
        grid: true,
        showCopyright: false,
        showNavigation: false
    });

    // 1. 基础点与射线 (Ray)
    const A = board.create('point', [0, 0], { name: 'A', fixed: true, color: '#2c3e50', size: 4 });
    const pDir = board.create('point', [1, 0], { visible: false, fixed: true });
    const xAxis = board.create('line', [A, pDir], { visible: false });
    const rayA = board.create('line', [A, pDir], {
        strokeColor: '#7f8c8d',
        strokeWidth: 2,
        straightFirst: false,
        straightLast: true
    });

    // 2. 已知边 b (AC)
    const C = board.create('point', pointC, { name: 'C', color: '#2980b9', size: 5 });
    const segAC = board.create('segment', [A, C], { name: 'b', withLabel: true, strokeColor: '#2980b9', strokeWidth: 3 });
    board.create('angle', [pDir, A, C], { name: '∠A', type: 'sector', radius: 1, color: '#8e44ad', fillOpacity: 0.2 });

    // 3. 边 a 控制滑块
    const sliderA = board.create('slider', [[1, 8], [7, 8], [2, 4.5, 9]], { name: 'a', snapWidth: 0.1, strokeColor: '#c0392b', fillColor: '#e74c3c' });

    // 4. 交点逻辑
    const circleC = board.create('circle', [C, function () { return sliderA.Value(); }], { strokeColor: '#e74c3c', dash: 2, strokeWidth: 1 });
    const B1 = board.create('intersection', [circleC, xAxis, 0], { name: 'B1', color: '#c0392b', size: 4 });
    const B2 = board.create('intersection', [circleC, xAxis, 1], { name: 'B2', color: '#c0392b', size: 4 });

    // 5. 可见性判定逻辑
    const checkVisible = (p) => !isNaN(p.X()) && p.X() > 0.01; // 增加微小偏置防止重合点抖动

    B1.setAttribute({ visible: () => checkVisible(B1) });
    B2.setAttribute({ visible: () => checkVisible(B2) });

    // 6. 多边形与边线绘制
    const poly1 = board.create('polygon', [A, B1, C], { fillColor: '#f1c40f', fillOpacity: 0.3, borders: { visible: false } });
    poly1.setAttribute({ visible: () => checkVisible(B1) });

    const poly2 = board.create('polygon', [A, B2, C], { fillColor: '#2ecc71', fillOpacity: 0.4, borders: { visible: false } });
    poly2.setAttribute({ visible: () => checkVisible(B2) });

    const segA1 = board.create('segment', [C, B1], { strokeColor: '#e74c3c', strokeWidth: 3, name: 'a', withLabel: true });
    segA1.setAttribute({ visible: () => checkVisible(B1) });

    const segA2 = board.create('segment', [C, B2], { strokeColor: '#e74c3c', strokeWidth: 3, dash: 2 });
    segA2.setAttribute({ visible: () => checkVisible(B2) });

    // 7. 文字反馈
    board.create('text', [0.5, 7.2, () => {
        const a = sliderA.Value(), b = A.Dist(C), h = C.Y();
        return `已知: ∠A, b=${b.toFixed(1)}, a=${a.toFixed(1)} (高h=${h.toFixed(1)})`;
    }], { fontSize: 14 });

    board.create('text', [0.5, 6.6, () => {
        const a = sliderA.Value(), b = A.Dist(C), h = C.Y();
        if (a < h - 0.05) return "🔴 0个三角形 (a < h)";
        if (Math.abs(a - h) < 0.1) return "🟡 1个直角三角形 (a ≈ h)";
        if (a >= b - 0.05) return "🔵 1个三角形 (a ≥ b)";
        return "🟢 2个三角形 (h < a < b) -> SSA不成立";
    }], { fontSize: 16, cssStyle: 'font-weight: bold' });

    return board;
}