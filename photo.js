let video;
let frameImg;
let frameInput;

let photos = [];
let stickers = [];

let state = "ready";
// ready, countdown, flash, result

let currentShot = 0;
let totalShots = 4;

let countdownStart = 0;
let flashStart = 0;

let startBtn;
let retakeBtn;
let saveBtn;
let clearStickerBtn;

let stickerBtns = [];
let selectedSticker = "star";

// 캔버스 크기
let canvasW = 480;
let canvasH = 900;

// 프레임 안에 사진이 들어갈 4개 칸의 위치
// 네가 만든 프레임에 맞게 이 숫자만 조절하면 됨
let slots = [
    { x: 70, y: 115, w: 340, h: 155 },
    { x: 70, y: 295, w: 340, h: 155 },
    { x: 70, y: 475, w: 340, h: 155 },
    { x: 70, y: 655, w: 340, h: 155 }
];

function setup() {
    createCanvas(canvasW, canvasH);
    textFont("Arial");

    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    video.elt.setAttribute("playsinline", "");

    frameInput = createFileInput(handleFrameFile);
    frameInput.position(20, 20);

    startBtn = createButton("START");
    retakeBtn = createButton("RETAKE");
    saveBtn = createButton("SAVE");
    clearStickerBtn = createButton("CLEAR STICKERS");

    startBtn.mousePressed(startPhotoBooth);
    retakeBtn.mousePressed(retake);
    saveBtn.mousePressed(savePhotoBooth);
    clearStickerBtn.mousePressed(clearStickers);

    styleButton(startBtn);
    styleButton(retakeBtn);
    styleButton(saveBtn);
    styleButton(clearStickerBtn);

    startBtn.position(165, 840);
    retakeBtn.position(70, 840);
    saveBtn.position(175, 840);
    clearStickerBtn.position(255, 840);

    makeStickerButtons();

    retakeBtn.hide();
    saveBtn.hide();
    clearStickerBtn.hide();
    hideStickerButtons();
}

function draw() {
    background(245);

    if (state === "result") {
        drawFinalBooth(false);
        drawStickerGuide();
    } else {
        drawLiveBooth();
    }
}

function handleFrameFile(file) {
    if (file.type === "image") {
        frameImg = loadImage(file.data);
    }
}

function drawLiveBooth() {
    drawFrameBase();

    for (let i = 0; i < photos.length; i++) {
        drawImageCover(photos[i], slots[i].x, slots[i].y, slots[i].w, slots[i].h);
    }

    if (currentShot < totalShots) {
        let s = slots[currentShot];
        drawVideoCover(s.x, s.y, s.w, s.h);

        noFill();
        stroke(255, 230, 80);
        strokeWeight(5);
        rect(s.x, s.y, s.w, s.h, 12);
    }

    drawStatusText();

    if (state === "countdown") {
        drawCountdown();
    }

    if (state === "flash") {
        drawFlash();
    }
}

function drawFrameBase() {
    if (frameImg) {
        image(frameImg, 0, 0, width, height);
    } else {
        drawDefaultPhotoismFrame();
    }
}

function drawDefaultPhotoismFrame() {
    background(220, 240, 255);

    fill(255);
    stroke(170, 210, 255);
    strokeWeight(4);
    rect(45, 65, 390, 755, 28);

    fill(80, 150, 230);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(24);
    textStyle(BOLD);
    text("SUMMER COMEBACK", width / 2, 90);

    for (let i = 0; i < slots.length; i++) {
        let s = slots[i];

        fill(235, 245, 255);
        stroke(180, 220, 255);
        strokeWeight(3);
        rect(s.x, s.y, s.w, s.h, 14);

        fill(120, 170, 220);
        noStroke();
        textSize(13);
        textStyle(NORMAL);
        text(`CUT ${i + 1}`, s.x + s.w / 2, s.y + s.h / 2);
    }

    fill(80, 150, 230);
    textSize(14);
    textStyle(BOLD);
    text("K-POP FOUR CUTS", width / 2, 805);
}

function drawStatusText() {
    fill(40, 80, 140);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(15);
    textStyle(BOLD);

    if (!frameImg) {
        text("프레임 이미지를 업로드하면 그 프레임 안에 사진이 들어갑니다.", width / 2, 35);
    } else {
        text(`SHOT ${min(currentShot + 1, totalShots)} / ${totalShots}`, width / 2, 35);
    }
}

function startPhotoBooth() {
    photos = [];
    stickers = [];
    currentShot = 0;

    startBtn.hide();
    retakeBtn.hide();
    saveBtn.hide();
    clearStickerBtn.hide();
    hideStickerButtons();

    startCountdown();
}

