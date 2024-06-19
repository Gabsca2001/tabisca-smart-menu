import React from 'react'
import { Container } from 'react-bootstrap'
import '../../assets/styles/Header.css'

const CardCategory = (props) => {
  return (
        <div className='d-flex justify-content-center w-100'>
            <div className='card-category shadow-sm'>
                <div className='card-category-header'>
                    <img src='https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=1135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Antipasti' />
                </div>
                <div className='card-category-body'>
                    <h3>{props.name}</h3>
                </div>
            </div>
        </div>
  )
}

export default CardCategory