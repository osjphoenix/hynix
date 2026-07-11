let port;
let video = null;
let frameImg;

let photos = [];
let stickers = [];

let state = "ready";
let countdownValue = 0;

let currentShot = 0;
let totalShots = 4; // 기본 4컷
let flashStart = 0;

let connectBtn;
let retakeBtn;
let saveBtn;
let clearStickerBtn;

let stickerBtns = [];
let selectedSticker = "star";

// 상단, 서브, 하단 문구 입력창 변수
let topInput;
let subInput;
let bottomInput;

let serialBuffer = "";

let canvasW = 500;
let canvasH = 620;
let slots = [];

let frameLeft = 20;
let frameTop = 95;
let frameW = 290;
let frameH = 570;
let sidebarX = 330;

const frameColors = [
    { bg: "#FFE4E1", text: "#D87093", pastel: "#FFF0F5" }, // 0: 로즈
    { bg: "#D4E6F1", text: "#2980B9", pastel: "#EBF5FB" }, // 1: 블루
    { bg: "#FFF8DC", text: "#D35400", pastel: "#FEF9E7" }, // 2: 크림
    { bg: "#FFFFFF", text: "#2C3E50", pastel: "#F8F9FA" }, // 3: 화이트
    { bg: "#E8DAEF", text: "#8E44AD", pastel: "#F5EEF8" }, // 4: 모브
    { bg: "#D1F2EB", text: "#16A085", pastel: "#E8F8F5" }  // 5: 민트
];
let currentFrameColor = 0;

function setup() {
    createCanvas(canvasW, canvasH);
    textFont("Arial");

    connectBtn = createButton("디스플레이 연결");
    retakeBtn = createButton("다시 촬영하기");
    saveBtn = createButton("QR코드 출력");
    clearStickerBtn = createButton("다시 꾸미기");

    topInput = createInput("TEAM 1");
    subInput = createInput("SUMMER COMEBACK");
    bottomInput = createInput("K-POP FOUR CUTS");

    connectBtn.mousePressed(connectSerial);
    retakeBtn.mousePressed(retake);
    saveBtn.mousePressed(savePhotoBooth);
    clearStickerBtn.mousePressed(clearStickers);

    styleButton(connectBtn, "#5758BB", "#FFFFFF");
    styleButton(retakeBtn, "#ECEFF1", "#2C3E50", false);
    styleButton(saveBtn, "#10AC84", "#FFFFFF");
    styleButton(clearStickerBtn, "#FFEAA7", "#D35400", false);

    styleTextInput(topInput);
    styleTextInput(subInput);
    styleTextInput(bottomInput);

    makeStickerButtons();
    updateLayout(4);

    retakeBtn.hide();
    saveBtn.hide();
    clearStickerBtn.hide();
    topInput.hide();
    subInput.hide();
    bottomInput.hide();
    hideStickerButtons();
}

