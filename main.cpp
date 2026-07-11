/* =====================================================================
 *  [Sogang Studio] 인생네컷 키오스크 (LovyanGFX + XPT2046)
 * ===================================================================== */

#include <Arduino.h>
#include <LittleFS.h> 
#include <LovyanGFX.hpp>
#include <lgfx/Fonts/efont/lgfx_efont_kr.h>
#include <qrcode.h>

// =====================================================================
// 1. 디스플레이 드라이버 설정
// =====================================================================
class LGFX : public lgfx::LGFX_Device {
  lgfx::Panel_ILI9341 _panel_instance;
  lgfx::Bus_SPI       _bus_instance;
  lgfx::Light_PWM     _light_instance;
  lgfx::Touch_XPT2046 _touch_instance;

public:
  LGFX(void) {
    // SPI 버스 (디스플레이용 VSPI)
    {
      auto cfg = _bus_instance.config();
      cfg.spi_host = VSPI_HOST;
      cfg.spi_mode = 0;
      cfg.freq_write = 40000000;
      cfg.freq_read  = 16000000;
      cfg.pin_sclk = 14;
      cfg.pin_mosi = 13;
      cfg.pin_miso = 12;
      cfg.pin_dc   = 2;
      _bus_instance.config(cfg);
      _panel_instance.setBus(&_bus_instance);
    }
    // ILI9341 패널
    {
      auto cfg = _panel_instance.config();
      cfg.pin_cs   = 15;
      cfg.pin_rst  = -1;
      cfg.pin_busy = -1;
      cfg.panel_width      = 240;
      cfg.panel_height     = 320;
      cfg.offset_rotation  = 0;
      cfg.readable         = true;
      cfg.invert           = false;
      cfg.rgb_order        = false;
      cfg.bus_shared       = false;
      _panel_instance.config(cfg);
    }
    // 백라이트 PWM
    {
      auto cfg = _light_instance.config();
      cfg.pin_bl      = 21;
      cfg.invert      = false;
      cfg.freq        = 44100;
      cfg.pwm_channel = 7;
      _light_instance.config(cfg);
      _panel_instance.setLight(&_light_instance);
    }
    // XPT2046 터치
    {
      auto cfg = _touch_instance.config();
      cfg.x_min      = 363;
      cfg.x_max      = 3955;
      cfg.y_min      = 3806;
      cfg.y_max      = 220;
      cfg.pin_int    = 36;
      cfg.bus_shared = false;
      cfg.offset_rotation = 0;
      cfg.spi_host = HSPI_HOST;
      cfg.freq = 1000000;
      cfg.pin_sclk = 25;
      cfg.pin_mosi = 32;
      cfg.pin_miso = 39;
      cfg.pin_cs   = 33;
      _touch_instance.config(cfg);
      _panel_instance.setTouch(&_touch_instance);
    }
    setPanel(&_panel_instance);
  }
};

LGFX tft;
LGFX_Sprite sprite(&tft);

// =====================================================================
// 2. 색상 정의
// =====================================================================
#define BROWN   0x8A22
#define BLACK   0x0000
#define WHITE   0xFFFF
#define RED     0xF800
#define HILITE  0xF544 

#define ROSE    0xD4B5
#define BLUE    0x8476
#define CREAM   0xEED6
#define MAUVE   0xC410
#define MINT    0x9736

// =====================================================================
// 3. 전역 상태 변수
// =====================================================================
int page = 1;
int color = 0;   
int photo = 4;   
int amount = 1;  
bool touched = false;
bool isPhotoDone = false; 

String qrCodeUrl = ""; 

// =====================================================================
// 4. 유틸리티 함수
// =====================================================================
int price() {
  int Price = 4000;
  if (photo == 6) Price = 5000;
  if (photo == 8) Price = 6000;
  return Price * amount;
}

void printTxt(int x, int y, String text, uint16_t c) {
  tft.setTextColor(c);
  tft.setTextDatum(MC_DATUM);
  tft.drawString(text, x, y);
}

