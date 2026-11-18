# React 할 일 앱 (미니 프로젝트)

React 1주차 학습용 프로젝트입니다. JSX, 컴포넌트, props, `useState`, 이벤트 처리, 조건부·리스트 렌더링을 한 번에 연습할 수 있어요.

## 실행 방법

```bash
npm install
npm run dev
```

터미널에 나온 주소(보통 http://localhost:5173)로 접속하세요.

## 폴더 구조

```
src/
├── main.jsx              # 진입점
├── App.jsx               # 상태(todos, filter)와 핵심 로직
├── index.css             # 스타일
└── components/
    ├── TodoForm.jsx      # 입력창 (제어 컴포넌트)
    ├── TodoList.jsx      # 목록 + 빈 상태 처리
    └── TodoItem.jsx      # 항목 하나
```

## 읽는 순서 추천

1. `App.jsx` : 상태가 어디에 있고, 어떻게 자식에게 내려가는지 (주석의 학습 포인트 1~5)
2. `TodoForm.jsx` : 입력값을 state와 연결하는 방법
3. `TodoList.jsx` → `TodoItem.jsx` : 리스트 렌더링과 `key`

## 도전 과제 (난이도 순)

1. **수정 기능:** 항목을 더블클릭하면 입력창으로 바뀌어 텍스트를 고칠 수 있게 하기
2. **전체 완료 토글:** 모든 항목을 한 번에 완료/해제하는 체크박스 추가
3. **localStorage 저장 (2주차):** 새로고침해도 목록이 남도록 `useEffect`로 저장하고, `useLocalStorage` 커스텀 훅으로 분리하기
4. **마감일 추가:** 항목에 날짜를 넣고, 지난 항목은 빨간색으로 표시하기
5. **useReducer로 리팩터링 (4주차 예습):** `addTodo`, `toggleTodo`, `deleteTodo`를 reducer 하나로 합치기

## 스스로 점검

- 체크박스를 눌렀을 때 화면이 바뀌기까지 어떤 순서로 코드가 실행되는지 설명할 수 있나요?
- `setTodos(todos.push(...))`처럼 쓰면 왜 안 되는지 설명할 수 있나요?
- `key`를 `index`로 쓰면 어떤 문제가 생길 수 있을까요?