function updateLayout(cuts) {
    totalShots = cuts;
    slots = [];

    if (cuts === 4) bottomInput.value("K-POP FOUR CUTS");
    else if (cuts === 6) bottomInput.value("K-POP SIX CUTS");
    else if (cuts === 8) bottomInput.value("K-POP EIGHT CUTS");

    let cols = (cuts === 4) ? 1 : 2;
    let rows = Math.ceil(cuts / cols);

    let slotW = (cuts === 4) ? 250 : 140;
    let slotH = (cuts === 4) ? 110 : 105;
    let gap = 15;
    let padX = 20;
    let padYTop = 45;
    let padYBot = 45;

    frameW = (cols * slotW) + ((cols - 1) * gap) + (padX * 2);
    frameH = (rows * slotH) + ((rows - 1) * gap) + padYTop + padYBot;

    let startX = frameLeft + padX;
    let startY = frameTop + padYTop;

    sidebarX = frameLeft + frameW + 20;
    canvasW = sidebarX + 180;
    canvasH = max(frameTop + frameH + 25, 600);

    resizeCanvas(canvasW, canvasH);

    for (let i = 0; i < cuts; i++) {
        let c = i % cols;
        let r = Math.floor(i / cols);
        slots.push({
            x: startX + c * (slotW + gap),
            y: startY + r * (slotH + gap),
            w: slotW,
            h: slotH
        });
    }

    if (connectBtn) {
        let btnW = 144;
        let btnLeft = sidebarX + 18;

        connectBtn.position(btnLeft, 25);
        connectBtn.style("width", btnW + "px");
        connectBtn.style("height", "40px");

        for (let i = 0; i < stickerBtns.length; i++) {
            let btn = stickerBtns[i];
            if (i < 4) {
                let col = i % 2;
                let row = floor(i / 2);
                btn.position(btnLeft + col * 74, 155 + row * 40);
                btn.style("width", "70px");
            } else {
                btn.position(btnLeft, 235);
                btn.style("width", btnW + "px");
            }
        }

        if (clearStickerBtn) {
            clearStickerBtn.position(btnLeft, 275);
            clearStickerBtn.style("width", btnW + "px");
            clearStickerBtn.style("height", "34px");
        }

        if (topInput && subInput && bottomInput) {
            topInput.position(btnLeft, 340);
            topInput.style("width", btnW + "px");
            topInput.style("height", "26px");

            subInput.position(btnLeft, 372);
            subInput.style("width", btnW + "px");
            subInput.style("height", "26px");

            bottomInput.position(btnLeft, 404);
            bottomInput.style("width", btnW + "px");
            bottomInput.style("height", "26px");
        }

        if (saveBtn && retakeBtn) {
            saveBtn.position(btnLeft, 465);
            saveBtn.style("width", btnW + "px");
            saveBtn.style("height", "45px");

            retakeBtn.position(btnLeft, 518);
            retakeBtn.style("width", btnW + "px");
            retakeBtn.style("height", "38px");
        }
    }
}

function startCamera() {
    if (!video) {
        video = createCapture(VIDEO);
        video.size(640, 480);
        video.hide();
        video.elt.setAttribute("playsinline", "");
    }
}

function stopCamera() {
    if (video) {
        let stream = video.elt.srcObject;
        if (stream) stream.getTracks().forEach(track => track.stop());
        video.remove();
        video = null;
    }
}

function draw() {
    background(frameColors[currentFrameColor].pastel);
    if (state === "result") drawFinalBooth(false);
    else drawLiveBooth();

    drawSidebarUI();
}

function drawSidebarUI() {
    push();
    fill("#F8F9FA"); noStroke(); rect(sidebarX, 0, 180, height);
    stroke("#E4E7EB"); strokeWeight(2); line(sidebarX, 0, sidebarX, height);

    fill("#2C3E50"); noStroke(); textAlign(CENTER, CENTER); textSize(13); textStyle(BOLD);

    if (state === "result") {
        text("원하는 스티커를 골라\n사진을 꾸며보세요!", sidebarX + 90, 75);

        fill("#FFFFFF"); stroke("#E4E7EB"); strokeWeight(1);
        rect(sidebarX + 12, 115, 156, 200, 12);
        noStroke(); fill("#57606F"); textSize(11); textStyle(BOLD);
        text("스티커 꾸미기", sidebarX + 90, 135);

        fill("#FFFFFF"); stroke("#E4E7EB"); strokeWeight(1);
        rect(sidebarX + 12, 315, 156, 125, 12);
        noStroke(); fill("#57606F"); textSize(11); textStyle(BOLD);
        text("프레임 문구 변경", sidebarX + 90, 330);

    } else {
        if (video) text(`현재 촬영: ${min(currentShot + 1, totalShots)} / ${totalShots} 컷`, sidebarX + 90, 80);
    }
    pop();
}

async function connectSerial() {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
        connectBtn.hide();
        await writeSerial("PAGE:1\n");

        const decoder = new TextDecoderStream();
        port.readable.pipeTo(decoder.writable);
        const reader = decoder.readable.getReader();
        serialBuffer = "";
        readLoop(reader);
    } catch (err) {
        console.error("Serial connection failed", err);
    }
}

async function writeSerial(data) {
    if (port && port.writable) {
        const encoder = new TextEncoder();
        const writer = port.writable.getWriter();
        await writer.write(encoder.encode(data));
        writer.releaseLock();
    }
}

