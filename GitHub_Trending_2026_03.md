# 🔥 GitHub Trending + AI 임베디드 작품 종합 조사 (2026년 3월)

> 조사일: 2026-03-23 | 출처: GitHub Trending (전체 / Python / JavaScript / TypeScript) + AI 임베디드 작품 리서치

---

## 📊 현재 핫한 분야 요약 (GitHub Trending)

| 순위 | 분야 | 키워드 | 트렌드 강도 |
|------|------|--------|------------|
| 1 | **AI 에이전트 / 자율 에이전트** | Multi-Agent, LLM Orchestration | ⭐⭐⭐⭐⭐ |
| 2 | **RAG (검색 증강 생성)** | LightRAG, Local Research | ⭐⭐⭐⭐⭐ |
| 3 | **AI 금융 트레이딩** | LLM + 주식/암호화폐 자동매매 | ⭐⭐⭐⭐⭐ |
| 4 | **AI 코딩 도구 / IDE 통합** | Claude Code, Cursor, Codex | ⭐⭐⭐⭐⭐ |
| 5 | **MCP (Model Context Protocol)** | AI-툴 연동 표준 프로토콜 | ⭐⭐⭐⭐ |
| 6 | **AI 브라우저 자동화** | 웹 에이전트, 스크래핑 | ⭐⭐⭐⭐ |
| 7 | **보안 / 취약점 스캐닝** | 컨테이너 보안, 침투 테스트 | ⭐⭐⭐⭐ |
| 8 | **AI 동영상 생성** | LLM 기반 숏폼 자동 생성 | ⭐⭐⭐⭐ |
| 9 | **홈 자동화 / IoT** | Home Assistant, 오프라인 AI | ⭐⭐⭐ |
| 10 | **AI 세금/회계** | LLM 영수증 분석, 재무 관리 | ⭐⭐⭐ |

---

## 🤖 분야별 상세 분석

### 1. AI 에이전트 / 자율 에이전트 (Multi-Agent Systems)

