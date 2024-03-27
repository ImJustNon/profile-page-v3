import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routers from "./routes/routers";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
		<>
			<ChakraProvider>
				{/* <div className='set-bg'></div> */}
				<Routers />
			</ChakraProvider>
		</>
	);
}

export default App