async function readLoop(reader) {
    const { value, done } = await reader.read();
    if (done) { reader.releaseLock(); return; }

    if (value) {
        serialBuffer += value;
        let lines = serialBuffer.split('\n');

        for (let i = 0; i < lines.length - 1; i++) {
            let cmd = lines[i].trim();

            if (cmd.startsWith("CONFIG:")) {
                let parts = cmd.replace("CONFIG:", "").split(",");
                let colorIdx = int(parts[0]);
                let cuts = int(parts[1]);
                currentFrameColor = constrain(colorIdx, 0, 5);
                updateLayout(cuts);
            }
            if (cmd.includes("COUNT:")) {
                if (!video) startCamera();
                countdownValue = int(cmd.replace("COUNT:", ""));
                state = "countdown";
            }
            if (cmd.includes("TAKE_PHOTO")) {
                countdownValue = 0;
                externalTakePhoto();
            }
        }
        serialBuffer = lines[lines.length - 1];
    }
    readLoop(reader);
}

function externalTakePhoto() {
    if (state === "result" || currentShot >= totalShots) {
        photos = []; stickers = []; currentShot = 0;
        retakeBtn.hide(); saveBtn.hide(); clearStickerBtn.hide(); hideStickerButtons();
        topInput.hide(); subInput.hide(); bottomInput.hide();
    }
    if (currentShot < totalShots && video && video.width > 0) {
        let shot = createGraphics(640, 480);
        shot.push(); shot.translate(640, 0); shot.scale(-1, 1); shot.image(video, 0, 0, 640, 480); shot.pop();
        photos.push(shot);
        currentShot++;
        state = "flash";
        flashStart = millis();
    }
}

function drawLiveBooth() {
    drawFrameBase();

    let theme = frameColors[currentFrameColor];
    for (let i = 0; i < photos.length; i++) {
        drawImageCover(photos[i], slots[i].x, slots[i].y, slots[i].w, slots[i].h);
        drawSlotOverlays(slots[i].x, slots[i].y, slots[i].w, slots[i].h, i, theme);
    }

    // ⭐ [수정] 대기 상태('ready')가 아닐 때(촬영이 시작된 후)에만 비디오와 노란색 활성화 테두리를 그립니다.
    if (state !== "ready" && currentShot < totalShots) {
        let s = slots[currentShot];
        drawVideoCover(s.x, s.y, s.w, s.h);
        noFill();
        stroke(255, 230, 80);
        strokeWeight(5);
        rect(s.x, s.y, s.w, s.h);
    }
    if (state === "countdown") drawCountdown();
    if (state === "flash") drawFlash();
}

function drawCountdown() {
    if (countdownValue > 0) {
        push();
        let centerX = frameLeft + frameW / 2;
        fill(255, 255, 255, 200); noStroke(); ellipse(centerX, height / 2, 110, 110);
        fill(frameColors[currentFrameColor].text);
        textAlign(CENTER, CENTER); textSize(64); textStyle(BOLD);
        text(countdownValue, centerX, height / 2 - 5);
        pop();
    }
}

function drawFrameBase() {
    let theme = frameColors[currentFrameColor];
    let centerX = frameLeft + frameW / 2;

    fill(theme.text); noStroke(); textAlign(CENTER, CENTER);
    textSize(22); textStyle(BOLD);
    let tText = topInput.value() || "TEAM 1";
    text(tText, centerX, 35);

    textSize(15);
    let sText = subInput.value() || "SUMMER COMEBACK";
    text(sText, centerX, 62);

    fill(255);
    noStroke();
    rect(frameLeft, frameTop, frameW, frameH);

    fill(theme.text); noStroke(); textSize(14); textStyle(BOLD);
    let bText = bottomInput.value() || "K-POP FOUR CUTS";
    text(bText, centerX, frameTop + 24);

    // ⭐ 사진 찍기 전 빈 슬롯 배경
    for (let i = 0; i < slots.length; i++) {
        let s = slots[i];
        if (i >= photos.length) {
            fill(theme.bg);
            noStroke();
            rect(s.x, s.y, s.w, s.h);

            fill(theme.text); noStroke(); textSize(13); textStyle(NORMAL);
            text(`CUT ${i + 1}`, s.x + s.w / 2, s.y + s.h / 2);
        }
    }

    fill(theme.text); textSize(10); textStyle(NORMAL);
    text("blue filter · star stickers · summer mood", centerX, frameTop + frameH - 22);
}