가장 폭발적으로 성장 중인 분야. LLM을 여러 개 연결하거나, 에이전트가 도구를 사용해 장시간 작업을 자율 수행하는 시스템.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | ByteDance의 오픈소스 SuperAgent. 리서치·코딩·콘텐츠 생성을 샌드박스+메모리+서브에이전트로 자율 수행 | 36,146 |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | 복잡한 침투 테스트 작업을 완전 자율 수행하는 AI 에이전트 시스템 | 12,296 |
| [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) | 멀티 에이전트 아키텍처와 컨텍스트 엔지니어링을 위한 에이전트 스킬 모음 | 14,195 |
| [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | 상태 기억(stateful) 에이전트를 위한 메모리 라이브러리 | 877 |
| [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code) | Claude Code / Codex / Cursor를 위한 에이전트 성능 최적화 시스템 (스킬·메모리·보안) | 98,962 |

**핵심 트렌드**: 단순 챗봇→도구 사용(Tool Use)→멀티에이전트→**장시간 자율 작업(Long-horizon Tasks)** 으로 진화 중

---

### 2. RAG (Retrieval-Augmented Generation)

LLM의 지식 한계를 극복하기 위해 외부 문서·그래프·벡터DB를 검색해 답변을 생성하는 기술.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | EMNLP 2025 발표. 그래프 기반의 빠르고 간단한 RAG 프레임워크 | 30,135 |
| [jamwithai/production-agentic-rag-course](https://github.com/jamwithai/production-agentic-rag-course) | 프로덕션 수준 Agentic RAG 구축 강좌 | 4,873 |
| [langchain-ai/local-deep-researcher](https://github.com/langchain-ai/local-deep-researcher) | 완전 로컬 실행 웹 리서치 & 리포트 작성 어시스턴트 | 8,844 |

**핵심 트렌드**: 벡터 검색 → **그래프 RAG** → 멀티홉 추론(Multi-hop Reasoning) → 실시간 웹 검색 통합

---

### 3. AI 금융 트레이딩

LLM 멀티에이전트가 뉴스·지표·차트를 분석해 투자 결정을 내리는 자동화 프레임워크.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 멀티 에이전트 LLM 금융 트레이딩 프레임워크 | 37,828 |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | TradingAgents 중국어 강화판 (중국 주식 시장 특화) | 19,954 |

---

### 4. AI 코딩 도구 / IDE 통합 (Agentic Coding)

AI가 코드를 직접 작성·수정·리뷰하는 도구들. "Vibe Coding" 트렌드와 맞물려 급성장.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master) | Cursor, Lovable, Windsurf에 드롭인 가능한 AI 기반 태스크 관리 시스템 | 26,081 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 오픈소스 AI 코딩 환경 | - |
| [different-ai/openwork](https://github.com/different-ai/openwork) | Claude Cowork의 오픈소스 팀용 대안, opencode 기반 | 12,263 |

---

### 5. MCP (Model Context Protocol)

Anthropic이 제안한 AI 모델-외부 도구 연동 표준. RAG, 검색, 브라우저, DB 등 다양한 툴을 표준화된 방식으로 LLM에 연결.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [tavily-ai/tavily-mcp](https://github.com/tavily-ai/tavily-mcp) | 실시간 검색·추출·크롤링이 가능한 프로덕션 레디 MCP 서버 | 1,481 |
| [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) | Google NotebookLM의 비공식 Python API + Claude Code용 에이전트 스킬 | 7,053 |

---

### 6. AI 브라우저 자동화

AI 에이전트가 실제 브라우저를 제어해 웹 작업을 자동 수행.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 🌐 AI 에이전트가 웹사이트를 이용할 수 있게 만드는 라이브러리 | 82,853 |

---

### 7. 보안 / DevSecOps

컨테이너·클라우드·코드 취약점을 자동으로 탐지하는 도구들.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [aquasecurity/trivy](https://github.com/aquasecurity/trivy) | 컨테이너·K8s·코드·클라우드의 취약점·오설정·시크릿·SBOM 스캐너 | 33,720 |
| [MobSF/Mobile-Security-Framework-MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) | 모바일 앱(Android/iOS) 자동 보안 분석 프레임워크 | - |

---

### 8. AI 동영상/콘텐츠 자동 생성

LLM + TTS + 영상 편집을 결합해 숏폼/유튜브 영상을 원클릭으로 생성.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | AI LLM으로 고화질 숏폼 영상 원클릭 생성 | 51,224 |
| [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | 온라인 수익 창출 자동화 (콘텐츠 생성) | 20,411 |

---

### 9. 홈 자동화 / 오프라인 AI

인터넷 없이 로컬에서 동작하는 AI 시스템과 스마트홈.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [home-assistant/core](https://github.com/home-assistant/core) | 🏡 로컬 제어·프라이버시 우선 오픈소스 홈 자동화 | 85,718 |
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | 오프라인 생존 컴퓨터 - AI·도구·지식을 인터넷 없이 패키징 | 10,775 |

---

### 10. AI 회계 / 세금

LLM이 영수증·거래 내역을 자동 분석·분류하는 셀프호스팅 회계 도구.

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [vas3k/TaxHacker](https://github.com/vas3k/TaxHacker) | 셀프호스팅 AI 회계 앱 - LLM으로 영수증·인보이스 자동 분석 | 2,238 |

---

### 11. RL 환경 / 강화학습 포스트트레이닝

| 레포지토리 | 설명 | ⭐ Stars |
|-----------|------|---------|
| [meta-pytorch/OpenEnv](https://github.com/meta-pytorch/OpenEnv) | Meta의 RL 포스트트레이닝용 환경 인터페이스 라이브러리 | 1,301 |

---

## 🐍 AI 모델 활용 추천 Python 라이브러리

### 🔷 LLM / 생성형 AI 핵심 라이브러리

| 라이브러리 | 설명 | pip 설치 |
|-----------|------|---------|
| **openai** | OpenAI API (GPT-4o, o1, DALL-E 등) 공식 클라이언트 | `pip install openai` |
| **anthropic** | Claude (Haiku·Sonnet·Opus) API 공식 클라이언트 | `pip install anthropic` |
| **google-generativeai** | Gemini API 공식 클라이언트 | `pip install google-generativeai` |
| **transformers** | HuggingFace 모델 허브 - 오픈소스 LLM 로드·파인튜닝·추론 | `pip install transformers` |
| **litellm** | OpenAI 호환 인터페이스로 100+ LLM 통합 (provider 추상화) | `pip install litellm` |
| **ollama** | 로컬 LLM 실행을 위한 Python 클라이언트 (Llama·Mistral 등) | `pip install ollama` |

---

### 🔶 AI 에이전트 / 오케스트레이션

| 라이브러리 | 설명 | pip 설치 |
|-----------|------|---------|
| **langchain** | LLM 앱 구축을 위한 가장 대중적인 프레임워크 (체인·에이전트·도구) | `pip install langchain` |
| **langgraph** | LangChain 기반 상태 그래프 멀티에이전트 오케스트레이션 | `pip install langgraph` |
| **llama-index** | 문서 색인·RAG 특화 프레임워크 (LlamaIndex) | `pip install llama-index` |
| **autogen** | Microsoft의 멀티에이전트 대화 프레임워크 | `pip install pyautogen` |
| **crewai** | 역할 기반 AI 에이전트 팀 구성 프레임워크 | `pip install crewai` |
| **pydantic-ai** | Pydantic 기반 타입 안전 AI 에이전트 프레임워크 | `pip install pydantic-ai` |

---

### 🔵 RAG / 벡터 데이터베이스

| 라이브러리 | 설명 | pip 설치 |
|-----------|------|---------|
| **lightrag** | 그래프 기반 빠른 RAG (HKUDS/LightRAG) | `pip install lightrag-hku` |
| **chromadb** | 임베딩 저장·검색을 위한 오픈소스 벡터DB | `pip install chromadb` |
| **faiss-cpu** | Meta의 고성능 벡터 유사도 검색 라이브러리 | `pip install faiss-cpu` |
| **qdrant-client** | Qdrant 벡터DB 클라이언트 | `pip install qdrant-client` |
| **weaviate-client** | Weaviate 벡터DB 클라이언트 | `pip install weaviate-client` |
| **sentence-transformers** | 문서 임베딩 생성 (SBERT) | `pip install sentence-transformers` |

---

### 🟢 AI 브라우저 / 웹 자동화

| 라이브러리 | 설명 | pip 설치 |
|-----------|------|---------|
| **browser-use** | AI 에이전트용 브라우저 자동화 (GitHub Trending 1위권) | `pip install browser-use` |
| **playwright** | MS 브라우저 자동화 라이브러리 (browser-use 백엔드) | `pip install playwright` |
| **crawl4ai** | AI 최적화된 웹 크롤러 (LLM 친화적 출력) | `pip install crawl4ai` |
| **tavily-python** | AI 에이전트용 실시간 웹 검색 API | `pip install tavily-python` |

---

### 🟡 멀티모달 / 이미지·음성

| 라이브러리 | 설명 | pip 설치 |
|-----------|------|---------|
| **Pillow** | 이미지 처리 기본 라이브러리 | `pip install Pillow` |
| **diffusers** | HuggingFace Stable Diffusion / FLUX 이미지 생성 | `pip install diffusers` |
| **whisper** | OpenAI 음성인식(STT) 모델 | `pip install openai-whisper` |
| **TTS** | Coqui TTS - 고품질 텍스트음성변환 | `pip install TTS` |
| **moviepy** | 동영상 편집·생성 (AI 동영상 파이프라인에 활용) | `pip install moviepy` |

---

### 🟣 ML / 딥러닝 기반

| 라이브러리 | 설명 | pip 설치 |
|-----------|------|---------|
| **torch** | PyTorch - 딥러닝 연구·추론 | `pip install torch` |
| **accelerate** | HuggingFace 분산학습·최적화 (멀티GPU) | `pip install accelerate` |
| **peft** | 파라미터 효율 파인튜닝 (LoRA·QLoRA) | `pip install peft` |
| **trl** | RLHF·DPO·PPO 강화학습 파인튜닝 | `pip install trl` |
| **bitsandbytes** | LLM 4/8bit 양자화로 VRAM 절약 | `pip install bitsandbytes` |

---

### ⚪ AI 모니터링 / 평가 / DevOps

| 라이브러리 | 설명 | pip 설치 |
|-----------|------|---------|
| **langsmith** | LangChain 에이전트 추적·평가·모니터링 | `pip install langsmith` |
| **promptflow** | Microsoft Prompt Flow - LLM 앱 워크플로우 | `pip install promptflow` |
| **ragas** | RAG 시스템 자동 평가 프레임워크 | `pip install ragas` |
| **mlflow** | ML 실험 추적·모델 버전 관리 | `pip install mlflow` |

---

## 🔑 2026년 핵심 기술 트렌드 요약

```
1. 🤖 Agentic AI  - 단순 챗봇 → 멀티에이전트 자율 시스템
2. 📚 Graph RAG   - 벡터 검색 → 그래프 기반 지식 탐색
3. 🛠️ MCP 표준    - AI-도구 연동의 USB-C화 (표준 프로토콜)
4. 💻 AI 코딩     - Copilot → 자율 코딩 에이전트 (Cursor·Claude Code)
5. 💰 AI 금융     - LLM 멀티에이전트 자동매매 프레임워크 급증
6. 🔒 보안 자동화 - AI 기반 취약점 탐지·침투 테스트 자동화
7. 📹 콘텐츠 생성  - LLM+TTS+영상으로 숏폼 콘텐츠 완전 자동화
8. 🏠 로컬 AI     - 오프라인·프라이버시 우선 로컬 모델 수요 증가
```

---

## 🤖 AI 임베디드 작품 조사

### 📊 AI 임베디드 분야 요약

| 분야 | 플랫폼 | 난이도 | 추천도 |
|------|--------|--------|--------|
| 🧠 TinyML / Edge AI | ESP32, Arduino Nano 33 BLE | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| 🦾 AI 로봇팔 | Servo Motor + RPi/Arduino | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 🚗 자율주행 RC카 | RPi + Camera + Motor | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 🪞 AI 스마트 미러 | RPi + MagicMirror² | ⭐⭐ | ⭐⭐⭐⭐ |
| 🗣️ AI 음성 비서 | RPi + Whisper + LLM | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| ✈️ AI 드론 | RPi + Coral TPU + YOLOv8 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 🏠 AI 스마트홈 | ESP32 + Home Assistant | ⭐⭐ | ⭐⭐⭐⭐ |
| 📷 AI 카메라 / 비전 | ESP32-CAM, RPi Camera | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| 🌱 AI 스마트 농업 | Arduino + 센서 + ML | ⭐⭐ | ⭐⭐⭐ |
| 🩺 AI 헬스케어 웨어러블 | Arduino + 생체 센서 | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 🔒 AI 오프라인 서바이벌 PC | RPi + 로컬 LLM | ⭐⭐ | ⭐⭐⭐ |

---

### 1. 🧠 TinyML / Edge AI (마이크로컨트롤러 위에서 AI 추론)

> MCU에서 직접 ML 모델을 돌려 실시간 추론. 클라우드 불필요, 초저전력.

#### 핵심 프로젝트

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **TensorFlow Lite Micro (TFLM)** | 마이크로컨트롤러용 TensorFlow Lite 공식 포트 | [tensorflow/tflite-micro](https://github.com/tensorflow/tflite-micro) |
| **Edge Impulse** | 데이터 수집 → 학습 → 배포까지 올인원 TinyML 플랫폼 | [edgeimpulse](https://github.com/edgeimpulse) |
| **EloquentTinyML** | Arduino IDE에서 TFLite 모델을 쉽게 배포 | [eloquentarduino/EloquentTinyML](https://github.com/eloquentarduino/EloquentTinyML) |
| **Arduino ML Tools** | Arduino 공식 ML 라이브러리 & 예제 | [arduino/ArduinoTensorFlowLiteTutorials](https://github.com/arduino/ArduinoTensorFlowLiteTutorials) |

#### 작품 아이디어

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **제스처 인식 리모컨** | 가속도 센서로 손동작 인식 → 가전 제어 | Arduino Nano 33 BLE + IMU |
| **이상 소리 감지기** | 공장 기계 소리를 학습해 이상 감지 | ESP32 + I2S 마이크 |
| **키워드 음성 인식** | "불 켜", "불 꺼" 등 간단한 명령 인식 | ESP32 + MEMS 마이크 |
| **낙상 감지 장치** | 가속도+자이로 데이터로 낙상 판별 | Arduino Nano 33 BLE |
| **사람 감지 카메라** | ESP32-CAM에서 MobileNet으로 사람 검출 | ESP32-CAM |

---

### 2. 🦾 AI 로봇팔 (모방 학습 / 강화학습)

> AI가 사람의 동작을 모방하거나, 스스로 학습해 물체를 집는 로봇팔.

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **HuggingFace LeRobot** | HuggingFace의 오픈소스 로봇 프레임워크. 모방학습·강화학습·VLA 모델 지원. 다양한 로봇팔과 호환 | [huggingface/lerobot](https://github.com/huggingface/lerobot) |
| **SO-ARM100** | 3D 프린터로 제작 가능한 오픈소스 로봇팔. 메이커·연구자·AI 개발자 대상 | [TheRobotStudio/SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) |
| **Spider (Meta)** | 인간 모션 → 휴머노이드/로봇 핸드로 리타겟팅하는 물리 시뮬레이션 프레임워크 | [facebookresearch/spider](https://github.com/facebookresearch/spider) |

#### 작품 아이디어

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **AI 분류 로봇팔** | 카메라로 색상/모양 분류 → 서보 로봇팔이 분류 | RPi + 카메라 + 서보모터 |
| **모방학습 로봇팔** | 사람의 팔 동작을 카메라로 학습 → 재현 | LeRobot + SO-ARM100 |

---

### 3. 🚗 자율주행 RC카 / 자동차

> 카메라·LiDAR로 차선/장애물을 인식하고 자율 주행하는 프로젝트.

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **Autoware** | ROS 기반 풀스택 자율주행 소프트웨어. 인식→판단→제어 전 과정 | [autowarefoundation/autoware](https://github.com/autowarefoundation/autoware) |
| **openpilot (comma.ai)** | 325개 이상 차량 모델 지원 ADAS. 차선 유지, ACC, 운전자 모니터링 | [commaai/openpilot](https://github.com/commaai/openpilot) |
| **DonkeyCar** | 오픈소스 DIY 자율주행 RC카 플랫폼 (가장 대중적) | [autorope/donkeycar](https://github.com/autorope/donkeycar) |
| **End-to-end AD 리서치** | E2E 자율주행 논문·벤치마크 모음 | [OpenDriveLab/End-to-end-Autonomous-Driving](https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving) |

#### 작품 아이디어 (RC카 규모)

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **AI 자율주행 RC카** | 카메라 영상 기반 차선 인식 + 자율 주행 | RPi + Pi Camera + DC/Servo |
| **장애물 회피 로봇** | 초음파+카메라 융합으로 장애물 회피 | Arduino + 초음파 + 모터 |

---

### 4. 🪞 AI 스마트 미러

> 거울에 날씨·뉴스·일정 표시 + 얼굴/제스처 인식으로 인터랙션.

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **MagicMirror²** | 가장 유명한 오픈소스 스마트 미러 플랫폼. 모듈 확장 무한 | [MagicMirrorOrg/MagicMirror](https://github.com/MagicMirrorOrg/MagicMirror) |
| **AI Smart Mirror** | MagicMirror + AI 얼굴인식 + 음성인식 통합 | [HackerShackOfficial/Smart-Mirror](https://github.com/HackerShackOfficial/Smart-Mirror) |

#### 작품 아이디어

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **제스처 제어 스마트미러** | MediaPipe 손 인식 → 스와이프/탭으로 페이지 전환 | RPi + 카메라 + 양면 거울 |
| **얼굴인식 개인화 미러** | 사용자별 맞춤 정보 표시 (일정, 뉴스 등) | RPi + Pi Cam + OpenCV |

---

### 5. 🗣️ AI 음성 비서 (로컬 LLM 기반)

> 클라우드 없이 로컬에서 동작하는 AI 음성 비서. 프라이버시 최강.

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **Local LLM Assistant** | RPi 4에서 100% 로컬 실행. Whisper(STT) + TinyLlama(LLM) + eSpeak(TTS) | [nickbild/local_llm_assistant](https://github.com/nickbild/local_llm_assistant) |
| **Local-Voice** | Linux/RPi용 오프라인 음성비서. Ollama + Vosk + Piper TTS | [m15-ai/Local-Voice](https://github.com/m15-ai/Local-Voice) |
| **echoOLlama** | 로컬 LLM 기반 실시간 음성 AI 플랫폼. WebSocket 스트리밍 | [echoOLlama/echoOLlama](https://github.com/echoOLlama/echoOLlama) |

#### 작품 아이디어

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **로컬 AI 스피커** | 웨이크워드 → Whisper STT → 로컬 LLM → Piper TTS 파이프라인 | RPi 4/5 + 마이크 + 스피커 |
| **AI 비서 + 스마트홈** | 음성 명령 → LLM 해석 → Home Assistant로 가전 제어 | RPi + ESP32 (릴레이) |

---

### 6. ✈️ AI 드론 (컴퓨터비전 + 자율비행)

> AI로 도로 손상 감지, 물체 추적, 자율 비행을 수행하는 드론.

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **ai-drone-ws2526** | YOLOv8 기반 도로 손상 감지 FPV 드론. RPi + Coral TPU 엣지 추론 | [ai-drone-ws2526](https://github.com/ai-drone-ws2526) |
| **Autonomous-UAVs** | 자율 드론용 오픈소스 알고리즘 큐레이션 (SLAM, 경로 계획, 네비게이션) | [alexkoven/Autonomous-UAVs](https://github.com/alexkoven/Autonomous-UAVs) |
| **Autonomous AI Drone** | 센서 → AI 모델 → 제어 명령 직접 생성. 장애물 회피 + 타겟 추적 | [sieuwe1/Autonomous-Ai-drone-scripts](https://github.com/sieuwe1/Autonomous-Ai-drone-scripts) |

---

### 7. 🏠 AI 스마트홈 / IoT

> ESP32 + Home Assistant + AI로 지능형 스마트홈 구축.

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **Home Assistant** | 오픈소스 홈 자동화 플랫폼. AI 통합(음성, 자동화 규칙) 지원 | [home-assistant/core](https://github.com/home-assistant/core) |
| **ESPHome** | ESP32/8266을 YAML 설정만으로 스마트 디바이스화 | [esphome/esphome](https://github.com/esphome/esphome) |
| **MindEase** | ESP32 + AI를 결합한 정신 건강 어시스턴트 (오디오 입출력) | GitHub 검색: MindEase ESP32 |

#### 작품 아이디어

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **AI 에너지 절약 시스템** | 전력 사용 패턴을 ML로 학습 → 자동 전원 관리 | ESP32 + 전류 센서 + 릴레이 |
| **AI 침입 탐지** | PIR + 카메라 + 사람 감지 ML 모델로 침입 알림 | ESP32-CAM + PIR + 부저 |

---

### 8. 📷 AI 카메라 / 컴퓨터비전 디바이스

> 임베디드 카메라 위에서 실시간 객체 감지 / 분류 수행.

| 프로젝트 | 설명 | 하드웨어 |
|---------|------|----------|
| **ESP32-CAM + 사람 감지** | MobileNet 양자화 모델로 사람 감지 | ESP32-CAM |
| **RPi + Hailo AI HAT** | RPi 5에 Hailo AI 가속기 장착 → 실시간 객체 감지 | RPi 5 + Hailo-8L |
| **OpenMV Cam** | 마이크로파이썬 기반 비전 모듈. 바코드/얼굴/색상/QR 인식 | OpenMV H7 Plus |
| **JeVois** | TensorFlow 내장 카메라 모듈. 33종 비전 모듈 탑재 | JeVois-A33 |
| **Google Coral USB** | TPU 기반 엣지 AI 추론 가속기 (RPi와 결합) | Coral USB + RPi |

#### 작품 아이디어

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **AI 쓰레기 분류기** | 카메라로 쓰레기 종류 분류 → 해당 칸으로 이동 | RPi + Camera + 서보 |
| **실시간 마스크 감지** | 마스크 착용 여부 판별 + 알림 | ESP32-CAM + OLED |
| **번호판 인식 주차 시스템** | 차량 번호판 OCR → 출입 관리 | RPi + Camera + 차단기 |

---

### 9. 🌱 AI 스마트 농업

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **AI 작물 질병 진단** | 카메라로 잎 촬영 → CNN 모델로 질병 판별 | RPi + Camera |
| **자동 관수 시스템** | 토양 습도 + 날씨 데이터 → ML 예측 → 자동 물 공급 | ESP32 + 습도센서 + 펌프 |
| **해충 탐지 트랩** | 카메라로 해충 촬영 → YOLO 감지 → 카운트 | ESP32-CAM + LED |

---

### 10. 🩺 AI 헬스케어 / 웨어러블

| 작품명 | 설명 | 하드웨어 |
|--------|------|----------|
| **심박 이상 감지** | PPG 센서 데이터 → TinyML로 부정맥 패턴 감지 | Arduino + MAX30102 |
| **자세 교정 디바이스** | IMU 센서로 척추 각도 측정 → 나쁜 자세 시 진동 알림 | Arduino Nano 33 BLE + 진동모터 |
| **수면 품질 분석기** | 가속도+심박+온도 → 수면 단계 분류 | ESP32 + 생체센서 |

---

### 11. 🔒 오프라인 AI 서바이벌 PC

| 프로젝트 | 설명 | GitHub |
|---------|------|--------|
| **Project N.O.M.A.D** | 오프라인 생존 컴퓨터. AI·도구·의학 지식·지도 등을 인터넷 없이 패키징 | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) |

---

## 🛠️ 임베디드 AI 핵심 기술 스택

### 하드웨어 플랫폼 비교

| 플랫폼 | AI 성능 | 가격 | 적합 분야 |
|--------|---------|------|-----------|
| **ESP32** | ★☆☆☆ (TinyML만) | ~₩5,000 | 초저전력 센서 AI, IoT |
| **ESP32-CAM** | ★★☆☆ | ~₩8,000 | 간단한 이미지 분류 |
| **Arduino Nano 33 BLE** | ★★☆☆ | ~₩30,000 | 모션/음성 TinyML |
| **Raspberry Pi 4/5** | ★★★☆ | ~₩70,000~100,000 | 비전, LLM, 종합 AI |
| **RPi + Coral USB TPU** | ★★★★ | ~₩130,000 | 실시간 객체 감지 |
| **RPi + Hailo AI HAT** | ★★★★★ | ~₩150,000+ | 고성능 엣지 비전 AI |
| **NVIDIA Jetson Nano** | ★★★★ | ~₩150,000 | 딥러닝 추론, 로봇 |
| **OpenMV Cam** | ★★★☆ | ~₩80,000 | 독립형 비전 디바이스 |

### 소프트웨어 / 프레임워크

| 도구 | 용도 | 대상 하드웨어 |
|-----|------|-------------|
| **TensorFlow Lite Micro** | 마이크로컨트롤러 ML 추론 | ESP32, Arduino |
| **Edge Impulse** | 데이터 수집→학습→배포 올인원 | ESP32, Arduino, RPi |
| **MediaPipe** | 손/얼굴/포즈 인식 (실시간) | RPi, Jetson |
| **YOLO (v8/v11)** | 실시간 객체 감지 | RPi + 가속기, Jetson |
| **OpenCV** | 컴퓨터비전 기본 라이브러리 | 모든 플랫폼 |
| **Whisper** | 음성→텍스트 (STT) | RPi 4/5 |
| **Ollama** | 로컬 LLM 실행 (Llama, Mistral 등) | RPi 5, Jetson |
| **Piper TTS** | 오프라인 텍스트→음성 (TTS) | RPi, Linux |
| **ESPHome** | ESP 디바이스를 YAML로 설정 | ESP32/8266 |

---

## ⭐ 동아리/대회 추천 TOP 5 임베디드 AI 작품

> 구현 가능성 + 임팩트 + AI 활용도 기준 선정

| 순위 | 작품명 | 핵심 기술 | 추천 이유 |
|------|--------|-----------|-----------|
| 1 | **AI 음성 비서 스피커** | RPi + Whisper + LLM + TTS | 완전 로컬 AI, 프라이버시, 임팩트 최강 |
| 2 | **AI 쓰레기 자동 분류기** | RPi + YOLO + 서보모터 | 비전AI + 임베디드 + 사회적 가치 |
| 3 | **제스처 인식 스마트 리모컨** | Arduino + TinyML + IMU | 저비용, TinyML 핵심 학습 |
| 4 | **AI 자율주행 RC카** | RPi + Camera + DonkeyCar | 자율주행 입문, 대회 다수 |
| 5 | **AI 로봇팔 (모방학습)** | LeRobot + SO-ARM100 | HuggingFace 생태계, 최신 트렌드 |

---

## 📚 학습 참고 자료

| 자료 | 설명 | 링크 |
|-----|------|------|
| HuggingFace LeRobot 문서 | 로봇 AI 프레임워크 공식 문서 | [huggingface/lerobot](https://github.com/huggingface/lerobot) |
| Edge Impulse Docs | TinyML 올인원 플랫폼 튜토리얼 | [docs.edgeimpulse.com](https://docs.edgeimpulse.com) |
| DonkeyCar Docs | 자율주행 RC카 빌드 가이드 | [docs.donkeycar.com](https://docs.donkeycar.com) |
| TinyML 한국어 자료 | 네이버 카페/블로그 TinyML 커뮤니티 | 검색: "TinyML 한국어" |
| awesome-edge-ml | 엣지 ML 리소스 큐레이션 | [GitHub topic: embedded-machine-learning](https://github.com/topics/embedded-machine-learning) |

---

> 📅 본 문서는 2026년 3월 23일 GitHub Trending 기준으로 작성되었습니다.
> 트렌드는 빠르게 변화하므로 [GitHub Trending](https://github.com/trending)에서 최신 정보를 확인하세요.

