## 출처: https://docs.arduino.cc/software/app-lab/tutorials/cli/

제목: Arduino App CLI: 명령줄에서 앱 관리하기 | Arduino Documentation
발행 시간: 2026년 3월 25일 (수)

### Arduino App CLI 개요
UNO Q 보드에서 앱을 실행하고 관리하기 위한 커맨드라인 인터페이스인 Arduino App CLI의 사용법을 배워보세요.

Arduino App Lab은 UNO Q 보드 전용으로 제작된 앱을 관리하는 명령줄 도구인 `arduino-app-cli`를 기반으로 구축되었습니다. 
이 `arduino-app-cli`는 UNO Q 보드에 사전 설치되어 있으며, 보드의 운영체제 터미널에 직접 접속하거나 호스트 컴퓨터에서 ADB(Android Debug Bridge) 또는 SSH를 통해 접근할 수 있습니다.

### 요구 사항
**하드웨어**
* Arduino UNO Q 보드
* USB-C 케이블

**소프트웨어**
* USB를 통한 `adb` 접근 시: [Android Debug Bridge](https://developer.android.com/tools/releases/platform-tools)
* 로컬 네트워크를 통한 SSH 접근도 지원합니다.

---

### ADB를 통한 연결

1. UNO Q 보드를 컴퓨터에 USB-C로 연결합니다.
2. 터미널에서 `adb devices`를 실행하여 장치가 나타나는지 확인합니다. (처음 연결 시 1분 정도 소요될 수 있습니다.)
3. `adb shell`을 실행합니다. 이제 UNO Q 보드의 터미널에 진입했습니다!
4. 명령을 마치고 터미널을 빠져나오려면 `exit`을 입력합니다.
(_참고: 아두이노 앱 랩에서 최초 보드 셋업을 완료하지 않았다면, `sudo` 명령 등 사용 시 새 비밀번호를 만들라고 안내됩니다._)

### SSH를 통한 연결
네트워크 모드를 통한 SSH 접속은 컴퓨터 앱 랩에서 USB 모드로 최초 설정(보드명, 비밀번호, Wi-Fi 설정)을 완료해야 활성화됩니다.
1. 컴퓨터에서 터미널을 엽니다.
2. `ssh arduino@<설정한보드이름>.local`을 실행합니다.
3. 설정해 둔 비밀번호를 입력하면 보드의 셸에 원격으로 접속됩니다.

---

### Arduino App CLI 사용법

터미널에서 `arduino-app-cli`를 치면 사용할 수 있는 명령어 목록을 볼 수 있습니다:
* 앱 시작/중지
* 실행 중인 앱 목록 보기
* 새 앱 만들기
* 앱 로그 표시
* 앱 모니터링

**앱 만들기**
`arduino-app-cli app new "test"`
이 명령은 `/home/arduino/ArduinoApps/test` 경로에 앱 구동을 위한 `app.yaml`, `main.py`, 스케치 디렉토리를 자동 생성합니다.

**앱 편집하기**
* HDMI를 통해 모니터/키보드를 직접 연결했다면 보드 내의 Vim, gedit 등으로 즉시 편집할 수 있습니다.
* `adb` 연결 상태라면 `adb pull` 명령어로 컴퓨터에 파일을 가져와 수정하고, `adb push`로 다시 보드에 덮어쓸 수 있습니다.
* 주의사항: 파일을 push한 뒤 `chown -R arduino:arduino /home/arduino/ArduinoApps` 명령어로 권한을 수정해야 할 수 있습니다.

**앱 시작 및 중지**
실행: `arduino-app-cli app start "/home/arduino/ArduinoApps/test"`
중지: `arduino-app-cli app stop "/home/arduino/ArduinoApps/test"`

**앱 로그 읽기**
로그 확인: `arduino-app-cli app logs /home/arduino/ArduinoApps/test --all`

**내장 예제 앱과 내 앱 단축키로 실행하기**
항상 전체 경로를 칠 필요 없이 `examples:` 와 `user:` 접두어를 활용할 수 있습니다.
* `arduino-app-cli app start user:my-app` (내가 만든 앱)
* `arduino-app-cli app start examples:blink` (내장 예제 앱)

**앱 목록 보기**
`arduino-app-cli app list`
이 명령은 사용 가능한 모든 앱(예제 포함)과 현재 상태를 보여줍니다.

---

### 시스템 설정 및 브릭 명령어

`system` 명령어를 사용하면 기기 구성 및 업데이트를 관리할 수 있습니다.
* **업데이트 확인:** `arduino-app-cli system update`
* **보드 이름 셋팅:** `arduino-app-cli system set-name "새이름"` (재부팅 후 적용)
* **네트워크 모드(SSH 등) 허용/차단:** `arduino-app-cli system network enable/disable`
* **사용하지 않는 도커 컨테이너 및 이미지 정리:** `arduino-app-cli system cleanup`

`brick` 명령어를 통해 설치된 브릭을 관리합니다.
* **보드에 설치된 브릭 목록:** `arduino-app-cli brick list`
* **특정 브릭 세부정보:** `arduino-app-cli brick details arduino:<브릭이름>`


---

## 출처: https://docs.arduino.cc/software/app-lab/tutorials/examples/

제목: Arduino App Lab 예제 애플리케이션 정리 | Arduino Documentation
발행 시간: 2026년 3월 25일 (수)

### 개요
이 섹션은 Arduino App Lab을 위해 개발된 각종 예제들의 모음입니다. 환경 모니터링부터 머신러닝에 이르기까지 어떠한 기능(Bricks)을 활용해 구현할 수 있는지 목적과 아키텍처를 소개합니다. 
기본 요구사항은 Arduino UNO Q와 USB 케이블입니다. 외부 하드웨어 없이 구동되는 예제와 별도 센서/장비가 필요한 예제로 나뉩니다.

### 1. 추가 하드웨어 없이 구동 가능한 예제

**Air Quality Monitoring (공기질 모니터링)**
* `AQICN` 대기질 서비스 API 정보를 UNO Q의 8x13 LED 매트릭스에 애니메이션 이모지 형태로 띄워줍니다.
* 브릭: 없음 (순수 Python HTTP 요청 데이터가 Router Bridge를 통해 MCU로 전송)

**Bedtime Story Teller (잠자리 동화 테러)**
* 클라우드 LLM(ChatGPT, Gemini 등)과 연동해 사용자가 웹에서 나이/등장인물 등을 넣으면 AI가 이야기를 생성해 실시간으로 띄웁니다.
* 브릭: `cloud_llm`(언어모델 연결), `web_ui`(사용자 UI 제공)

**Blink LED & Cloud Blink**
* Blink LED는 1초마다 보드 내장 LED를 제어하는 순수 파이썬/스케치 통신.
* Cloud Blink는 `arduino_cloud` 브릭을 활용해 IoT 클라우드 대시보드 스위치로 보드 LED를 껐다 켭니다. 

**Concrete Crack Detector (콘크리트 균열 감지기)**
* 사용자가 웹 인터페이스를 통해 현장 이미지를 업로드하면 시각적 이상(균열) 여부와 위치를 강조해 보여줍니다.
* 브릭: `visual_anomaly_detection` (비전 이상 감지 모델), `web_ui`

**Glass Breaking & Image Classification**
* **유리 깨짐 센서**: 사용자가 업로드한 오디오 샘플에서 유리 깨지는 소리의 패턴을 모델이 식별합니다. (브릭: `audio_classification`, `web_ui`)
* **이미지 분류**: 이미지를 업로드하고 지정해둔 신경망 모델로 신뢰도를 도출해 무슨 물체인지 분류합니다. (브릭: `image_classification`, `web_ui`)

**Mascot Jump Game (마스코트 점프 게임)**
* 공룡 달리기 게임과 유사한 장애물 점프 게임입니다.
* 웹 브라우저에서 게임을 플레이하면, UNO Q 보드의 LED 매트릭스에도 달리고 점프하는 스프라이트가 동시에 표현됩니다. (브릭: `web_ui`)

**System Resources Logger & UNO Q Pin Toggle**
* 시스템 리소스 로거: 보드의 CPU / RAM 수치를 실시간으로 수집하고, 데이터베이스에 넣어 대시보드 그래프로 표현합니다. (브릭: `dbstorage_tsstore`, `web_ui`)
* 핀 토글: 아두이노 보드의 핀 상태를 웹 스위치로 실시간 제어합니다. (브릭: `web_ui`)

**Weather Forecast on LED Matrix**
* 인터넷(open-meteo.com)에서 실시간 날씨 정보를 가져와 LED 매트릭스에 어울리는 강수/맑음 등의 애니메이션을 렌더링합니다. (브릭: `weather_forecast`)

---

### 2. 추가 하드웨어가 필요한 예제 (카메라, 모듈리노 등)

**카메라 관련 앱들 (USB 캠+허브 필요)**
* **Code Detector (코드 디텍터):** 바코드/QR코드를 카메라로 스캔하고, 결과를 DB에 저장합니다. (브릭: `camera_code_detection`, `dbstorage_sqlstore`)
* **Detect Objects & Face Detector:** 카메라의 라이브 피드에서 사람이나 특정 물체를 찾고, 실시간으로 박스 경계선 표기(Bounding box)를 웹으로 보여줍니다. (브릭: `video_objectdetection`)
* **Person Classifier:** 위와 비슷하지만 사람을 감지했을 때 인사말 등을 트리거하는 기능이 특화되어 있습니다. (브릭: `video_imageclassification`)
* **Object Hunting (마스코트 물건 사냥 게임):** 카메라를 들고 책, 의자, 물병 같은 대상을 찾아 비추면 탐지되어 미션이 성공하는 참여형 게임입니다. (브릭: `video_objectdetection`, `web_ui`)

**Modulino 센서 관련 모니터링 앱들 (모듈리노 센서 + Qwiic 케이블)**
* **Home Climate Monitoring:** 온도 및 습도(Thermo 센서) 데이터를 시계열 DB에 저장하고 예쁜 UI 차트로 모아봅니다. (브릭: `dbstorage_tsstore`)
* **Real Time Accelerometer & Vibration Anomaly:** 가속도계 센서(Movement 센서)를 흔들어 특정 제스처(움직임)를 식별하거나, 모터/팬의 규칙적인 진동 추이를 수집하다 이상 패턴이 보일 시 알람을 보냅니다. (브릭: `motion_detection` 혹은 `vibration_anomaly_detection`)

**기타 하드웨어 앱들**
* **Hey Arduino! (키워드 스포팅):** USB 마이크를 연결하고 "Hey Arduino" 라고 말하면 LED 매트릭스가 애니메이션으로 반응합니다. (브릭: `keyword_spotting`)
* **Theremin Simulator (테레민 악기 시뮬레이터):** 사용자가 웹에서 마우스를 음계나 볼륨 위로 움직이면 파형이 합성되어 USB 오디오용 스피커 기기로 즉시 재생됩니다. (브릭: `wave_generator`, `web_ui`)
* **Mobile Video Object Detection:** 특별히 웹캠 대신 스마트폰 카메라와 IoT Remote 앱으로 휴대폰 스트리밍 비디오를 넘기면, 보드의 AI 모델이 이를 처리해 객체를 분석합니다.
* **Color Your LEDs:** 보드 자체의 RGB LED 4개를 자유롭게 제어합니다. 

---

## 출처: https://docs.arduino.cc/software/app-lab/tutorials/ai-models/

제목: 커스텀 AI 모델 (Custom AI Models for Arduino App Lab) | Arduino Documentation
발행 시간: 2026년 3월 25일 (수)

### 개요
App Bricks를 맞춤화하기 위해 사용자 정의 AI 모델(Custom AI)을 만들고 훈련시키는 방법을 배웁니다.
미리 정의된 예제 모델 대신 자신만의 데이터를 통해 커스텀 머신러닝 모델을 만들면 특정 프로젝트 목표에만 최적화된 앱 배포가 가능해집니다.

### AI 학습 단계 요약
* **수집(Collect):** 직접 오디오나 이미지 데이터셋을 구축합니다.
* **학습(Train):** Edge Impulse Studio에서 처음부터 모델을 학습합니다.
* **통합(Integrate):** 커스텀 모델을 App Lab에 넣어 기존 Brick들의 행동을 새 모델로 바꿉니다.

(요구 하드웨어: UNO Q 보드, USB 캠 혹은 마이크. 소프트웨어: Edge Impulse와 연동 가능한 Arduino 계정)

머신러닝이란 명시적 규칙(Rule)을 짜는 대신, 컴퓨터에 데이터를 직접 쥐어주고 그 자체로 "사과"와 "바나나"를 구분하도록 학습시킨 결과물을 의미합니다. 여기서 만들어지는 산출물을 **AI 모델**이라고 합니다. 우리는 커스텀 모델인 새로운 "두뇌" 파라미터를 브릭에 갈아끼워 동작을 변경할 것입니다.

#### "Edge Impulse Studio" 파이프라인
임베디드 머신러닝의 표준 플랫폼인 Edge Impulse를 통해 개발 파이프라인 전반을 제어합니다.

1. **데이터 획득(Data Acquisition):** 카메라/휴대폰/UNO Q 등의 기기로 이미지나 소리를 끌어모읍니다.
2. **라벨링(Labeling):** 수집된 각 샘플에 "이건 바나나", "이건 배경" 등 정답 카테고리를 붙입니다. 이 라벨링 정확도가 모델의 수준을 결정합니다.
3. **임펄스 설계(Impulse Design):** 입력을 분류하고(데이터), 정제하며(프로세싱 블록), 신경망을 구성하는(학습 블록) 파이프라인 구조를 구축합니다.
4. **학습수행(Training):** 클라우드 서버에서 파라미터 연산 훈련을 통해 인식 규칙을 찾도록 합니다.
5. **배포(Deployment):** 훈련된 파일을 Arduino UNO Q로 내보내 `.eim` (Edge Impulse Model) 형식으로 다운받아 모델을 삽입합니다.

### 커스텀 AI 모델 시작하기 가이드
1. Arduino App Lab의 **My Apps**에서 새로운 앱(Create New App)을 만듭니다.
2. `main.py`에 `VideoObjectDetection` 브릭 등을 활용해 객체 탐지 이벤트를 처리하는 코드(`detection_stream.on_detect_all()`)를 붙여넣습니다.
3. App Lab 좌측 탭에서 "Add Brick"을 눌러 **Video Object Detection** 브릭을 추가합니다.
4. 해당 브릭 탭의 **"AI models"** 메뉴에 들어가서 "Train new AI model" 버튼을 클릭합니다.
5. 기존 아두이노 계정으로 Edge Impulse 플랫폼간 인증 연결 절차를 거치면, Edge Impulse Studio 화면으로 전환됩니다.

**이미지 기반 커스텀 모델 학습 과정 실습**
* **새 프로젝트 생성:** Edge Impulse Studio 우상단에서 생성합니다. 
* **데이터셋 모으기:** "Collect new data"를 누르고 휴대폰으로 QR 코드를 찍어 카메라를 켠 뒤, 물체의 사진 여러 장(사과/복숭아 등)과 뒷배경(Background) 등을 반복해 촬영하여 훈련 데이터를 수집합니다.
* **임펄스 설계 설정:** 이미지 해상도(320x320 등)를 맞추고, 학습 블록을 Object Detection(Images)으로 맞춥니다.
* **하이퍼 파라미터 / 훈련 최적화:** 'MobileNetV2 SSD FPN-Lite 320x320' 등 전이 학습에 유용한 가벼운 모델 아키텍처를 선택하고, "Save & Train"을 눌러 학습의 정확도 결과가 출력될 때까지 기다립니다.
