import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes'
import { UIContext, AuthContext } from './context/context'
import { useState } from 'react'

function App() {

  const [selectedItem, setSelectedItem] = useState(0);

  const [currentUser, setCurrentUser] = useState(null);
  

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
    <UIContext.Provider value={{selectedItem, setSelectedItem}}>
      <RouterProvider router={router} />
    </UIContext.Provider>
    </AuthContext.Provider>
  );
}

export default App
