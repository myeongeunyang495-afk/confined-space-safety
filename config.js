// KORAIL 밀폐 SAFE PASS 설정
// 1) Cloudflare Worker 주소: 이미 생성한 Worker 주소를 사용합니다.
window.SAFE_AI_ENDPOINT = "https://korail-confine-safety.myeongeunyang495.workers.dev";

// 2) 카카오톡 '썸네일 카드 직접공유'를 사용할 때만 입력합니다.
// Kakao Developers > 앱 > 플랫폼 키 > JavaScript 키 값을 입력하세요.
// 이 JavaScript 키는 웹 SDK 식별용 키이며, Cloudflare/OpenAI API 비밀키가 아닙니다.
window.KAKAO_JS_KEY = "";
