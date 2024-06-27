import React from 'react'
import { Button} from 'react-bootstrap'

const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-dark w-100 text-light' style={{ height: '100vh' }}>
      <h1>404 - Not Found</h1>
      <Button variant='outline-primary' className='rounded-0' href='/'>Torna alla home</Button>
    </div>
  )
}

export default NotFound