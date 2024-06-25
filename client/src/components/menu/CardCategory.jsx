import React from 'react'
import { Container } from 'react-bootstrap'
import '../../assets/styles/Header.css'

const CardCategory = (props) => {
  return (
        <div className='d-flex justify-content-center w-100'>
            <div className='card-category shadow-sm'>
                <div className='card-category-header'>
                    <img src='/assets/images/logoBig2.png' alt='Antipasti' />
                </div>
                <div className='card-category-body'>
                    <h3>{props.name}</h3>
                </div>
            </div>
        </div>
  )
}

export default CardCategory