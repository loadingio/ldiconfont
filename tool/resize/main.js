const fs = require('fs');
const path = require('path');
const et = require('elementtree');
const svgpath = require('svgpath');
const SVGFixer = require("oslllo-svg-fixer"); // 您原本使用的 fixer

// 設定目標 ViewBox 大小
const TARGET_SIZE = 1200;

async function processSvgs() {
    const inputDir = path.resolve('../../src/vector-files/claude-24/light-svg/');
    const tempDir = path.resolve('temp_scaled_svgs'); // 中間暫存檔
    const outputDir = path.resolve('output_svgs');

    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    // 步驟 1: 先讀取原始 SVG，將 Path 放大並修改 ViewBox
    // 這樣丟給 oslllo-svg-fixer 時，它處理的就是已經放大過的圖形
    const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg'));
    
    for (const file of files) {
        const rawXml = fs.readFileSync(path.join(inputDir, file), 'utf-8');
        const xml = et.parse(rawXml);
        const root = xml.getroot();

        // 取得原始 ViewBox 或 Width/Height
        let w = parseFloat(root.get('width'));
        let h = parseFloat(root.get('height'));
        let viewBox = root.get('viewBox');

        if (viewBox) {
            const parts = viewBox.split(/[\s,]+/).map(parseFloat);
            w = parts[2]; // width
            h = parts[3]; // height
        }
        
        // 如果找不到尺寸，預設 24 (視您的情況調整)
        if (!w) w = 24; 
        
        // 計算縮放倍率 (Scale Factor)
        const scale = TARGET_SIZE / w; 
        
        // 修改 ViewBox 屬性
        root.set('viewBox', `0 0 ${TARGET_SIZE} ${TARGET_SIZE}`);
        root.set('width', TARGET_SIZE);
        root.set('height', TARGET_SIZE);

        // 找到所有的 path 並縮放其 d 屬性
        const paths = root.findall('.//path');
        paths.forEach(p => {
            const d = p.get('d');
            if (d) {
                // 使用 svgpath 進行縮放
                const scaledD = svgpath(d)
                    .scale(scale)
                    .round(1) // 小數點後保留 1 位，避免浮點數過長
                    .toString();
                p.set('d', scaledD);
            }
        });
        
        // 也要處理 rect, circle 等 (若尚未轉 path)
        // 簡單做法：這步只處理 path，剩下的 rect/circle 交給 oslllo-svg-fixer 處理
        // 但 oslllo 處理的是視覺，如果我們這裡沒放大 rect，它位置會跑掉。
        // 所以最保險的做法是：先讓 oslllo 把所有東西轉成 path (不縮放)，
        // 產出後再執行一次這個腳本進行縮放。
        
        fs.writeFileSync(path.join(tempDir, file), xml.write());
    }

    console.log("預處理縮放完成，開始執行 Fixer...");

    // 步驟 2: 執行 oslllo-svg-fixer (合併路徑 + Outline Stroke)
    // 這裡我們把「已經放大」的 SVG 丟進去修復
    const options = {
        showProgressBar: true,
        throwIfDestinationDoesNotExist: false,
    };

    await SVGFixer(tempDir, outputDir, options).fix();
    
    console.log("全部完成！檔案位於:", outputDir);
    
    // 可選：刪除暫存資料夾
    // fs.rmSync(tempDir, { recursive: true, force: true });
}

processSvgs();
