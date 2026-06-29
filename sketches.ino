/* =====================================================================
 *  [Sogang Studio] 인생네컷 키오스크 만들기 프로젝트 📸
 * ===================================================================== */

// ---------------------------------------------------------------------
// 1. 필요한 기능(라이브러리) 및 배경 이미지 가져오기
// ---------------------------------------------------------------------
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ILI9341.h>
#include <U8g2_for_Adafruit_GFX.h>
#include <XPT2046_Touchscreen.h>

#include "bg1.h"
#include "bg2.h"
#include "bg3.h"
#include "bg4.h"
#include "bg5.h"
#include "bg6.h"

// ---------------------------------------------------------------------
// 2. 색상 이름표 만들기 (16진수 색상 코드)
// ---------------------------------------------------------------------
#define BROWN   0x8A22  // 갈색
#define BLACK   0x0000  // 검정색
#define WHITE   0xFFFF  // 흰색
#define RED     0xF800  // 빨간색
#define HILITE  0xF800  // 선택 테두리 강조색 (빨강)

#define ROSE    0xD4B5
#define BLUE    0x8476
#define CREAM   0xEED6
#define MAUVE   0xC410
#define MINT    0x9736

// ---------------------------------------------------------------------
// 3. 화면과 터치 센서 준비하기
// ---------------------------------------------------------------------
SPIClass tftSPI(HSPI);
Adafruit_ILI9341 tft(&tftSPI, 2, 15, -1);
U8G2_FOR_ADAFRUIT_GFX u8f;

SPIClass touchSPI(VSPI);
XPT2046_Touchscreen touch(33);

// ---------------------------------------------------------------------
// 4. 상태를 기억하는 변수들
// ---------------------------------------------------------------------
int page = 1;         // 현재 화면 페이지 번호
int color = 0;        // 선택한 색상 번호 (0~5)
int photo = 4;        // 선택한 컷 수 (4, 6, 8)
int amount = 1;       // 출력할 수량 (기본 1장)
bool touched = false; // 터치 잠금장치

// ---------------------------------------------------------------------
// 5. 가격을 계산해주는 함수
// ---------------------------------------------------------------------
int price() {
  int Price = 4000;              // 기본 4컷 가격
  if (photo == 6) Price = 5000;  // 6컷이면 5000원
  if (photo == 8) Price = 6000;  // 8컷이면 6000원
  
  return Price * amount;         // (기본 가격) x (수량) 반환
}

// 글씨 쓰기 도우미 함수
void printTxt(int x, int y, String text, uint16_t c) {
  u8f.setForegroundColor(c); 
  u8f.setCursor(x, y);       
  u8f.print(text);           
}

// =====================================================================
// 6. 각 화면(페이지) 그리기 설명서
// =====================================================================

void page1() {
  tft.drawRGBBitmap(0, 0, bg1, 320, 240); 
}

void page2() {
  tft.drawRGBBitmap(0, 0, bg2, 320, 240);
  
  // --- 1. 색상 선택 테두리 그리기 ---
  if (color == 0) {
    tft.drawCircle(29, 80, 18, HILITE);
    tft.drawCircle(29, 80, 19, HILITE);
  }
  if (color == 1) {
    tft.drawCircle(81, 80, 18, HILITE);
    tft.drawCircle(81, 80, 19, HILITE);
  }
  if (color == 2) {
    tft.drawCircle(133, 80, 18, HILITE);
    tft.drawCircle(133, 80, 19, HILITE);
  }
  if (color == 3) {
    tft.drawCircle(185, 80, 18, HILITE);
    tft.drawCircle(185, 80, 19, HILITE);
  }
  if (color == 4) {
    tft.drawCircle(237, 80, 18, HILITE);
    tft.drawCircle(237, 80, 19, HILITE);
  }
  if (color == 5) {
    tft.drawCircle(289, 80, 18, HILITE);
    tft.drawCircle(289, 80, 19, HILITE);
  }

  // --- 2. 컷 수 표시 (4, 6, 8컷) ---
  printTxt(45, 140, "4컷", (photo == 4) ? RED : BLACK); 
  printTxt(145, 140, "6컷", (photo == 6) ? RED : BLACK);
  printTxt(245, 140, "8컷", (photo == 8) ? RED : BLACK);

  // --- 3. 수량 표시 (+, -) ---
  printTxt(155, 185, String(amount), BLACK); 

  // --- 4. 합계 표시 (price 함수 사용) ---
  String totalPrice = String(price()) + "원";
  printTxt(250, 220, totalPrice, BLACK); 
}

