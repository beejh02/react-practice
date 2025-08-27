import { useState } from 'react'
import './index.css'   // 전역 리셋/기본
import './App.css'     // 컴포넌트 스타일

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <h1>My Todo List</h1>
      </header>
      <div id="week">이번 주 todolist</div>
      <div className="container">
        
        <div className="dow">
          <h2 className="dow-title">일요일</h2>
          <input className="dow-input" placeholder="일정 추가하기"></input>
        </div>
        <div className="dow">
          <h2 className="dow-title">월요일</h2>
          <input className="dow-input" placeholder="일정 추가하기"></input>
        </div>
        <div className="dow">
          <h2 className="dow-title">화요일</h2>
          <input className="dow-input" placeholder="일정 추가하기"></input>
        </div>
        <div className="dow">
          <h2 className="dow-title">수요일</h2>
          <input className="dow-input" placeholder="일정 추가하기"></input>
        </div>
        <div className="dow">
          <h2 className="dow-title">목요일</h2>
          <input className="dow-input" placeholder="일정 추가하기"></input>
        </div>
        <div className="dow">
          <h2 className="dow-title">금요일</h2>
          <input className="dow-input" placeholder="일정 추가하기"></input>
        </div>
        <div className="dow">
          <h2 className="dow-title">토요일</h2>
          <input className="dow-input" placeholder="일정 추가하기"></input>
        </div>
      </div>
    </div>
  )
}

export default App