function startCountdown() {
    state = "countdown";
    countdownStart = millis();
}

function drawCountdown() {
    let elapsed = millis() - countdownStart;
    let count = 3 - floor(elapsed / 1000);

    if (count <= 0) {
        takePhoto();
    } else {
        fill(255, 255, 255, 230);
        noStroke();
        ellipse(width / 2, height / 2, 130, 130);

        fill(70, 140, 220);
        textAlign(CENTER, CENTER);
        textSize(66);
        textStyle(BOLD);
        text(count, width / 2, height / 2);
    }
}

function takePhoto() {
    let shot = createGraphics(640, 480);

    shot.push();
    shot.translate(640, 0);
    shot.scale(-1, 1);
    shot.image(video, 0, 0, 640, 480);
    shot.pop();

    photos.push(shot);
    currentShot++;

    state = "flash";
    flashStart = millis();
}

function drawFlash() {
    fill(255, 255, 255, 210);
    noStroke();
    rect(0, 0, width, height);

    if (millis() - flashStart > 350) {
        if (currentShot < totalShots) {
            startCountdown();
        } else {
            state = "result";
            retakeBtn.show();
            saveBtn.show();
            clearStickerBtn.show();
            showStickerButtons();
        }
    }
}

function drawFinalBooth(forSave) {
    drawFrameBase();

    for (let i = 0; i < photos.length; i++) {
        drawImageCover(photos[i], slots[i].x, slots[i].y, slots[i].w, slots[i].h);
    }

    for (let i = 0; i < slots.length; i++) {
        let s = slots[i];
        noFill();
        stroke(255, 255, 255, 180);
        strokeWeight(2);
        rect(s.x, s.y, s.w, s.h, 12);
    }

    for (let i = 0; i < stickers.length; i++) {
        drawSticker(stickers[i].type, stickers[i].x, stickers[i].y, stickers[i].size, stickers[i].angle);
    }

    if (!forSave) {
        fill(40, 80, 140);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(14);
        textStyle(BOLD);
        text("스티커를 선택한 뒤 원하는 위치를 클릭하세요.", width / 2, 35);
    }
}

function drawStickerGuide() {
    fill(255, 255, 255, 220);
    noStroke();
    rect(35, 790, 410, 38, 19);

    fill(70, 120, 180);
    textAlign(CENTER, CENTER);
    textSize(13);
    textStyle(BOLD);
    text("Selected Sticker: " + selectedSticker.toUpperCase(), width / 2, 809);
}

function mousePressed() {
    if (state === "result") {
        // 버튼 영역 아래쪽은 클릭해도 스티커가 찍히지 않게 함
        if (mouseY < 780) {
            stickers.push({
                type: selectedSticker,
                x: mouseX,
                y: mouseY,
                size: random(28, 42),
                angle: random(-0.3, 0.3)
            });
        }
    }
}

function makeStickerButtons() {
    let stickerTypes = [
        { label: "STAR", type: "star" },
        { label: "HEART", type: "heart" },
        { label: "SPARKLE", type: "sparkle" },
        { label: "CROWN", type: "crown" },
        { label: "LOVE", type: "love" }
    ];

    for (let i = 0; i < stickerTypes.length; i++) {
        let btn = createButton(stickerTypes[i].label);
        btn.mousePressed(() => {
            selectedSticker = stickerTypes[i].type;
        });

        styleStickerButton(btn);
        btn.position(20 + i * 88, 795);
        stickerBtns.push(btn);
    }
}

function showStickerButtons() {
    for (let btn of stickerBtns) {
        btn.show();
    }
}

function hideStickerButtons() {
    for (let btn of stickerBtns) {
        btn.hide();
    }
}

function clearStickers() {
    stickers = [];
}

function drawSticker(type, x, y, size, angle) {
    push();
    translate(x, y);
    rotate(angle);

    if (type === "star") {
        drawStar(0, 0, size);
    } else if (type === "heart") {
        drawHeart(0, 0, size);
    } else if (type === "sparkle") {
        drawSparkle(0, 0, size);
    } else if (type === "crown") {
        drawCrown(0, 0, size);
    } else if (type === "love") {
        drawLoveSticker(0, 0, size);
    }

    pop();
}

