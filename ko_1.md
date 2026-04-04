# Arduino App Lab 튜토리얼 문서

---

## 출처: https://docs.arduino.cc/software/app-lab/tutorials/getting-started/

제목: Arduino App Lab 시작하기 | Arduino Documentation
발행 시간: 2026년 3월 25일 (수)

### Arduino App Lab 시작하기
Arduino App Lab을 설정하고 UNO Q 보드에서 앱을 실행하는 방법을 배워보세요.

![Arduino App Lab](https://docs.arduino.cc/static/5fca8fb78876ee04bfdda00d7305c76b/a6d36/app-lab-hero.png)

[Arduino App Lab](https://www.arduino.cc/en/uno-q/)을 사용하면 리눅스 시스템과 마이크로컨트롤러 및 마이크로프로세서를 모두 갖춘 [Arduino® UNO Q](https://store.arduino.cc/products/uno-q) 보드에 앱(Apps)을 만들고 배포할 수 있습니다. Arduino App Lab은 개인용 컴퓨터(Windows, MacOS, Linux)는 물론이고, 미리 설치되어 자동 업데이트되는 UNO Q 내부에서도 모두 실행되도록 설계되었습니다.

이 가이드에서는 다음 내용을 알아봅니다:
* Arduino App Lab의 핵심 기능
* 앱의 작동 원리와 구조
* [브릭(Brick)](https://docs.arduino.cc/software/app-lab/tutorials/bricks/)이 무엇이며 앱에서 어떻게 사용되는지
* UNO Q 보드에서 앱을 실행하는 방법

**_Arduino App Lab 소프트웨어는 UNO Q 사용을 시작하기 위한 다양한 가이드와 예제도 함께 제공합니다._**

### 하드웨어 및 소프트웨어 요구 사항

**하드웨어**
* 컴퓨터 (Windows/Mac/Linux)
* [Arduino® UNO Q 보드](https://store.arduino.cc/products/uno-q)
* [USB-C® 케이블](https://store.arduino.cc/products/usb-cable2in1-type-c)

보드를 [단일 보드 컴퓨터(SBC)](https://docs.arduino.cc/tutorials/uno-q/single-board-computer/) 모드로 사용할 경우 다음 장비가 추가로 필요합니다:
* USB-C 동글
* 모니터 및 HDMI 케이블
* 키보드 및 마우스

**소프트웨어**
* [Arduino App Lab](https://www.arduino.cc/en/uno-q/)

**인터넷 연결**
새 업데이트가 릴리스되면 보드가 자동으로 업데이트됩니다. 이를 다운로드하고 설치하려면 인터넷 연결이 필요합니다. 앱 구동 자체에는 인터넷이 필요하지 않지만, 외부 인터넷 연결(예: Arduino Cloud 접속, 외부 API 데이터 수집 등)을 필요로 하는 예제의 경우 예외입니다.

---

### Arduino App Lab 설치 및 설정

운영체제에 따른 설치 안내는 아래를 참조하세요.

1. [Arduino 소프트웨어 페이지](https://www.arduino.cc/en/software/#app-lab-section)로 이동하여 OS에 맞는 Arduino App Lab을 다운로드합니다.
2. 설치 파일을 실행합니다.
3. Arduino App Lab을 실행합니다.
4. 컴퓨터에 UNO Q 보드를 연결합니다.

앱을 실행한 뒤 UNO Q를 연결하면, 에디터 화면에 보드의 Wi-Fi® 설정과 이름(보드명) 및 비밀번호를 설정하라는 안내가 뜹니다.

**_arduino.cc 계정에 로그인하라는 메시지도 표시됩니다. 이는 선택 사항이지만, Arduino App Lab의 일부 기능을 사용하려면 로그인이 필요합니다._**

**MacOS**
다운로드 폴더에 있는 `.dmg` 파일을 실행하고, 앱을 `Applications`(응용 프로그램) 폴더로 이동시킵니다.

**Windows**
다운로드 폴더에 있는 `.exe` 파일을 실행하고 절차를 완료합니다.

**Linux**
Ubuntu 기반 Linux에서는 `.tar.gz` 다운로드 파일의 압축을 풉니다. 폴더로 이동한 뒤 앱을 실행하세요.
압축을 푼 폴더는 `$HOME/Desktop` 이나 `$HOME/Applications` 경로로 옮겨 두는 것을 권장합니다:
```bash
tar -xf ArduinoAppLab*.tar.gz 
mv ArduinoAppLab*/ ~/Desktop
```

**주의:** Arduino App Lab을 리눅스에서 오류 없이 구동하려면 `libwebkit2gtk-4.1` 이 설치되어 있어야 합니다.
* Debian / Ubuntu: `sudo apt install libwebkit2gtk-4.1-0`
* Arch: `sudo pacman -S webkit2gtk-4.1`

_주의: UNO Q 보드가 Arduino App Lab에서 올바르게 인식되려면 계정에서 USB 장치에 대한 쓰기 권한이 필요합니다. 필요한 경우 사용자 매뉴얼의 Linux Host Setup 섹션에 따라 `udev` 규칙을 추가하세요._

---

### 보드 모드 (Board Modes)

보드는 **세 가지 모드**로 구동될 수 있습니다.

1. **USB를 통한 데스크톱 모드(기본값)** - 컴퓨터(Win/Mac/Linux)에 보드를 연결하고, App Lab 데스크톱 응용 프로그램에서 프로그래밍합니다.
2. **로컬 Wi-Fi® 네트워크를 통한 네트워크 모드** - 보드와 로컬 네트워크(Wi-Fi)를 통해 연결되며, SSH를 사용합니다. (최초 설정이 끝난 후에만 사용 가능하며, 동일한 네트워크에 있어야 합니다.)
3. **단일 보드 컴퓨터(SBC) 모드** - USB 동글에 모니터, 키보드, 마우스를 연결하여 보드를 바로 소형 컴퓨터로 활용합니다.

**데스크톱 모드 (USB ─ 기본 설정)**
1. USB-C 케이블로 컴퓨터와 보드를 연결하세요.
2. Arduino App Lab을 실행하고, 보드가 나타날 때까지 기다린 후 **"USB"** 옵션을 선택합니다. (부팅이 되면 LED 매트릭스 애니메이션이 종료됩니다.)
3. 앱을 생성하고 보드에 실행할 준비가 완료되었습니다!

**네트워크 모드 (Wi-Fi)**
1. USB 모드에서 최초 설정을 완료했는지 확인합니다.
2. Arduino App Lab을 열고, 보드가 인식되면 **"Network"** 옵션을 선택합니다.
3. 컴퓨터와 연결 없이도 무선으로 앱을 실행 및 개발할 수 있습니다. (다른 네트워크로 변경 시 일시적으로 다시 USB 연결이 필요합니다.)

**SBC 모드 (독립형 컴퓨팅)**
HDMI 및 전원 공급(PD)을 지원하는 USB 동글이 필요합니다.
1. 보드의 USB-C 포트에 동글을 꽂습니다.
2. 모니터, 키보드, 마우스를 동글에 연결합니다.
3. 5V - 3A 충전기를 동글에 연결해 전원을 줍니다.
4. 부팅이 완료되면 모니터에 로그인 화면이 나옵니다.
5. `arduino`를 사용자 이름으로 입력하고 사용자 지정 비밀번호를 설정하여 로그인합니다.
6. 자동으로 내장된 Arduino App Lab이 열립니다!

---

### Arduino App Lab UI 살펴보기

[Arduino App Lab UI 이미지]
* **My Apps**: 내가 만들거나 복사한 앱들이 표시됩니다. 클릭하여 수정할 수 있습니다.
* **Examples**: 오디오 분류, 영상 객체 탐지 등 Arduino 팀이 만든 내장 예제들이 있습니다.
* **Bricks**: 복잡한 앱을 쉽게 만들도록 설계된 모듈형 코드 블록입니다.
* **Learn**: 앱 랩 기능에 대한 도움말/학습 자료가 있습니다.

### 앱(Apps)이란?
앱은 Arduino App Lab의 핵심 구성 요소입니다. UNO Q는 데비안 OS(Linux)를 돌리는 마이크로프로세서와 스케치(Sketch) 파일을 실행하는 마이크로컨트롤러(MCU)가 함께 탑재되어 있습니다. 이 두 장치는 `Bridge`라는 도구로 서로 통신합니다.

하나의 앱은 다음으로 구성될 수 있습니다:
* 1. 리눅스 측에서 돌아가는 **Python® 파일** (`main.py`)
* 2. 마이크로컨트롤러 측에서 돌아가는 **스케치 파일** (`sketch.ino`)
* 3. **서로 통신하는 둘의 조합** (가장 흔한 형태)

예를 들어 '홈 클리메이트 모니터링 앱(Home Climate Monitoring)'은 모듈리노 센서에서 데이터를 수집(스케치)하고 웹 서버에 데이터와 앱을 올려 보여줍니다(파이썬). 앱 생성 시 빈 템플릿에서 시작하거나 기존 예제를 복제할 수 있습니다. `app.yaml`이라는 앱 설정 파일도 같이 들어있지만, 이 파일은 자동 생성되므로 사용자가 직접 편집해서는 안 됩니다.

### 브릭(Bricks)이란?
브릭(Brick)은 코드 불러오기를 넘어 앱과 별개로 병렬 실행되어 돌아가는 고유 구성 단위입니다. 주로 다음 등을 포함합니다:
* 학습된 객체 감지 AI 모델
* 웹 인터페이스를 돌리는 API
* 일기예보 등 외부 호출용 코드

AI 모델이 포함된 브릭의 경우, `Docker` 컨테이너 형태로 앱 런타임 옆에 배포됩니다. 동시에 여러 개가 돌아갈 수도 있습니다. 브릭 상세 API 매뉴얼은 에디터 내부의 "Bricks" 탭에서 언제든 열람 가능합니다.

---

### 앱 생성 및 실행하기

**예제 앱 실행하기**
1. 왼쪽 사이드바의 "Examples"에서 원하는 앱을 고릅니다.
2. 우측 상단의 "Run" (실행) 버튼을 클릭합니다.
3. 시작 프로세스가 완료되면 앱과 바로 상호작용할 수 있습니다. (앱의 복잡성에 따라 컴파일에 약간의 시간이 소요될 수 있습니다.)

앱 상태는 하단 **Console(콘솔)** 을 통해 확인 가능합니다:
* **Start-up:** 파이썬 배포 및 컴파일 로그
* **Main (Python®):** `print()` 함수 등을 통한 파이썬 쪽 로그
* **Sketch (Microcontroller):** `Monitor.print()` 를 통한 스케치 쪽 로그 (`Serial.println`은 시리얼 포트 전용이므로 콘솔에 표시되지 않음)

**새 앱 생성 / 예제 복제하기**
메인 페이지에서 "Create New App"을 눌러 스크래치 파일 템플릿부터 시작하거나, Examples 페이지에서 화살표를 눌러 "Duplicate Example"(예제 복사)을 진행하세요. 필요한 브릭은 "Add Bricks" 버튼을 눌러 불러옵니다.

---

### Bridge 통신 원리

마이크로프로세서와 마이크로컨트롤러는 Bridge로 손쉽게 데이터를 교환합니다.
* **Provide**: 함수(서비스)를 제공해 상대방이 호출 가능하도록 열어둡니다.
* **Call**: Provide로 열린 서비스를 이쪽에서 호출합니다.
* **Notify**: 파라미터와 함께 비동기적으로 데이터를 단방향 전송합니다.

예를 들어, 아두이노 스케치에서 파이썬 측으로 값을 보내려면 아래와 같이 합니다.
**Sketch (C++):**
```cpp
int data = 1;
Bridge.notify("python_function", data);
```

**Python®:**
```python
Bridge.provide("python_function", python_function)

def python_function(data: int):
    print(data)
```

이와 같은 Bridge의 RPC(원격 프로시저 호출) 구조와 병렬 프로세스(Bricks) 개념을 다루는 것이 Arduino App Lab의 핵심입니다.
