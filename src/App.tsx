import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [lazyText, setLazyText] = useState<string>("🎉");

  function onMouseOver(): void {
    setLazyText("I Still Lazy LOL 😁😁");
  }
  function onMouseLeave(): void {
    setLazyText("🎉");
  }

  return (
    <>
      <div className='flex justify-center min-h-screen'>
        <div className='font-bold my-auto text-3xl hover:text-red-500' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>{lazyText}</div>
      </div>
    </>
  )
}

export default App