function drawStar(x, y, r) {
    push();
    translate(x, y);

    fill(255, 235, 90);
    stroke(255);
    strokeWeight(3);

    beginShape();
    for (let i = 0; i < 10; i++) {
        let angle = -HALF_PI + i * PI / 5;
        let radius = i % 2 === 0 ? r / 2 : r / 4;
        vertex(cos(angle) * radius, sin(angle) * radius);
    }
    endShape(CLOSE);

    pop();
}

function drawHeart(x, y, s) {
    push();
    translate(x, y);
    scale(s / 40);

    fill(255, 110, 160);
    stroke(255);
    strokeWeight(3);

    beginShape();
    vertex(0, 12);
    bezierVertex(-28, -10, -18, -35, 0, -18);
    bezierVertex(18, -35, 28, -10, 0, 12);
    endShape(CLOSE);

    pop();
}

function drawSparkle(x, y, s) {
    push();
    translate(x, y);

    fill(160, 220, 255);
    stroke(255);
    strokeWeight(3);

    beginShape();
    vertex(0, -s / 2);
    vertex(s / 8, -s / 8);
    vertex(s / 2, 0);
    vertex(s / 8, s / 8);
    vertex(0, s / 2);
    vertex(-s / 8, s / 8);
    vertex(-s / 2, 0);
    vertex(-s / 8, -s / 8);
    endShape(CLOSE);

    pop();
}

function drawCrown(x, y, s) {
    push();
    translate(x, y);

    fill(255, 210, 80);
    stroke(255);
    strokeWeight(3);

    beginShape();
    vertex(-s / 2, s / 4);
    vertex(-s / 3, -s / 4);
    vertex(-s / 8, s / 8);
    vertex(0, -s / 3);
    vertex(s / 8, s / 8);
    vertex(s / 3, -s / 4);
    vertex(s / 2, s / 4);
    endShape(CLOSE);

    rect(-s / 2, s / 4, s, s / 5, 6);

    pop();
}

function drawLoveSticker(x, y, s) {
    push();
    translate(x, y);

    fill(255, 255, 255, 235);
    stroke(255, 130, 180);
    strokeWeight(3);
    rect(-s * 0.75, -s * 0.35, s * 1.5, s * 0.7, 18);

    fill(255, 90, 150);
    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(s * 0.35);
    text("LOVE", 0, 1);

    pop();
}

function drawVideoCover(x, y, w, h) {
    let videoW = video.width;
    let videoH = video.height;

    let sourceAspect = videoW / videoH;
    let targetAspect = w / h;

    let sx, sy, sw, sh;

    if (sourceAspect > targetAspect) {
        sh = videoH;
        sw = sh * targetAspect;
        sx = (videoW - sw) / 2;
        sy = 0;
    } else {
        sw = videoW;
        sh = sw / targetAspect;
        sx = 0;
        sy = (videoH - sh) / 2;
    }

    push();
    translate(x + w, y);
    scale(-1, 1);
    image(video, 0, 0, w, h, sx, sy, sw, sh);
    pop();
}

function drawImageCover(img, x, y, w, h) {
    let sourceAspect = img.width / img.height;
    let targetAspect = w / h;

    let sx, sy, sw, sh;

    if (sourceAspect > targetAspect) {
        sh = img.height;
        sw = sh * targetAspect;
        sx = (img.width - sw) / 2;
        sy = 0;
    } else {
        sw = img.width;
        sh = sw / targetAspect;
        sx = 0;
        sy = (img.height - sh) / 2;
    }

    image(img, x, y, w, h, sx, sy, sw, sh);
}

function retake() {
    photos = [];
    stickers = [];
    currentShot = 0;
    state = "ready";

    startBtn.show();
    retakeBtn.hide();
    saveBtn.hide();
    clearStickerBtn.hide();
    hideStickerButtons();
}

function savePhotoBooth() {
    // 저장할 때는 안내 문구 없이 현재 캔버스를 저장
    saveCanvas("kpop_photo_booth_with_stickers", "png");
}

function styleButton(btn) {
    btn.style("padding", "10px 16px");
    btn.style("font-size", "13px");
    btn.style("font-weight", "bold");
    btn.style("border", "none");
    btn.style("border-radius", "999px");
    btn.style("background", "#6aaefc");
    btn.style("color", "white");
    btn.style("cursor", "pointer");
}

function styleStickerButton(btn) {
    btn.style("padding", "8px 10px");
    btn.style("font-size", "11px");
    btn.style("font-weight", "bold");
    btn.style("border", "none");
    btn.style("border-radius", "999px");
    btn.style("background", "#ffffff");
    btn.style("color", "#4a86d9");
    btn.style("cursor", "pointer");
    btn.style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)");
}