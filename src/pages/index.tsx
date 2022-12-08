import { useState } from 'react'
import reactLogo from '@/assets/svg/react.svg'
import viteLogo from '@/assets/svg/vite.svg'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Index Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default HomePage
