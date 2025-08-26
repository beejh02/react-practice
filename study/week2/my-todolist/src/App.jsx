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

      <div className="container">
        {/* Todo 리스트 컴포넌트 추가 가능 */}
      </div>
    </div>
  )
}

export default App
