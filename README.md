# ✅ Todo List

심플하고 예쁜 React Todo List 앱이에요!  
할 일 추가, 완료 토글, 삭제까지 기본 기능 모두 구현.

## 📸 데모 스크린샷

<img width="1942" height="1233" alt="스크린샷 2025-12-19 105818" src="https://github.com/user-attachments/assets/baa9d5a5-d6d3-4ea9-8a15-36cf30a563f0" />
 

## ✨ 특징

- 깔끔하고 반응형 UI
- 할 일 추가 / 완료 토글 / 삭제 기능
- 완료된 할 일 개수 실시간 카운트
- 상태 관리: React `useState` 활용
- 불변성 유지하며 상태 업데이트 (함수형 업데이트 추천)

## 🛠️ 기술 스택

- **Frontend**: React 
- **스타일**: CSS 
- **배포**: Vercel, Netlify 등 정적 호스팅 추천

## 🚀 시작하기

```bash
# 저장소 클론
git clone https://github.com/jayicebear/react-todo-list.git
cd react-todo-list

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🔄 업데이트 방식

```bash
toggleTodo(2) 실행
        │
        ▼
todos.map(todo)
        │
        ├── todo = {id:1} → id == 2? ❌ 그대로 유지
        │
        ├── todo = {id:2} → id == 2? ✔ 토글 적용
        │          { ...todo, completed: !completed }
        │           즉 → completed: true → false 로 변경
        │
        └── todo = {id:3} → id == 2? ❌ 그대로 유지
        ▼
새로운 todos 배열 생성

[
  { id: 1, text: "공부하기", completed: false },
  { id: 2, text: "운동하기", completed: false }, ← 토글됨!
  { id: 3, text: "청소하기", completed: false }
]
        │
        ▼
setTodos(...) 로 상태 업데이트
        │
        ▼
React가 화면 다시 렌더링 (UI 업데이트!)