void QrCode(String url) {
  QRCode qrcode;
  uint8_t qrcodeData[qrcode_getBufferSize(5)];
  qrcode_initText(&qrcode, qrcodeData, 5, 0, url.c_str());

  int scale = 4;
  int offsetX = (320 - qrcode.size * scale) / 2;
  int offsetY = 55;

  tft.fillRect(offsetX - 15, offsetY - 15, qrcode.size * scale + 30, qrcode.size * scale + 30, WHITE);
  for (uint8_t y = 0; y < qrcode.size; y++) {
    for (uint8_t x = 0; x < qrcode.size; x++) {
      uint16_t c = qrcode_getModule(&qrcode, x, y) ? BLACK : WHITE;
      tft.fillRect(offsetX + x * scale, offsetY + y * scale, scale, scale, c);
    }
  }
}

// =====================================================================
// 5. 페이지 렌더링 함수
// =====================================================================
void page1() {
  tft.drawJpgFile(LittleFS, "/bg1.jpg", 0, 0);
  printTxt(160, 168, "시작하기", BLACK);
}

void page2() {
  tft.drawJpgFile(LittleFS, "/bg2.jpg", 0, 0);

  printTxt(28, 17, "프레임", BLACK);
  printTxt(297, 17, "다음", BLACK);

  if (color == 0) { tft.drawCircle(47, 81, 15, HILITE);  tft.drawCircle(47, 81, 16, HILITE); }
  if (color == 1) { tft.drawCircle(92, 81, 15, HILITE);  tft.drawCircle(92, 81, 16, HILITE); }
  if (color == 2) { tft.drawCircle(137, 81, 15, HILITE); tft.drawCircle(137, 81, 16, HILITE); }
  if (color == 3) { tft.drawCircle(182, 81, 15, HILITE); tft.drawCircle(182, 81, 16, HILITE); }
  if (color == 4) { tft.drawCircle(227, 81, 15, HILITE); tft.drawCircle(227, 81, 16, HILITE); }
  if (color == 5) { tft.drawCircle(272, 81, 15, HILITE); tft.drawCircle(272, 81, 16, HILITE); }

  printTxt(63, 136, "4컷", (photo == 4) ? HILITE : BLACK);
  printTxt(160, 136, "6컷", (photo == 6) ? HILITE : BLACK);
  printTxt(257, 136, "8컷", (photo == 8) ? HILITE : BLACK);

  printTxt(160, 194, String(amount), BLACK);
  printTxt(270, 228, String(price()) + "원", BLACK);
}

void page3() {
  tft.drawJpgFile(LittleFS, "/bg3.jpg", 0, 0);

  printTxt(23, 17, "이전", BLACK);
  printTxt(297, 17, "다음", BLACK);
  printTxt(40, 84, "주문번호", BLACK);
  printTxt(270, 84, "sgu-2026", BLACK);

  printTxt(25, 117, "색상", BLACK);
  if (color == 0) printTxt(288, 117, "로즈", BLACK);
  if (color == 1) printTxt(288, 117, "블루", BLACK);
  if (color == 2) printTxt(288, 117, "크림", BLACK);
  if (color == 3) printTxt(288, 117, "화이트", BLACK);
  if (color == 4) printTxt(278, 117, "모브", BLACK);
  if (color == 5) printTxt(288, 117, "민트", BLACK);

  printTxt(20, 149, "컷", BLACK);
  printTxt(288, 149, String(photo) + "컷", BLACK);

  printTxt(25, 182, "수량", BLACK);
  printTxt(288, 182, String(amount) + "개", BLACK);

  printTxt(40, 215, "결제금액", BLACK);
  printTxt(280, 215, String(price()) + "원", RED);
}

void page4() {
  tft.drawJpgFile(LittleFS, "/bg4.jpg", 0, 0);
  printTxt(160, 214, "촬영시작", BLACK);
  isPhotoDone = false; 
}

void page5() {
  tft.drawJpgFile(LittleFS, "/bg5.jpg", 0, 0);
  printTxt(28, 17, "QR코드", BLACK);

  if (qrCodeUrl.length() > 0) {
    printTxt(292, 17, "홈으로", BLACK);
    QrCode(qrCodeUrl);
  } else {
    printTxt(160, 120, "컴퓨터에서 [QR코드 출력]을 눌러주세요!", BLACK);
  }
}

void draw() {
  if (page == 1) page1();
  if (page == 2) page2();
  if (page == 3) page3();
  if (page == 4) page4();
  if (page == 5) page5();
}

// =====================================================================
// 6. Setup & Loop
// =====================================================================
void setup() {
  Serial.begin(115200);

  if (!LittleFS.begin(true)) {
    Serial.println("LittleFS Mount Failed");
    return;
  }

  tft.init();
  tft.setRotation(3);
  tft.setFont(&fonts::efontKR_14);

  draw();
}

