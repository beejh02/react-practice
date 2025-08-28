import { useState } from 'react'
import './index.css'   // 전역 리셋/기본
import './App.css'     // 컴포넌트 스타일

const DAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

function App() {
  // 요일별 입력 값
  const [inputs, setInputs] = useState(
    DAYS.reduce((acc, d) => {
      acc[d] = ''
      return acc
    }, {})
  )

  // 요일별 todo 목록
  const [todos, setTodos] = useState(
    DAYS.reduce((acc, d) => {
      acc[d] = []
      return acc
    }, {})
  )

  const handleChange = (day, e) => {
    setInputs(prev => ({ ...prev, [day]: e.target.value }))
  }

  // Enter 입력 시 할 일 추가
  const handleKeyDown = (day, e) => {
    if (e.key !== 'Enter') return
    const text = (inputs[day] || '').trim()
    if (!text) return

    setTodos(prev => ({
      ...prev,
      [day]: [...prev[day], { id: crypto.randomUUID?.() || String(Date.now()) + Math.random(), text, done: false }]
    }))
    setInputs(prev => ({ ...prev, [day]: '' }))
  }

  const toggleDone = (day, id) => {
    setTodos(prev => ({
      ...prev,
      [day]: prev[day].map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    }))
  }

  const removeTodo = (day, id) => {
    setTodos(prev => ({
      ...prev,
      [day]: prev[day].filter(item => item.id !== id)
    }))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>My Todo List</h1>
      </header>

      <div id="week" aria-live="polite">이번 주 todolist</div>

      <div className="container">
        {DAYS.map(day => (
          <section className="dow" key={day} aria-labelledby={`title-${day}`}>
            <h2 className="dow-title" id={`title-${day}`}>{day}</h2>

            <input
              className="dow-input"
              placeholder="일정 추가하기"
              value={inputs[day]}
              onChange={(e) => handleChange(day, e)}
              onKeyDown={(e) => handleKeyDown(day, e)}
              aria-label={`${day} 일정 입력`}
            />

            <ul className="todo-list">
              {todos[day].map(item => (
                <li className="todo-item" key={item.id}>
                  <label className="todo-label">
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => toggleDone(day, item.id)}
                      aria-label={`${day} - ${item.text} 완료 여부`}
                    />
                    <span className={`todo-text ${item.done ? 'done' : ''}`}>
                      {item.text}
                    </span>
                  </label>
                  <button
                    className="todo-remove"
                    onClick={() => removeTodo(day, item.id)}
                    aria-label="삭제"
                    title="삭제"
                    type="button"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export default App