function drawSlotOverlays(x, y, w, h, index, theme) {
    let isSmall = (w < 200);

    drawWhiteStar(x + w - (isSmall ? 15 : 22), y + (isSmall ? 15 : 22), isSmall ? 10 : 16);
    drawWhiteStar(x + (isSmall ? 15 : 22), y + h - (isSmall ? 15 : 20), isSmall ? 8 : 12);

    push();
    rectMode(CORNER); noStroke(); fill(theme.text);
    let badgeW = isSmall ? 65 : 95;
    let badgeH = isSmall ? 12 : 16;
    rect(x + (isSmall ? 6 : 10), y + (isSmall ? 6 : 10), badgeW, badgeH);

    fill(255); textAlign(CENTER, CENTER); textSize(isSmall ? 5 : 7.5); textStyle(BOLD);
    let badgeText = subInput.value() || "SUMMER COMEBACK";
    text(badgeText, x + (isSmall ? 6 : 10) + badgeW / 2, y + (isSmall ? 6 : 10) + badgeH / 2);
    pop();

    const cutLabels = ["DEBUT", "SUMMER", "STAGE", "ENDING FAIRY", "BEHIND", "FINALE", "ENCORE", "WORLD TOUR"];
    let labelText = `CUT ${index + 1} · ${cutLabels[index % cutLabels.length]}`;

    push();
    rectMode(CORNER); fill(255, 240); noStroke();
    let lblW = isSmall ? 55 : 68;
    let lblH = isSmall ? 10 : 14;
    rect(x + w - lblW - (isSmall ? 6 : 10), y + h - lblH - (isSmall ? 6 : 10), lblW, lblH);

    fill(theme.text); textAlign(CENTER, CENTER); textSize(isSmall ? 5.5 : 7); textStyle(BOLD);
    text(labelText, x + w - lblW / 2 - (isSmall ? 6 : 10), y + h - lblH / 2 - (isSmall ? 6 : 10));
    pop();
}

function drawWhiteStar(cx, cy, r) {
    push(); translate(cx, cy); fill(255); noStroke(); beginShape();
    for (let i = 0; i < 10; i++) {
        let angle = -HALF_PI + i * PI / 5;
        let radius = i % 2 === 0 ? r / 2 : r / 4;
        vertex(cos(angle) * radius, sin(angle) * radius);
    }
    endShape(CLOSE); pop();
}

function drawFlash() {
    fill(255, 255, 255, 210); noStroke(); rect(0, 0, sidebarX, height);
    if (millis() - flashStart > 350) {
        if (currentShot < totalShots) state = "shooting";
        else {
            state = "result";
            stopCamera();
            retakeBtn.show();
            saveBtn.show();
            clearStickerBtn.show();
            showStickerButtons();
            topInput.show();
            subInput.show();
            bottomInput.show();
        }
    }
}

function drawFinalBooth(forSave) {
    drawFrameBase();

    let theme = frameColors[currentFrameColor];
    for (let i = 0; i < photos.length; i++) {
        drawImageCover(photos[i], slots[i].x, slots[i].y, slots[i].w, slots[i].h);
        drawSlotOverlays(slots[i].x, slots[i].y, slots[i].w, slots[i].h, i, theme);
    }

    for (let i = 0; i < slots.length; i++) {
        let s = slots[i]; noFill(); stroke(255, 255, 255, 180); strokeWeight(2);
        rect(s.x, s.y, s.w, s.h);
    }
    for (let i = 0; i < stickers.length; i++) drawSticker(stickers[i].type, stickers[i].x, stickers[i].y, stickers[i].size, stickers[i].angle);
}

function mousePressed() {
    if (state === "result") {
        if (mouseX > frameLeft && mouseX < frameLeft + frameW && mouseY > frameTop && mouseY < frameTop + frameH) {
            stickers.push({ type: selectedSticker, x: mouseX, y: mouseY, size: random(20, 30), angle: random(-0.3, 0.3) });
        }
    }
}