void loop() {
  if (Serial.available() > 0) {
    String incoming = Serial.readStringUntil('\n');
    incoming.trim();
    if (incoming.startsWith("QR:")) {
      qrCodeUrl = incoming.substring(3);
      page = 5;
      draw();
    }
    else if (incoming == "PAGE:1") {
      page = 1;
      color = 0;
      photo = 4;
      amount = 1;
      isPhotoDone = false;
      qrCodeUrl = "";
      draw();
    }
  }

  int32_t X, Y;
  if (tft.getTouch(&X, &Y)) {
    if (!touched) {
      touched = true;

      if (page == 1) {
        if (X > 78 && X < 243 && Y > 152 && Y < 184) {
          page = 2; draw();
        }
      }

      else if (page == 2) {
        if (X > 276 && Y < 32) { page = 3; draw(); }

        // ⭐ 프레임 색상 터치
        if (Y > 66 && Y < 96) {
          if      (X > 32  && X < 62)  color = 0;
          else if (X > 77  && X < 107) color = 1;
          else if (X > 122 && X < 152) color = 2;
          else if (X > 167 && X < 197) color = 3;
          else if (X > 212 && X < 242) color = 4;
          else if (X > 257 && X < 287) color = 5;
          
          Serial.printf("CONFIG:%d,%d\n", color, photo); 
          draw();
        }

        // ⭐ 컷 수 터치
        if (Y > 121 && Y < 152) {
          if      (X > 22  && X < 104) photo = 4;
          else if (X > 119 && X < 201) photo = 6;
          else if (X > 216 && X < 298) photo = 8;
          
          Serial.printf("CONFIG:%d,%d\n", color, photo); 
          draw();
        }

        if (Y > 179 && Y < 210) {
          if (X > 91 && X < 122) { if (amount > 1)  { amount--; draw(); } }
          if (X > 198 && X < 229) { if (amount < 10) { amount++; draw(); } }
        }
      }

      else if (page == 3) {
        if (X > 276 && Y < 32) { page = 4; draw(); }
        else if (X < 46 && Y < 32) { page = 2; draw(); }
      }

      else if (page == 4) {
        if (isPhotoDone && X > 276 && Y < 32) { page = 5; draw(); }

        else if (!isPhotoDone && X > 90 && X < 230 && Y > 198 && Y < 227) {
          // 혹시 몰라 촬영 직전에도 현재 설정값을 확실히 쏴줍니다.
          Serial.printf("CONFIG:%d,%d\n", color, photo); 

          sprite.createSprite(200, 80);
          sprite.setFont(&fonts::efontKR_14);
          sprite.setTextDatum(MC_DATUM);

          for (int p = 0; p < photo; p++) {
            for (int i = 5; i > 0; i--) {
              Serial.print("COUNT:"); Serial.println(i);
              sprite.fillSprite(WHITE);
              sprite.setTextSize(5);
              sprite.setTextColor(BLACK);
              sprite.drawString(String(i), 100, 40);
              sprite.pushSprite(60, 77);
              delay(1000);
            }
            sprite.fillSprite(WHITE);
            sprite.setTextSize(3);
            sprite.setTextColor(BLACK);
            sprite.drawString("찰칵!", 100, 40);
            sprite.pushSprite(60, 77);
            Serial.println("TAKE_PHOTO");
            delay(1000);
          }

          sprite.fillSprite(WHITE);
          sprite.setTextSize(2);
          sprite.setTextColor(BLACK);
          sprite.drawString("촬영완료", 100, 40);
          sprite.pushSprite(60, 77);
          sprite.deleteSprite();
          tft.setTextSize(1);

          printTxt(297, 17, "다음", BLACK);
          isPhotoDone = true;
        }
      }

      else if (page == 5) {
        if (qrCodeUrl.length() > 0 && X > 276 && Y < 32) {
          page = 1;
          color = 0;
          photo = 4;
          amount = 1;
          isPhotoDone = false;
          qrCodeUrl = "";
          
          // ⭐ 홈으로 돌아갈 때 웹 화면도 초기상태(로즈, 4컷)로 리셋
          Serial.printf("CONFIG:%d,%d\n", color, photo); 
          draw();
        }
      }
    }
  } else {
    touched = false;
  }
}