# 카카오톡 썸네일 직접공유 설정

카카오톡에서 썸네일 카드 형태의 직접공유를 사용하려면 Kakao Developers 설정이 필요합니다.

## 1. Kakao Developers 앱 생성
Kakao Developers에서 앱을 하나 생성합니다. 별도 유료 API가 필요한 기능은 아닙니다.

## 2. JavaScript 키 확인
앱의 **플랫폼 키 > JavaScript 키**를 복사합니다.
GitHub `config.js`의 아래 부분에 입력합니다.

```js
window.KAKAO_JS_KEY = "여기에_JavaScript_키";
```

## 3. JavaScript SDK 도메인 등록
Kakao Developers 앱 설정에서 GitHub Pages 도메인을 등록합니다.
예:

`https://사용자아이디.github.io`

## 4. 제품 링크 Web domain 등록
카카오톡 공유 메시지의 `허가서 확인·서명` 버튼이 열릴 수 있도록 동일 GitHub Pages 도메인을 **제품 링크 > Web domain**에도 등록합니다.

## 5. Cloudflare KV 연결
긴 작업허가서와 서명 데이터를 URL에 직접 넣지 않고 Cloudflare에 임시 저장합니다.

1. Cloudflare에서 KV namespace를 하나 생성합니다. 예: `korail-safe-permits`
2. 기존 Worker `korail-confine-safety`로 이동합니다.
3. `Bindings > Add binding > KV Namespace`
4. Variable name: `PERMITS`
5. 생성한 namespace를 선택하고 Deploy합니다.
6. `cloudflare-worker/worker.js` 코드로 Worker를 교체하고 Deploy합니다.

## 6. 테스트
1. 작업부서 서명 완료
2. `작업관리부서에 카카오톡 공유`
3. 카카오톡 공유화면에 SAFE PASS 썸네일 카드가 표시되는지 확인
4. 상대방 휴대전화에서 `허가서 확인·서명`을 눌러 같은 허가서가 열리는지 확인

### 주의
- Kakao JavaScript SDK는 JavaScript 키와 등록된 도메인이 필요합니다.
- 카카오톡 공유 메시지 안의 웹 링크 도메인도 제품 링크 Web domain에 등록되어야 합니다.
- 공유 링크는 서명정보가 포함된 허가서를 열 수 있으므로 관계자에게만 전송합니다.
