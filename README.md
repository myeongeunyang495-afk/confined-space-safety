# KORAIL 밀폐 SAFE PASS — Cloudflare 무료 AI 버전

## 구성
**GitHub Pages(index.html) → Cloudflare Worker → Cloudflare Workers AI**

- OpenAI API 키: **사용하지 않음**
- 별도 유료 AI API: **사용하지 않음**
- AI 실행: Cloudflare Workers AI binding(`env.AI`) 사용
- 텍스트 브리핑: `@cf/zai-org/glm-4.7-flash`
- 가스측정기 사진 수치 인식: `@cf/google/gemma-4-26b-a4b-it`

Cloudflare Workers AI Free의 일일 무료 할당량 안에서 비용 없이 시작할 수 있습니다. 무료 한도를 소진하면 AI 기능만 일시 중단되며, 작업개소·가스 직접입력·안전신호등·작업허가·서명 등 핵심 기능은 계속 동작합니다.

## 핵심 흐름
1. 작업자 소속·작업부서·작업개소 선택
2. SAFE AI CHECK: 선택 공간의 위험·미확인 항목·담당부서 브리핑
3. 공간 → 교육 → 장비 → 허가 확인
4. 작업허가서에서 P1~P9 가스 측정지점 선택
5. `📷 가스측정기 촬영 → 수치 자동입력`
6. 작업자가 실제 계기판과 AI 입력값을 대조해 확인
7. 고정 안전기준/신호등 및 순차서명 진행

## GitHub Pages에 올릴 파일
- `index.html`
- `config.js`
- `docs/`

`cloudflare-worker/`는 GitHub Pages 실행 파일이 아니라 Cloudflare Worker 배포용 코드입니다.

## 안전 설계
- AI는 작업 가능/안전 여부를 판정하지 않습니다.
- 사진 인식값은 작업자 확인 전 안전신호등 판정에 사용하지 않습니다.
- 성명·서명은 AI 브리핑 서버로 보내지 않습니다.
- 촬영사진은 허가서·공유링크·localStorage에 저장하지 않습니다.
