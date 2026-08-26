# KORAIL 밀폐 SAFE PASS — 모바일 카드형 허가서 / AI / 카카오톡 공유

## 이번 버전 핵심
- 모바일 작업허가서를 **5장의 가로 슬라이드 카드**로 분리
  1. 기본정보
  2. 가스농도 측정
  3. 안전조치
  4. 입장·퇴장
  5. 승인·공유
- 화면을 위아래로 끝없이 내리지 않고, 좌우 스와이프 또는 `이전/다음`으로 작성
- 가스측정기 이미지는 **사진 선택 또는 카메라 촬영** 모두 가능
- 작업자/승인자 서명은 작은 칸 대신 **전체화면에 가까운 팝업 서명창** 사용
- 카카오톡 공유 데이터는 긴 URL에 직접 넣지 않고 **Cloudflare KV에 7일간 임시 저장** 후 짧은 링크 공유
- Kakao JavaScript SDK 설정 시 **썸네일 카드 형태로 카카오톡 직접 공유**
- Kakao SDK 미설정 시 휴대전화 기본공유 또는 링크 복사로 자동 대체

## GitHub Pages 업로드 파일
- `index.html`
- `config.js`
- `share-thumbnail.png`
- `docs/`

`cloudflare-worker/worker.js`는 GitHub Pages 실행 파일이 아니라 기존 Cloudflare Worker의 코드를 교체할 때 사용합니다.

## Cloudflare Binding
기존 Workers AI binding `AI` 외에 작업허가서 공유를 위해 KV binding이 1개 추가로 필요합니다.

- Binding type: KV Namespace
- Variable name: `PERMITS`
- 용도: 작업관리부서/협조부서에 전달할 허가서의 임시 공유본 저장
- 현재 worker.js 보관기간: 7일

## 카카오톡 직접공유
카카오톡 썸네일 카드 공유는 Kakao Developers의 JavaScript SDK 설정이 필요합니다.
`config.js`의 `window.KAKAO_JS_KEY`에 JavaScript 키를 입력하고 GitHub Pages 도메인을 JavaScript SDK 도메인과 제품 링크 Web domain에 등록합니다.
