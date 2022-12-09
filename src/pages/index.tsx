import { useCallback } from 'react'
import reactLogo from '@/assets/svg/react.svg'
import viteLogo from '@/assets/svg/vite.svg'
import { DarkModeToggle } from '@/components/common/DarkModeToggle'
import { Icon } from '@/components/common/Icon'
import { Scrollbar } from '@/components/common/Scorllbar'
import { createToast } from '@/components/common/Toast'

function HomePage() {
  // const [count, setCount] = useState(0)

  const showToast = useCallback(() => createToast({ message: 'Show success toast' }), [])

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
      <div className="card w-full flex flex-row justify-between">
        <DarkModeToggle />
        <Icon name="i-edso-tick-circle" onClick={showToast} />
        <DarkModeToggle className="ml-4" />
      </div>
      <Scrollbar edso-p="4" edso-w="100px" edso-h="50" edso-flex="1">
        <div h="200">
          {' '}
          rounded scrollbar rounded scrollbar rounded scrollbar rounded scrollbar rounded scrollbar
          rounded scrollbar rounded scrollbar rounded scrollbar
        </div>
      </Scrollbar>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default HomePage