function makeStickerButtons() {
    let stickerTypes = [
        { label: "Star", type: "star", color: "#F1C40F", bg: "#FEF9E7" },
        { label: "Heart", type: "heart", color: "#E74C3C", bg: "#FDEDEC" },
        { label: "Sparkle", type: "sparkle", color: "#2980B9", bg: "#1ceefd" },
        { label: "Crown", type: "crown", color: "#E67E22", bg: "#FDF2E9" },
        { label: "Love", type: "love", color: "#9B59B6", bg: "#F5EEF8" }
    ];
    for (let i = 0; i < stickerTypes.length; i++) {
        let btn = createButton(stickerTypes[i].label);
        btn.stickerType = stickerTypes[i].type; btn.myColor = stickerTypes[i].color; btn.myBg = stickerTypes[i].bg;
        btn.mousePressed(() => { selectedSticker = btn.stickerType; updateStickerButtonHighlight(); });
        styleStickerButton(btn);
        btn.style("height", "34px");
        stickerBtns.push(btn);
    }
    updateStickerButtonHighlight();
}

function updateStickerButtonHighlight() {
    for (let btn of stickerBtns) {
        if (btn.stickerType === selectedSticker) {
            btn.style("border", "2.5px solid " + btn.myColor); btn.style("background", btn.myBg); btn.style("color", btn.myColor); btn.style("font-weight", "bold");
        } else {
            btn.style("border", "1px solid #DFE4EA"); btn.style("background", "#FFFFFF"); btn.style("color", btn.myColor); btn.style("font-weight", "normal");
        }
    }
}

function showStickerButtons() { for (let btn of stickerBtns) btn.show(); updateStickerButtonHighlight(); }
function hideStickerButtons() { for (let btn of stickerBtns) btn.hide(); }
function clearStickers() { stickers = []; }

function drawSticker(type, x, y, size, angle) {
    push(); translate(x, y); rotate(angle);
    if (type === "star") drawStar(0, 0, size);
    else if (type === "heart") drawHeart(0, 0, size);
    else if (type === "sparkle") drawSparkle(0, 0, size);
    else if (type === "crown") drawCrown(0, 0, size);
    else if (type === "love") drawLoveSticker(0, 0, size);
    pop();
}

function drawStar(x, y, r) { push(); translate(x, y); fill(255, 235, 90); stroke(255); strokeWeight(2); beginShape(); for (let i = 0; i < 10; i++) { let angle = -HALF_PI + i * PI / 5; let radius = i % 2 === 0 ? r / 2 : r / 4; vertex(cos(angle) * radius, sin(angle) * radius); } endShape(CLOSE); pop(); }
function drawHeart(x, y, s) { push(); translate(x, y); scale(s / 40); fill(255, 110, 160); stroke(255); strokeWeight(2.5); beginShape(); for (let angle = 0; angle < TWO_PI; angle += 0.1) { let hx = 16 * pow(sin(angle), 3); let hy = -(13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle)); vertex(hx * 1.05, hy * 1.05 + 2); } endShape(CLOSE); pop(); }
function drawSparkle(x, y, s) { push(); translate(x, y); fill(160, 220, 255); stroke(255); strokeWeight(2); beginShape(); vertex(0, -s / 2); vertex(s / 8, -s / 8); vertex(s / 2, 0); vertex(s / 8, s / 8); vertex(0, s / 2); vertex(-s / 8, s / 8); vertex(-s / 2, 0); vertex(-s / 8, -s / 8); endShape(CLOSE); pop(); }
function drawCrown(x, y, s) { push(); translate(x, y); fill(255, 210, 80); stroke(255); strokeWeight(2); beginShape(); vertex(-s / 2, s / 4); vertex(-s / 3, -s / 4); vertex(-s / 8, s / 8); vertex(0, -s / 3); vertex(s / 8, s / 8); vertex(s / 3, -s / 4); vertex(s / 2, s / 4); endShape(CLOSE); rect(-s / 2, s / 4, s, s / 5, 4); pop(); }
function drawLoveSticker(x, y, s) { push(); translate(x, y); fill(255, 255, 255, 235); stroke(255, 130, 180); strokeWeight(2); rect(-s * 0.75, -s * 0.35, s * 1.5, s * 0.7, 12); fill(255, 90, 150); noStroke(); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(s * 0.35); text("LOVE", 0, 1); pop(); }

