# KORAIL 밀폐 SAFE PASS

모바일 기반 밀폐공간 작업 전 TBM · 안전확인 · 작업허가 원스톱 웹앱입니다.

## GitHub Pages 업로드 파일
저장소 최상위에 다음 파일/폴더를 그대로 올립니다.

- `index.html`
- `config.js`
- `share-thumbnail.png`
- `README.md`
- `docs/`

## 현재 주요 흐름
1. 작업부서 및 개소 확인
2. 작업 전 확인
3. 작업허가서

완료 전 다음 단계는 비활성화되며, 완료 후 다음 단계가 열립니다.

## Cloudflare
웹앱 AI 및 허가서 공유 기능은 별도로 배포한 Cloudflare Worker를 사용합니다.
`config.js`의 `SAFE_AI_ENDPOINT`가 Worker 주소와 일치해야 합니다.

## Kakao
카카오톡 썸네일 직접공유를 쓰려면 `config.js`의 `KAKAO_JS_KEY`를 설정해야 합니다.
키를 설정하지 않아도 지원되는 모바일에서는 기본 공유/링크 공유로 대체됩니다.
