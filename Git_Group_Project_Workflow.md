# 깃허브 그룹 프로젝트 완전 가이드
> 📺 참고 영상: [깃허브로 그룹프로젝트 하는 법 | 코딩알려주는누나](https://www.youtube.com/watch?v=tkkbYCajCjM&t=36s)

---

## 📌 전체 브랜치 전략

```
main (배포용)
 └── develop (통합 개발)
       ├── feature/기능A  ← 팀원 A 작업
       └── feature/기능B  ← 팀원 B 작업
```

- **main**: 실제 배포 코드 (건드리지 않음)
- **develop**: 팀원들이 PR을 올리는 통합 브랜치
- **feature/xxx**: 각 팀원이 기능별로 만드는 작업 브랜치

---

## 👑 리더 초기 세팅 (한 번만)

```bash
# 1. 레포 생성 후 클론
git clone https://github.com/team/project.git
cd project

# 2. develop 브랜치 생성 및 푸시
git checkout -b develop
git push origin develop

# 3. GitHub에서 default branch를 develop으로 변경
# Settings → Branches → Default branch → develop
```

---

## 👤 팀원 공통 초기 세팅

```bash
# 레포 클론
git clone https://github.com/team/project.git
cd project

# develop 브랜치로 전환
git checkout develop

# 내 작업 브랜치 생성
git checkout -b feature/기능이름
```

---

## ✅ CASE A — 먼저 머지한 팀원 (충돌 없음)

### 시나리오
- A가 `feature/login` 브랜치를 만들어 작업 후 PR → develop에 **가장 먼저 머지**됨
- 아무 충돌 없이 깔끔하게 완료

### A의 작업 흐름

```bash
# 1. 작업 브랜치 생성
git checkout develop
git checkout -b feature/login

# 2. 코드 작성 후 커밋
git add .
git commit -m "feat: 로그인 기능 구현"

git add .
git commit -m "feat: 로그인 유효성 검사 추가"

# 3. 원격에 푸시
git push origin feature/login

# 4. GitHub에서 PR 생성: feature/login → develop
# 5. 리더가 코드 리뷰 후 Merge Pull Request 클릭
```

### 🔍 A 기준 `git log --oneline` (머지 완료 후 develop 브랜치)

```
$ git checkout develop
$ git pull origin develop
$ git log --oneline

a7f3c12 (HEAD -> develop, origin/develop) Merge pull request #1 from team/feature/login
d4e8b21 feat: 로그인 유효성 검사 추가
9c1a047 feat: 로그인 기능 구현
f2b6e33 Initial commit: 프로젝트 초기 세팅
```

**특징**:
- 커밋 히스토리가 **직선형**에 가까움
- 충돌 해결 커밋 없음
- PR 머지 커밋 1개만 추가됨

---

## ⚔️ CASE B — 나중에 머지하는 팀원 (충돌 발생 & 해결)

### 시나리오
- B도 A와 **동시에** `feature/signup` 브랜치를 만들어 작업
- B가 PR을 올렸더니 A의 코드가 이미 develop에 들어간 상태 → **충돌 발생**
- B는 충돌을 해결한 후 다시 푸시해야 함

### B의 작업 흐름

```bash
# 1. 작업 시작 (A와 같은 시점)
git checkout develop
git checkout -b feature/signup

# 2. 코드 작성 후 커밋
git add .
git commit -m "feat: 회원가입 기능 구현"

git add .
git commit -m "feat: 이메일 중복 체크 추가"

# 3. 원격에 푸시 → PR 생성
git push origin feature/signup
# GitHub에서 PR 생성: feature/signup → develop
```

> ⚠️ 이 시점에서 PR 페이지에 **"Conflicts"** 표시 발생!

```bash
# 4. 충돌 해결을 위해 최신 develop을 내 브랜치에 머지
git checkout develop
git pull origin develop          # A의 코드가 포함된 최신 develop 받기

git checkout feature/signup
git merge develop                # 내 브랜치에 최신 develop 머지

# 5. 충돌 파일 수동 수정
# (예: auth.js 파일에서 <<<< HEAD / ==== / >>>> develop 부분 직접 편집)
# 원하는 코드로 정리 후 저장

# 6. 충돌 해결 완료 처리
git add .
git commit -m "merge: develop과 충돌 해결"

# 7. 다시 푸시 → PR이 자동으로 업데이트됨
git push origin feature/signup

# 8. 리더가 코드 리뷰 후 Merge Pull Request 클릭
```

### 🔍 B 기준 `git log --oneline` (머지 완료 후 develop 브랜치)

```
$ git checkout develop
$ git pull origin develop
$ git log --oneline

3b9d1f8 (HEAD -> develop, origin/develop) Merge pull request #2 from team/feature/signup
e2c7a44 merge: develop과 충돌 해결
d4e8b21 feat: 이메일 중복 체크 추가
8f1c3b9 feat: 회원가입 기능 구현
a7f3c12 Merge pull request #1 from team/feature/login   ← A의 PR 머지
9c1a047 feat: 로그인 유효성 검사 추가                  ← A의 커밋
d4e8b21 feat: 로그인 기능 구현                         ← A의 커밋
f2b6e33 Initial commit: 프로젝트 초기 세팅
```

**특징**:
- A의 커밋들이 **이미 히스토리에 포함**되어 있음
- `merge: develop과 충돌 해결` 커밋이 **추가로 생성**됨
- 히스토리가 A보다 **더 길고 복잡**해 보임

---

## 📊 A vs B 비교 요약

| 항목 | Case A (먼저 머지) | Case B (나중에 머지) |
|------|-------------------|---------------------|
| 충돌 발생 | ❌ 없음 | ✅ 발생 |
| 충돌 해결 커밋 | ❌ 없음 | ✅ `merge: develop과 충돌 해결` |
| `git log` 커밋 수 | 적음 | 많음 (A 커밋 포함) |
| PR 머지까지 단계 | 3단계 | 5단계 (충돌 해결 포함) |
| 히스토리 복잡도 | 낮음 | 높음 |

---

## 🌲 전체 커밋 트리 시각화

```
f2b6e33  Initial commit
    │
    ├──(A 브랜치)──┐
    │              │ 9c1a047  feat: 로그인 기능 구현
    │              │ d4e8b21  feat: 로그인 유효성 검사
    │              │
    └──(B 브랜치)──┤ 8f1c3b9  feat: 회원가입 기능 구현
                   │ d4e8b21  (B) feat: 이메일 중복 체크
                   │
                   ▼
              a7f3c12  Merge PR #1 (A의 feature/login → develop)
                   │
                   │ ← B가 develop을 자기 브랜치로 머지 (충돌 해결)
                   │ e2c7a44  merge: develop과 충돌 해결
                   │
                   ▼
              3b9d1f8  Merge PR #2 (B의 feature/signup → develop)
```

---

## 💡 핵심 팁

### ✅ 충돌 예방법
```bash
# 작업 시작 전, 항상 최신 develop을 받아서 브랜치 생성
git checkout develop
git pull origin develop
git checkout -b feature/내기능
```

### ✅ 충돌 발생 시 체크리스트
1. `git checkout develop && git pull origin develop` → 최신화
2. `git checkout feature/내브랜치 && git merge develop` → 내 브랜치에 머지
3. 충돌 파일 열어서 `<<<<`, `====`, `>>>>` 표시 직접 수정
4. `git add . && git commit -m "merge: 충돌 해결"`
5. `git push origin feature/내브랜치` → PR 자동 업데이트

### ✅ 코드 리뷰 절차
- PR을 올린 후 팀원들이 GitHub에서 **Files changed** 탭에서 코드 리뷰
- 리뷰어는 줄 단위로 코멘트 남기기 가능
- 수정 후 다시 커밋&푸시하면 PR에 자동 반영
- 모두 Approve하면 리더가 **Merge Pull Request** 클릭

---

## 📋 전체 워크플로우 순서도

```
[리더] 레포 생성 & develop 브랜치 세팅
          │
          ▼
[팀원 전원] git clone → git checkout -b feature/xxx
          │
    ┌─────┴─────┐
    │           │
  [A] 먼저    [B] 동시에
  작업 완료   작업 완료
    │           │
  PR #1 →    PR #2 →
  충돌 없음   충돌 발생!
    │           │
  Merge ✅     │
              충돌 해결
              (develop merge)
                │
              PR #2 업데이트
                │
              Merge ✅
```

---

> 📝 **작성일**: 2026-04-09  
> 📺 **출처**: 코딩알려주는누나 - 깃허브로 그룹프로젝트 하는 법
