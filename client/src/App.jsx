import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes'
import { UIContext} from './context/context'
import { useState } from 'react'

function App() {

  const [selectedItem, setSelectedItem] = useState(0);


  return (
      <UIContext.Provider value={{ selectedItem, setSelectedItem }}>
        <RouterProvider router={router}>
        </RouterProvider>
      </UIContext.Provider>
  );
}

export default App
