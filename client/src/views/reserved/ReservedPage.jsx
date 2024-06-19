import React, { useEffect } from 'react'
import { findAll } from '../../services/articoli.mjs'
import { useState } from 'react'
import { Button, Container, Tab, Table } from 'react-bootstrap'
import { deleteItem } from '../../services/articoli.mjs'
import { useNavigate } from 'react-router-dom'


const ReservedPage = () => {

  const navigate = useNavigate()

  const [prodotti, setProdotti] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {

    setLoading(true)
    const res = await findAll()

    console.log(res)

    setProdotti([...res]);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleEdit = (item) => {
   try{
      navigate('/reserved/editItem', { state: item })
   }catch(err){
      console.log(err)
    }
  }

  const handleDeleteItem = (id, image) => {
    //delete item
    try{
      deleteItem(id, image)
      fetchData()
    }catch(err){
      console.log(err)
    }

  }

  return (
    <>
      <h2>List of all documents</h2>
      {loading && <p>Loading...</p>}
      <Container>
        <Table striped bordered hover className='w-75'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Descrizione</th>
              <th>Prezzo</th>
              <th>Categoria</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {prodotti.map((item, index) => (
              <tr key={index}>
      
                <td>{index + 1}</td>
                <td>{item.nome}</td>
                <td>{item.descrizione}</td>
                <td>{item.prezzo}</td>
                <td>{item.categoria}</td>
                <td className='d-flex align-content-between justify-content-between gap-3'>
                  <Button variant="primary" onClick={() => {handleEdit(item)}}>Edit</Button>
                  <Button variant="danger" onClick={() => handleDeleteItem(item.id, item.image)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ReservedPage