import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import router from "./routes";
import { RouterProvider } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';


function App() {
  return (
    <div className="bg-slate-800 h-screen">
      <div className="flex justify-center items-center h-screen">
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
      </div>
    </div>
  )
}

export default App