function drawVideoCover(x, y, w, h) {
    if (!video || video.width === 0 || video.height === 0) { push(); fill(235, 245, 255); noStroke(); rect(x, y, w, h); pop(); return; }
    let videoW = video.width; let videoH = video.height; let sourceAspect = videoW / videoH; let targetAspect = w / h; let sx, sy, sw, sh;
    if (sourceAspect > targetAspect) { sh = video.height; sw = sh * targetAspect; sx = (videoW - sw) / 2; sy = 0; } else { sw = video.width; sh = sw / targetAspect; sx = 0; sy = (videoH - sh) / 2; }
    push(); translate(x + w, y); scale(-1, 1); image(video, 0, 0, w, h, sx, sy, sw, sh); pop();
}

function drawImageCover(img, x, y, w, h) {
    if (!img || img.width === 0 || img.height === 0) return;
    let sourceAspect = img.width / img.height; let targetAspect = w / h; let sx, sy, sw, sh;
    if (sourceAspect > targetAspect) { sh = img.height; sw = sh * targetAspect; sx = (img.width - sw) / 2; sy = 0; } else { sw = img.width; sh = sw / targetAspect; sx = 0; sy = (img.height - sh) / 2; }
    image(img, x, y, w, h, sx, sy, sw, sh);
}

function retake() {
    photos = []; stickers = []; currentShot = 0; state = "ready"; stopCamera();
    currentFrameColor = 0;
    updateLayout(4);
    writeSerial("PAGE:1\n");

    connectBtn.show(); retakeBtn.hide(); saveBtn.hide(); clearStickerBtn.hide(); hideStickerButtons();
    topInput.hide(); subInput.hide(); bottomInput.hide();
}

function savePhotoBooth() {
    let resultImage = get(0, 0, sidebarX, height);
    console.log("☁️ 전용 다운로드 페이지 생성 중...");

    let base64Data = resultImage.canvas.toDataURL("image/png").split(',')[1];
    let apiKey = "f5dbf3d172afdf4d235df31c5f017d60";

    let formData = new FormData(); formData.append("image", base64Data);

    fetch("https://api.imgbb.com/1/upload?key=" + apiKey, { method: "POST", body: formData })
        .then(response => { if (!response.ok) throw new Error("서버 응답 실패"); return response.json(); })
        .then(data => {
            if (data.success) {
                let viewerUrl = data.data.url_viewer;
                console.log("☁️ 페이지 생성 성공! 주소: " + viewerUrl);
                writeSerial("QR:" + viewerUrl + "\n");
            } else console.error("업로드 반환 데이터 이상:", data);
        }).catch(error => { console.error("클라우드 서버 전송 실패:", error); });
}

function styleTextInput(inp) {
    inp.style("padding", "0px 8px");
    inp.style("font-size", "11px");
    inp.style("font-weight", "bold");
    inp.style("border", "1.5px solid #DFE4EA");
    inp.style("border-radius", "8px");
    inp.style("outline", "none");
    inp.style("color", "#5758BB");
    inp.style("text-align", "center");
    inp.style("box-sizing", "border-box");
    inp.style("transition", "all 0.15s ease");
}

function styleButton(btn, bgColor, textColor, isBold = true) {
    btn.style("padding", "0px 10px"); btn.style("font-size", "12px"); btn.style("font-weight", isBold ? "bold" : "normal");
    btn.style("border", "none"); btn.style("border-radius", "10px"); btn.style("background", bgColor);
    btn.style("color", textColor); btn.style("cursor", "pointer"); btn.style("box-shadow", "0 2px 5px rgba(0,0,0,0.06)"); btn.style("transition", "all 0.15s ease");
}
function styleStickerButton(btn) { btn.style("border-radius", "8px"); btn.style("font-size", "10px"); btn.style("cursor", "pointer"); btn.style("transition", "all 0.15s ease"); }