import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSwipeable} from 'react-swipeable'


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpen(false),
    onSwipedRight: () => setIsOpen(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        <h2>Drawer Content</h2>
        <p>This is the content inside the drawer.</p>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-button">
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
}

export default App