void page3() {
  tft.drawRGBBitmap(0, 0, bg3, 320, 240);
  
  printTxt(210, 80, "sgu-2026", BLACK); // 주문번호
  
  // 색상
  if(color == 0) printTxt(250, 110, "로즈", BLACK);
  if(color == 1) printTxt(250, 110, "블루", BLACK);
  if(color == 2) printTxt(250, 110, "크림", BLACK);
  if(color == 3) printTxt(240, 110, "화이트", BLACK);
  if(color == 4) printTxt(250, 110, "모브", BLACK);
  if(color == 5) printTxt(250, 110, "민트", BLACK);

  // 컷 수와 수량
  printTxt(260, 135, String(photo) + "컷", BLACK);
  printTxt(260, 160, String(amount) + "개", BLACK);

  // 결제 금액
  String totalPrice = String(price()) + "원";
  printTxt(230, 190, totalPrice, RED);
}

void page4() {
  tft.drawRGBBitmap(0, 0, bg4, 320, 240);
}

void page5() {
  tft.drawRGBBitmap(0, 0, bg5, 320, 240); 
}

void page6() {
  tft.drawRGBBitmap(0, 0, bg6, 320, 240);
}

// 화면 새로고침 매니저
void draw() {
  if (page == 1) page1();
  if (page == 2) page2();
  if (page == 3) page3();
  if (page == 4) page4();
  if (page == 5) page5();
  if (page == 6) page6();
}


// =====================================================================
// 7. 프로그램의 심장 (Setup & Loop)
// =====================================================================

void setup() {
  pinMode(21, OUTPUT); 
  digitalWrite(21, HIGH);

  tftSPI.begin(14, 12, 13, 15); 
  tft.begin(); 
  tft.setRotation(1); 
  
  u8f.begin(tft);
  u8f.setFont(u8g2_font_unifont_t_korean1); 
  u8f.setFontMode(1); 

  touchSPI.begin(25, 39, 32, 33); 
  touch.begin(touchSPI); 
  touch.setRotation(1); 

  draw(); // 첫 화면 띄우기
}

void loop() {
  if (touch.touched() && !touched) {
    touched = true; 
    
    TS_Point p = touch.getPoint();
    
    // 터치 변수명을 X, Y로 아주 간단하게 변경!
    int X = map(p.x, 200, 3700, 0, 320);
    int Y = map(p.y, 240, 3800, 0, 240);

    // -----------------------------------------------------------------
    // 페이지별 터치 영역 판별
    // -----------------------------------------------------------------

    if (page == 1) { 
      // [시작하기 박스 터치] 아무 곳이나 누르지 않고, 박스 안쪽을 눌러야 함!
      // 가로(X) 80~240 사이, 세로(Y) 140~180 사이를 눌러야 2페이지로 넘어감
      if (X > 80 && X < 240 && Y > 140 && Y < 180) {
        page = 2; 
        draw();
      }
    } 
    
    else if (page == 2) { 
      // [상단 우측 '결제/다음' 버튼]
      if (X > 260 && Y < 30) { page = 3; draw(); }
      
      // [색상 터치]
      if (Y > 60 && Y < 100) {
        if (X < 55)  color = 0;
        else if (X < 107) color = 1;
        else if (X < 159) color = 2;
        else if (X < 211) color = 3;
        else if (X < 263) color = 4;
        else color = 5;
        draw();
      }
      
      // [컷 수 터치]
      if (Y > 120 && Y < 160) {
        if (X < 100) photo = 4;
        else if (X < 200) photo = 6;
        else photo = 8;
        draw();
      }

      // [수량 터치 (+, -)]
      if (Y > 170 && Y < 200) {
        if (X > 90 && X < 130) { // 마이너스(-) 버튼
          if (amount > 1) amount--;        
          draw();
        }
        if (X > 180 && X < 220) { // 플러스(+) 버튼
          if (amount < 10) amount++;        
          draw();
        }
      }
    } 
    
    else if (page == 3) {
      if (X > 260 && Y < 30) { page = 4; draw(); }
    } 
    
    else if (page == 4) {
      if (X > 260 && Y < 30) { page = 5; draw(); }
    } 
    
    else if (page == 5) {
      if (X > 260 && Y < 30) { page = 6; draw(); }
    } 
    
    else if (page == 6) {
      if (X > 260 && Y < 30) {
        page = 1;     // 맨 처음 화면으로
        color = 0;    // 설정 초기화
        photo = 4;    
        amount = 1;   
        draw();
      }
    }
  }

  // 손가락을 떼었을 때 잠금 해제
  if (!touch.touched()) {
    touched = false; 
  }
}